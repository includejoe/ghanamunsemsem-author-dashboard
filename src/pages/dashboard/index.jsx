import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { breakPoint } from "../../utils/breakPoints";
import { baseURL } from "../../utils/baseURL";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import {
  Container,
  AuthContentContainer,
  CategoryLabel,
} from "../../common.styles";
import { BlogTile } from "./styles";

export default function Dashboard() {
  const { isShowing } = useContext(SideBarContext);
  const token = localStorage.getItem("jwtToken");
  const [errors, setErrors] = useState("");

  const { data, isLoading } = useQuery("my_blogs", async () => {
    const endPoint = `${baseURL}/blogs/my_blogs`;
    return Axios.get(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        return data.blogs;
      })
      .catch((err) => {
        setErrors(err.response.data.errors[0].msg);
      });
  });

  const isMobile = useMediaQuery({
    query: `(max-width: ${breakPoint.mobile}px)`,
  });

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isMobile ? !isShowing : isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {isLoading ? (
          <Loader />
        ) : errors ? (
          <h2 className="notice">{errors}</h2>
        ) : (
          data &&
          data.map((blog) => {
            const blogImage = `${baseURL}${blog.imageUrl}`;
            const snippet = isMobile
              ? blog.body.slice(0, 50)
              : blog.body.slice(0, 130);
            return (
              <Link exact="true" to={`/blogs/${blog._id}`} key={blog._id}>
                <BlogTile image={blogImage}>
                  <div className="text-area">
                    <h3 className="title">{blog.title}</h3>
                    <p className="snippet">{snippet}...</p>
                    <div className="date-and-category">
                      <p className="date">{moment(blog.updatedAt).fromNow()}</p>
                      <CategoryLabel category={blog.category}>
                        {<i>{blog.category.toUpperCase()}</i>}
                      </CategoryLabel>
                    </div>
                  </div>
                </BlogTile>
              </Link>
            );
          })
        )}
      </AuthContentContainer>
    </Container>
  );
}
