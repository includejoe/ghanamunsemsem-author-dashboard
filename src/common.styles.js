import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ length }) => (length ? length : "auto")};
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.sm};
  font-weight: 700;
  background: ${({ theme, bg }) => (bg ? bg : theme.color.secondary)};
  color: ${({ theme, color }) => (color ? color : "#fff")};
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.92);
  }
`;

export { Container, Button };
