import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const SideBar = styled.div`
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
  flex-direction: column;
  height: 100vh;
  width: 250px;
  border-right: 1px solid black;
  padding-left: 35px;
  padding-top: 40px;
  padding-right: 20px;
  flex: 2;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
`;

export { Container, SideBar, ContentContainer };
