import React, { useContext } from "react";

import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import { Container, AuthContentContainer } from "../../common.styles";
import { BlogTile } from "./styles";

export default function Dashboard() {
  const { isShowing } = useContext(SideBarContext);

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <BlogTile key={item}>
            <h5 className="title">Lorem ipsum dolor sit.</h5>
            <p className="snippet">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              adipisci! sit amet...
            </p>
            <h5 className="date">Yesterday</h5>
          </BlogTile>
        ))}
      </AuthContentContainer>
    </Container>
  );
}
