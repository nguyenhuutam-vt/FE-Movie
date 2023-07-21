import React from "react";
import { styled } from "styled-components";
import { mobile } from "../../responsive";
import Navbar from "../../Component/Navbar";
import "../../index.css";
import Feature from "../../Component/Feature";
import ListMovie from "../../Component/ListMove/ListMovie";
import { useEffect } from "react";
import Projects from "../../Component/Trailer/Projects";
import Footer from "../../Component/Footer/Footer";
import axios from "../../service/axios";
export const Home = () => {
  useEffect(() => {
    axios
      .get("/movies")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {});
  }, []);
  const Container = styled.div`
    height: 100%;
    ${mobile({ height: "100%" })}
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
  const Container1 = styled.div`
    ${mobile({ height: "100%" })}
  `;
  return (
    <Container>
      <Container1>
        <Navbar />
        <Feature />
      </Container1>
      <ListMovie />
      <Projects />
      <Footer />
    </Container>
  );
};
