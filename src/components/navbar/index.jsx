import React from "react";
import { useTheme } from "styled-components";

import { NavWrapper, RightSide, LeftSide, NavItems } from "./styles";
import { Button } from "../../common.styles";

export default function Navbar() {
  const theme = useTheme();

  const LoggedIn = (
    <NavWrapper>
      <h1>Logged Out</h1>
    </NavWrapper>
  );

  const LoggedOut = (
    <NavWrapper>
      <LeftSide>LOGO</LeftSide>
      <RightSide>
        <Button bg="#fff" color={theme.color.secondary}>
          Login
        </Button>
        <Button>Sign Up</Button>
      </RightSide>
    </NavWrapper>
  );

  return LoggedOut;
}
