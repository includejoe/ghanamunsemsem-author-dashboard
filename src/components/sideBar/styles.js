import styled from "styled-components";

const Container = styled.div`
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
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
  left: 0;
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

  li {
    display: flex;
    align-items: center;
    height: 50px;
    cursor: pointer;
  }
`;

export { Container, ProfileArea, MenuItems };
