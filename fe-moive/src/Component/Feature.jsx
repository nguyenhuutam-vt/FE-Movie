import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import imgblack from "../assets/img/sjblackwidow 1 (1).png";
import marvel from "../assets/img/MARVEL LOGO 1 (1).png";
import blackwind from "../assets/img/Black_Widow 1.png";
import rate from "../assets/img/2560px-4_stars 1.png";
import "../Component/Feature.css";
const Feature = () => {
  const Featured = styled.div`
    position: relative;
    ${mobile({ height: "50px" })}
  `;
  const ImgMarvel = styled.img`
    width: 25%;
    height: 100%;
  `;
  const Marvel = styled.div`
    text-align: center;
  `;
  const Rate = styled.img`
    width: 25%;
  `;
  const Ratee = styled.div`
    margin-top: 10px;
  `;
  const Genres = styled.div``;
  return (
    <Featured className="featured">
      <img src={imgblack} alt="" className="imgblack" />
      <div className="info">
        <Marvel>
          <ImgMarvel src={marvel} alt="" />
        </Marvel>
        <img src={blackwind} alt="" className="imgInfo" />
        <Ratee>
          <Rate src={rate} alt="" className="imgInfo" />
        </Ratee>
        <Genres></Genres>
      </div>
    </Featured>
  );
};

export default Feature;
