import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BlogImage = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin-bottom: 1em;
`;

const Title = styled.h1``;

const Body = styled.p`
  color: ${({ theme }) => theme.fontColor.secondary};
  text-align: justify;
  margin-bottom: 1em;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  justify-content: space-between;
`;

const Date = styled.span``;

const ControlArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Content, BlogImage, Header, Title, Date, Body, ControlArea };
