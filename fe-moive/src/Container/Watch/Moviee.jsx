import React from "react";
import { styled } from "styled-components";

const Moviee = ({ watch }) => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 100px 0px;
  `;
  return (
    <Container>
      {/* <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Trailer
      </h1>

 */}{" "}
      <iframe
        type="text/html"
        style={{ backgroundColor: "#000", marginLeft: "30px" }}
        width="1000px"
        height="500px"
        src={watch?.video}
        // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default Moviee;
