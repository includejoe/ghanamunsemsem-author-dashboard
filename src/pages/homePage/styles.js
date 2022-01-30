import styled from "styled-components";

const TopSection = styled.div`
  height: 89vh;
  width: 100%;
  display: flex;
  color: #fff;
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
`;

export { TopSection, LeftSide, RightSide };
