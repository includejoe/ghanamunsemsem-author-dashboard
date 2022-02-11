import styled from "styled-components";

const Top = styled.div`
  width: 80%;
  display: flex;
`;

const ProfilePicture = styled.div`
  height: 200px;
  width: 200px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ImageField = styled.input`
  height: 42px;
  width: 100%;
  border-radius: 4px;
  background: #f0f0f0;
  font-family: "QuickSand", sans-serif;
  font-weight: 500;
  border: 1px solid #d1d1d1;
  outline: none;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

export { Top, ProfilePicture, ImageField };
