import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../Component/Navbar";

export const Home = () => {
  const Container = styled.div`
    height: 100%;

    ${mobile({ height: "50px" })}
  `;
  return (
    <Container>
      <Navbar />
    </Container>
  );
};
