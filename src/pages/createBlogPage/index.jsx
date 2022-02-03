import React, { useContext } from "react";

import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import { Container, AuthContentContainer } from "../../common.styles";

export default function CreateBlogPage() {
  const { isShowing } = useContext(SideBarContext);

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        <div>Create Blog</div>
      </AuthContentContainer>
    </Container>
  );
}
