import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";

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
    height: 55%;
    padding: 20px;
    justify-content: center;

    .title {
      color: #fff;
      font-size: 25px;
    }

    .snippet {
      color: #fff;
    }

    .date-and-category {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .date {
        font-size: 14px;
        color: #fff;
        font-weight: 600;
      }
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

  @media screen and (max-width: ${breakPoint.mobile}px) {
    height: 180px;

    .text-area {
      padding: 5px;
      height: 65%;

      .title {
        font-size: 19.5px;
      }

      .snippet {
        line-height: 1;
        margin-bottom: 5px;
      }
    }
  }
`;

export { BlogTile };
