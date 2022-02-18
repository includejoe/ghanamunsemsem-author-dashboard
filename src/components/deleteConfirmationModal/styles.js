import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 200px;
  background: ${({ theme }) => theme.color.faint};
  color: #000;
  z-index: 10;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .confirmation-text {
    font-weight: 600;
    text-align: center;
    margin-bottom: 1em;
  }

  .buttons-area {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  @media screen and (max-width: ${breakPoint.mobile}px) {
    width: 350px;

    .buttons-area {
      width: 100%;
    }
  }
`;

export { Background, ModalWrapper };
