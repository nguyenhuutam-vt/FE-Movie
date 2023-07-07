import React from "react";
import { styled } from "styled-components";
import { mobile } from "../../responsive";

import { list } from "../../data/fetchData";
import "./ListMovie.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 4,
  initialSlide: 0,
  // nextArrow: <SampleNextArrow className="sample" />,
  // prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
const ListMovie = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1b0301;
    margin-top: -102px;
    /* display: flex; */
    ${mobile({
      height: "100%",

      transform: " translate(0px, -145px)",
      display: "flow-root",
    })}
  `;
  const Movie = styled.div`
    /* padding: 55px 28px; */
    ${mobile({ height: "100%", marginTop: "-50px" })}
  `;
  const Poster = styled.div`
    cursor: pointer;
    ${mobile({ height: "100%" })}
  `;
  const Title = styled.div`
    text-align: center;
    width: 100px;
    color: white;
  `;
  const Img = styled.img`
    ${mobile({ height: "100%" })}
  `;
  return (
    <Container>
      <Slider {...settings}>
        {list.map((item) => {
          return (
            <Movie className="poster">
              <Poster>
                <a href="/">
                  {" "}
                  <Img src={item.imgList} alt="" />
                </a>
              </Poster>
              <Title>{item.title}</Title>
            </Movie>
          );
        })}
      </Slider>
    </Container>
  );
};

export default ListMovie;
