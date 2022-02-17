import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : "auto")};
  height: 40px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  font-size: ${({ theme, fontSize }) =>
    fontSize ? fontSize : theme.fontSize.sm};
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  background: ${({ theme, bg }) => (bg ? bg : theme.color.secondary)};
  color: ${({ color }) => (color ? color : "#fff")};
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.92);
  }
`;

// Login & Sign Up Styles

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  margin: 2em 0;
  padding: 0 1em;

  label {
    font-weight: 600;
  }

  p {
    color: red;
    margin-top: 1em;

    a {
      text-decoration: underline;
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  .top-text {
    width: 100%;
    color: ${({ theme }) => theme.fontColor.primary};
    margin-bottom: 3em;
    text-align: center;
    line-height: 1.5;

    h3 {
      color: ${({ theme }) => theme.fontColor.secondary};
    }
  }

  .down-text {
    color: ${({ theme }) => theme.fontColor.primary};
    font-weight: 600;
  }

  .error-message {
    width: 100%;
    height: 42px;
    background: #a60000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  button {
    margin-top: 2em;
  }

  .update-password-label {
    color: ${({ theme }) => theme.fontColor.primary};
    font-weight: 600;
    margin-bottom: 1.2em;
    margin-top: 1.2em;
  }
`;

const EachInputArea = styled.div`
  text-align: left;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 1.2em;
  }

  p {
    margin-bottom: 0.25rem;
    color: red;
    font-weight: 600;
    font-size: 11px;
  }
`;

const InputField = styled.input`
  height: 42px;
  width: 100%;
  border-radius: 4px;
  background: #f0f0f0;
  font-family: "QuickSand", sans-serif;
  font-weight: 500;
  border: 1px solid #d1d1d1;
  outline: none;
  padding: 0 10px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

const RadioArea = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;

  input {
    margin-right: 10px;
    cursor: pointer;
  }

  .label {
    font-weight: 600;
    font-size: inherit;
    color: ${({ theme }) => theme.fontColor.primary};
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    cursor: pointer;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
  }

  p {
    margin-bottom: 0.25rem;
    color: red;
    font-weight: 600;
    font-size: 11px;
  }
`;

// Authenticated Styles

const AuthContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px 50px;
  margin-left: ${({ isSideBarShowing }) => (isSideBarShowing ? "250px" : "0")};
  transition: all 0.3s ease-in-out;

  .notice {
  }
`;

export {
  Container,
  Button,
  FormWrapper,
  EachInputArea,
  RadioArea,
  InputField,
  AuthContentContainer,
};
