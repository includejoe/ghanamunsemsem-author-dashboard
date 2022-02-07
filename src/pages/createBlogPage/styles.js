import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  label {
    font-weight: 600;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    p {
      color: red;
      font-size: 11px;
      font-weight: 500;
    }
  }
`;

const Title = styled.input`
  height: 40px;
  width: 100%;
  height: 40px;
  padding: 10px;
  outline: none;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: all 200ms ease-in;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

const File = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

const Category = styled.select`
  height: 40px;
  width: 100%;
  height: 40px;
  outline: none;
  padding: 10px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

const Body = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 350px;
  max-height: 350px;
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  padding: 10px;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

export { FormWrapper, Title, File, Body, Category };
