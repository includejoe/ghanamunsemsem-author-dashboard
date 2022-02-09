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

const Category = styled.span`
  background: ${({ theme }) => theme.color.faint};
  color: ${({ theme }) => theme.fontColor.primary};
  height: 30px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  padding-right: 5px;
`;

const ControlArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Content, BlogImage, Header, Title, Date, Category, Body, ControlArea };
