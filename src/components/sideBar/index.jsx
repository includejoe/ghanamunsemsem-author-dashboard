import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";

import ProfileAvatar from "../../assets/images/profile_avatar.png";
import { Container, ProfileArea, MenuItems, Link } from "./styles";

export default function SideBar({ isShowing }) {
  const navigate = useNavigate();

  return (
    <Container isShowing={isShowing}>
      <ProfileArea>
        <img src={ProfileAvatar} alt="avatar" />
        <div className="text-area">
          <p>Welcome</p>
          <h5>John Doe</h5>
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
      </MenuItems>
    </Container>
  );
}
