import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../Component/Navbar";
import "../index.css";
import Feature from "../Component/Feature";
import ListMovie from "../ListMove/ListMovie";
import WatchTrailer from "../Trailer/WatchTrailer";
import Projects from "../Trailer/Projects";
import Project from "../Trailer/Project";
import Projectt from "../Project/Projectt";
export const Home = () => {
  const Container = styled.div`
    height: 100%;
    ${mobile({ height: "50px" })}
  `;
  const Black = styled.div`
    height: 100%;
  `;
  const LightColor = styled.div`
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
  `;
  return (
    <Container>
      <Navbar />
      {/* <ImgBlack src={imgblack} alt="" /> */}
      <Feature />
      <ListMovie />

      <Projects />
      {/* <LightColor>
        <Projectt />
      </LightColor> */}
    </Container>
  );
};
