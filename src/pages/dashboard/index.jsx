import React, { useContext } from "react";

import Navbar from "../../components/navbar";
import { SideBarContext } from "../../contexts/sideBarContext";
import SideBar from "../../components/sideBar";
import { Container, AuthContentContainer } from "../../common.styles";
import { BlogTile } from "./styles";
import NewsImage from "../../assets/images/news_image.jpg";

export default function Dashboard() {
  const { isShowing } = useContext(SideBarContext);

  return (
    <Container>
      <Navbar authenticated={true} />
      <SideBar isShowing={isShowing} />
      <AuthContentContainer isSideBarShowing={isShowing}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <BlogTile image={NewsImage} key={item}>
            <div className="image"></div>
            <div className="text-area">
              <h3 className="title">Elon Musk Launches Space X.</h3>
              <p className="snippet">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, cupiditate! Lorem ipsum dolor sit amet Lorem ipsum
                dolor...
              </p>
              <p className="date">Yesterday 2:08pm</p>
            </div>
          </BlogTile>
        ))}
      </AuthContentContainer>
    </Container>
  );
}
