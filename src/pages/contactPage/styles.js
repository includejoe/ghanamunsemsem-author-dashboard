import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";

const TopSection = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    flex-direction: column;
    padding: 0 1em;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  flex: 2;

  div {
    padding: 0 2em;
    font-weight: 600;
    text-align: justify;

    .first {
      margin-bottom: 1em;
    }
  }

  @media screen and (max-width: ${breakPoint.mobile}px) {
    div {
      padding: 1em;
      text-align: left;
      line-height: 1.8;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    padding: 0;
    width: 100%;
  }
`;

const Message = styled.textarea`
  width: 100%;
  height: 230px;
  resize: none;
  outline: none;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  padding: 10px;
  background: #f0f0f0;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  transition: all 200ms ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }
`;

export { TopSection, Left, Right, Message };
