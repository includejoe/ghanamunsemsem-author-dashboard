import React from "react";

import { FooterWrapper } from "./styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>
        Ghanamunsemsem Copyright &copy;{new Date().getFullYear()} All rights
        resserved
      </p>
      <p>DESIGNED & CREATED BY JOE</p>
    </FooterWrapper>
  );
}
