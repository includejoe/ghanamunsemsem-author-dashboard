import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import ProfileAvatar from "../../assets/images/profile_avatar.png";
import { AuthContext } from "../../contexts/authContext";
import { Container, ProfileArea, MenuItems, Link } from "./styles";

export default function SideBar({ isShowing }) {
  const { author, logout } = useContext(AuthContext);
  const { firstname, lastname } = author;

  return (
    <Container isShowing={isShowing}>
      <ProfileArea>
        <img src={ProfileAvatar} alt="avatar" />
        <div className="text-area">
          <p>Welcome</p>
          {firstname && lastname && <h5>{firstname + " " + lastname}</h5>}
        </div>
      </ProfileArea>
      <MenuItems>
        <li>
          <Link exact="true" to="/dashboard">
            <span className="item-icon">
              <FaHome />
            </span>
            Home
          </Link>
        </li>
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
