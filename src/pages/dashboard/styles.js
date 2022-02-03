import styled from "styled-components";

const BlogTile = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  background: ${({ theme }) => theme.color.secondary};
  border-radius: 4px;
  justify-content: center;
  color: #fff;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1em;
  cursor: pointer;

  .title {
    margin-right: 3em;
  }

  .snippet {
    margin-right: 3em;
  }

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.481);
  }
`;

export { BlogTile };
