import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../Component/Navbar";

import Feature from "../Component/Feature";
export const Home = () => {
  const Container = styled.div`
    height: 100%;
    ${mobile({ height: "50px" })}
  `;
  const Black = styled.div`
    height: 100%;
  `;

  return (
    <Container>
      <Navbar />
      {/* <ImgBlack src={imgblack} alt="" /> */}
      <Feature />
    </Container>
  );
};
