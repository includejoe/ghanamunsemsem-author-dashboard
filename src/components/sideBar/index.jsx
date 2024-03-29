import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { FaHome } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
// import { BiCategory } from "react-icons/bi";

import ProfileAvatar from "../../assets/images/profile_avatar.png";
import { baseURL } from "../../utils/baseURL";
import { AuthContext } from "../../contexts/authContext";
import {
  Container,
  ProfileArea,
  MenuItems,
  Link,
  ProfileLink,
  // Category,
  // CatLink,
} from "./styles";

export default function SideBar({ isShowing }) {
  const { logout } = useContext(AuthContext);
  const token = localStorage.getItem("jwtToken");
  const [errors, setErrors] = useState("");
  // const [isCategoryClicked, setIsCategoryClicked] = useState(false);

  const { isSuccess, data } = useQuery("author", async () => {
    const endPoint = `${baseURL}/auth/author`;
    return Axios.get(endPoint, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then(({ data }) => {
        return data.author;
      })
      .catch((err) => {
        setErrors(err.response.data.errors[0].msg);
        console.log(errors);
      });
  });

  return (
    <Container isShowing={isShowing}>
      {isSuccess && (
        <ProfileLink exact="true" to="/profile">
          <ProfileArea>
            <img
              src={
                data?.profilePic
                  ? `${baseURL}${data?.profilePic}`
                  : ProfileAvatar
              }
              alt="avatar"
            />

            <div className="text-area">
              <p>Welcome</p>
              {data && <h5>{data.firstname + " " + data.lastname}</h5>}
            </div>
          </ProfileArea>
        </ProfileLink>
      )}

      <MenuItems>
        <li>
          <Link exact="true" to="/dashboard">
            <span className="item-icon">
              <FaHome />
            </span>
            Home
          </Link>
        </li>

        {/* <Category
          isCategoryClicked={isCategoryClicked}
          onClick={() => setIsCategoryClicked((prev) => !prev)}
        >
          <div>
            <span className="item-icon">
              <BiCategory />
            </span>
            Category
          </div>

          <ul>
            <li>
              <CatLink exact="true" to="/category/general">
                General
              </CatLink>
            </li>
            <li>
              <CatLink exact="true" to="/category/politics">
                Politics
              </CatLink>
            </li>
            <li>
              <CatLink exact="true" to="/category/sports">
                Sports
              </CatLink>
            </li>
            <li>
              <CatLink exact="true" to="/category/entertainment">
                Entertainment
              </CatLink>
            </li>
            <li>
              <CatLink exact="true" to="/category/business">
                Business
              </CatLink>
            </li>
            <li>
              <CatLink exact="true" to="/category/technology">
                Technology
              </CatLink>
            </li>
          </ul>
        </Category> */}

        <li>
          <Link exact="true" to="/create_blog">
            <span className="item-icon">
              <BsPenFill />
            </span>
            Create Blog
          </Link>
        </li>

        <li className="logout" onClick={() => logout()}>
          <span className="item-icon">
            <FiLogOut />
          </span>
          Logout
        </li>
      </MenuItems>
    </Container>
  );
}
