import styled from "styled-components";

import { breakPoint } from "../../utils/breakPoints";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 3em;
  position: sticky;
  top: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.281);
  z-index: 99;

  @media screen and (max-width: ${breakPoint.mobile}px) {
    height: 65px;
    padding: 0 1em;
  }
`;

const RightSide = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.secondary};

  @media screen and (max-width: ${breakPoint.mobile}px) {
    width: auto;

    button {
      font-size: 0.8em;

      &:not(:last-of-type) {
        margin-right: 5px;
      }

      span {
        font-size: 19px;
      }
    }
  }
`;

const LeftSide = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.secondary};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    transition: all 0.3s ease-out;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const LogoArea = styled.div`
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export { NavWrapper, RightSide, LeftSide, LogoArea, Avatar };
