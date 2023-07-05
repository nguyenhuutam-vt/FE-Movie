import React from "react";
import styled from "styled-components";
import "./Card.css";
import IFilter_Trailer from "../../img/IFilter_trailer.png";
import { Container } from "@mui/material";
const Cont = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: white;
  position: relative;
  flex-direction: column;
  .h1 {
    font-size: 24px;
    font-weight: 400;
    color: #e4e4e4;
    font-family: Berlin Sans FB;
    font-style: normal;
    line-height: 22px;
  }
`;
const Overlay = styled.div`
  position: relative;
`;
const CardVideo = ({ Video, Title }) => {
  return (
    <Cont>
      <h1 className="underline-text">{Title}</h1>
      <Overlay>
        <img
          className="background_video"
          src={Video}
          alt=""
          style={{ width: "100%" }}
        ></img>
        <img className="filter_play" src={IFilter_Trailer} alt="" />
      </Overlay>
    </Cont>
  );
};
export default CardVideo;
