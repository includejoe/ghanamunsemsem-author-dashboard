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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  .inner-container {
    width: 450px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.color.primary};
    border: none;
    border-radius: 8px;
    margin: 2em 0;
    padding: 0 1em;

    p {
      color: #fff;
      margin-top: 1em;

      a {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.secondary};
      }
    }
  }

  .top-text {
    width: 100%;
    color: #fff;
    margin-bottom: 3em;
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
`;

const EachInputArea = styled.div`
  text-align: left;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 1.2em;
  }

  p {
    margin-bottom: 0.25rem;
    color: #fff;
    font-size: 11px;
  }
`;

const InputField = styled.input`
  height: 42px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #d1d1d1;
  outline: none;
  padding: 0 10px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

export { Container, Button, FormWrapper, EachInputArea, InputField };
