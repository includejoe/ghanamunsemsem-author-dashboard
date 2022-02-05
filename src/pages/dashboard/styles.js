import styled from "styled-components";

const BlogTile = styled.div`
  display: flex;
  height: 90px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.481);
  margin-bottom: 10px;

  cursor: pointer;

  .image {
    height: 100%;
    width: 20%;
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    margin-right: 2em;
  }

  .text-area {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px 0;
    justify-content: center;
  }

  .title {
    color: ${({ theme }) => theme.color.secondary};
  }

  .snippet {
    color: ${({ theme }) => theme.fontColor.secondary};
  }

  .date {
    font-size: 14px;
    color: ${({ theme }) => theme.fontColor.secondary};
    font-weight: 600;
  }

  &:hover {
    filter: brightness(0.3);
  }
`;

export { BlogTile };
