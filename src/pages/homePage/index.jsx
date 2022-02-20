import React from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Container, Button } from "../../common.styles";
import { TopSection, LeftSide, RightSide } from "./styles";
import Illustration1 from "../../assets/images/be_an_author.svg";

export default function DashboardPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />
      <TopSection>
        <LeftSide>
          <div>
            <h1>Be an Author</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              pariatur obcaecati rem id neque cumque nam. Quibusdam modi
              blanditiis exercitationem veritatis unde fuga obcaecati fugit sed
              voluptatem quis, dolorem quas placeat praesentium velit eius
              corrupti sapiente totam? Veritatis, non modi!
            </p>
            <Button
              length="200px"
              bg={theme.color.faint}
              color={theme.fontColor.primary}
              onClick={() => navigate("/contact")}
            >
              Join the team
            </Button>
          </div>
        </LeftSide>
        <RightSide>
          <img src={Illustration1} alt="be an author" />
        </RightSide>
      </TopSection>
      <Footer />
    </Container>
  );
}
