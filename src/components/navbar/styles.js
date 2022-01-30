import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  height: 11vh;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 1.5em;
  position: sticky;
  top: 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.281);
`;

const RightSide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;
const LeftSide = styled.div``;
const NavItems = styled.div`
  display: flex;
  list-style-type: none;
`;

export { NavWrapper, RightSide, LeftSide, NavItems };
