import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.primary};
  color: #fff;
  height: 100vh;
  width: 20%;
  margin-top: 72px;
  padding-left: 25px;
  padding-top: 20px;
  padding-right: 20px;
  position: fixed;
  left: ${({ isShowing }) => (isShowing ? 0 : "-1000px")};
  transition: all 0.3s ease-in-out;
`;

const ProfileArea = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  margin-bottom: 3em;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1em;
  }
`;

const MenuItems = styled.ul`
  list-style-type: none;
  font-size: 22px;

  .item-icon {
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;

const Link = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
  margin-bottom: 20px;
  padding-left: 10px;

  &.active {
    border-left: 5px solid ${({ theme }) => theme.color.secondary};
  }
`;

export { Container, ProfileArea, MenuItems, Link };
