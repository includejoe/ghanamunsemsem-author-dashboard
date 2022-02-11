import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Axios from "axios";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { baseURL } from "../../utils/baseURL";
import { SideBarContext } from "../../contexts/sideBarContext";
import ProfileAvatar from "../../assets/images/profile_avatar.png";
import { Button } from "../../common.styles";
import { NavWrapper, LeftSide, RightSide, LogoArea, Avatar } from "./styles";

export default function Navbar({ authenticated }) {
  const theme = useTheme();
  const sideBarContext = useContext(SideBarContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [errors, setErrors] = useState("");

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

  const LoggedIn = () => {
    return (
      <NavWrapper>
        <LeftSide>
          <span onClick={() => sideBarContext.toggleShow()}>
            <FaBars />
          </span>
          <LogoArea onClick={() => navigate("/dashboard")}>LOGO</LogoArea>
        </LeftSide>
        <RightSide style={{ width: "auto" }}>
          {isSuccess && (
            <Avatar>
              {data && (
                <img
                  src={
                    data?.profilePic
                      ? `${baseURL}${data?.profilePic}`
                      : ProfileAvatar
                  }
                  alt="avatar"
                />
              )}
            </Avatar>
          )}
        </RightSide>
      </NavWrapper>
    );
  };

  const LoggedOut = (
    <NavWrapper>
      <LogoArea onClick={() => navigate("/")}>LOGO</LogoArea>
      <RightSide>
        <Button
          bg="#fff"
          color={theme.color.secondary}
          onClick={() => navigate("/login")}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "23px",
              marginRight: "5px",
            }}
          >
            <FiLogIn />
          </span>
          Login
        </Button>
        <Button onClick={() => navigate("/signup")}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "23px",
              marginRight: "5px",
            }}
          >
            <CgProfile />
          </span>
          Sign Up
        </Button>
      </RightSide>
    </NavWrapper>
  );

  return authenticated ? LoggedIn() : LoggedOut;
}
