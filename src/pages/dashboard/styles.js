import styled from "styled-components";

const BlogTile = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 100%;
  justify-content: end;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.481);
  margin-bottom: 10px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(17, 17, 17, 0.6) 100%
    ),
    url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;

  .text-area {
    display: flex;
    flex-direction: column;
    height: 50%;
    padding: 20px;
    justify-content: center;

    .title {
      color: #fff;
      font-size: 25px;
      font-weight: 700px;
    }

    .snippet {
      color: #fff;
      font-weight: 700px;
    }

    .date {
      font-size: 14px;
      color: #fff;
      font-weight: 600;
    }
  }

  &:hover {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(30, 30, 30, 1) 100%
      ),
      url(${({ image }) => image});
  }
`;

export { BlogTile };
