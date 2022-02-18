import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    padding: 0 1em;
    p {
      font-size: 13px;
      text-align: center;
    }
  }
`;

export { FooterWrapper };
