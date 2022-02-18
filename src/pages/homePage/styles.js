import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";

const TopSection = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
  color: #fff;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2;
  flex: 2;
  background: ${({ theme }) => theme.color.primary};

  div {
    padding: 0 4em;

    button {
      margin-top: 2em;
    }
  }

  @media screen and (max-width: ${breakPoint.mobile}px) {
    height: 50vh;

    div {
      padding: 1em;

      h1 {
        font-size: 22px;
      }

      p {
        line-height: 1.8;
      }

      button {
        margin-top: 1em;
      }
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  background: ${({ theme }) => theme.color.faint};
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }

  @media screen and (max-width: ${breakPoint.mobile}px) {
    height: 50vh;

    img {
      width: 70%;
    }
  }
`;

export { TopSection, LeftSide, RightSide };
