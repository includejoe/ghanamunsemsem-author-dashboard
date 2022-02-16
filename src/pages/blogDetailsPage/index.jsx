import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { useQuery } from "react-query";
import moment from "moment";

import { baseURL } from "../../utils/baseURL";
import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import Loader from "../../components/loader";
import DeleteConfirmationModal from "../../components/deleteConfirmationModal";
import { Container, AuthContentContainer, Button } from "../../common.styles";
import {
  Content,
  BlogImage,
  Header,
  Title,
  Date,
  Category,
  Body,
  ControlArea,
} from "./styles";

export default function BlogDetailsPage() {
  const { isShowing } = useContext(SideBarContext);
  const token = localStorage.getItem("jwtToken");
  const [errors, setErrors] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery("blog_details", async () => {
    const endPoint = `${baseURL}/blogs/blog_details/${id}`;
    return Axios.get(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        return data.blog;
      })
      .catch((err) => {
        setErrors(err.response.data.errors[0].msg);
      });
  });

  async function handleDelete() {
    const endPoint = `${baseURL}/blogs/delete_blog/${id}`;
    return Axios.delete(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data.errors[0].msg);
        console.log(errors);
      });
  }

  return (
    <Container>
      <DeleteConfirmationModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDelete={handleDelete}
      />
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {isLoading ? (
          <Loader />
        ) : (
          data && (
            <Content>
              <BlogImage image={`${baseURL}${data.imageUrl}`}></BlogImage>
              <Title>{data.title}</Title>
              <Header>
                <Date>
                  <i>
                    {moment(data.createdAt).format("Do MMMM, YYYY h:mm:ss a")}
                  </i>
                </Date>
                <Category>
                  <i>{data.category.toUpperCase()}</i>
                </Category>
              </Header>
              <Body>{data.body}</Body>
              <ControlArea>
                <Button
                  width="120px"
                  onClick={() => navigate(`/update_blog/${id}`)}
                >
                  Edit
                </Button>
                <Button
                  width="120px"
                  onClick={() => setShowModal((prev) => !prev)}
                >
                  Delete
                </Button>
              </ControlArea>
            </Content>
          )
        )}
      </AuthContentContainer>
    </Container>
  );
}
