import React from "react";
import { styled } from "styled-components";
import "../Trailer/WatchTrailer.css";
import { mobile } from "../responsive";
import SliderComp from "./SliderComp";

const Projects = () => {
  const Container = styled.div`
    width: 100%;
    height: 1000px;
    margin: 0 auto;
    padding: 3rem 0;

    text-align: center;
    position: relative;
    @media (max-width: 840px) {
      width: 90%;
    }
    h1 {
      font-size: 1.9rem;
    }

    p {
      width: 28rem;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 0.9rem;
      @media (max-width: 500px) {
        width: 90%;
      }
    }
  `;
  return (
    <Container id="project" className="trailer">
      <div>
        <SliderComp />
      </div>
    </Container>
  );
};

export default Projects;
