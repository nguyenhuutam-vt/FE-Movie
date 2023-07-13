import React, { useRef } from "react";

import { styled } from "styled-components";
import Slider from "react-slick";
import {ReactComponent as NextArrow} from '../../assets/icons/nextArrow.svg';
import {ReactComponent as PrevArrow} from '../../assets/icons/prevArrow.svg';

import { mobile } from "../../responsive";

const settings = {
  className: "center",
  adaptiveHeight: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1em;
  h3{
    margin-top: 0;
  }
  ${mobile({
    height: "100%",
    transform: "translate(0px, -135px)",
  })};

`;
const Buttons = styled.div`
  button:hover{
    opacity: 1;
  }
  button {
    opacity: 0;
    width: 5em;
    height: 73.5%;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 22.5%;
  }

  .back {
    left: 0%;
  }
  .next{
    right: 1.5%;
  }
  ${mobile({
    display: "none",
  })};
  svg{
    path{
      stroke: #FFFFFF;
      fill: #FFFFFF;
    }
  }
`;
const StyledCardTopTen = styled.div`
  .top {
    display: flex;
    position: relative;
    width: 13em;
    padding: 1em;
    .img1 {
      cursor: pointer;
      object-fit: cover;
      transition: 0.2s ease-in-out;
      width: 100%;
      height: 19em;
      /* z-index: 99; */
    }
  }
  .overLay{
    cursor: pointer;
    position: absolute;
    padding: 0 1em 1em 1em;
    bottom: 4.5%;
    width: 73.5%;
    border-radius: 15px;
    color: #FFFFFF;
    background-image: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,1));
    opacity: 0;
    transition: 0.4s ease-in-out;
    z-index: 100;
  }
  .top:hover{
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
    .overLay{
      opacity: 1;
    }
  }
  .num {
    width: 50%;
    svg {
      height: 13em;
    }
  }
`;
const StyledTopTenMovie = styled.div`
  width: 100%;
  h3 {
    color: #ffffff;
    font-size: 26px;
    z-index: 1;
  }
  .rowHeader{
    width: 100%;
  }
  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
    /* overflow-y: visible; */
  }
  /* .slick-list{
  } */
  .slick-list::-webkit-scrollbar{
    display: none;
  }
`;
const GenresMovie2 = ({data, name}) => {
  const arrowRef = useRef(null);
  const datas = [...data];
  return (
    <StyledTopTenMovie>
      <Container>
        <h3>{name}</h3>
        <div className="rowHeader">
          <Slider ref={arrowRef} {...settings}>
            {datas.map((item) => {
              return (
                <StyledCardTopTen className="hv">
                  <div className="top">
                    <img className="img1" src={item.img} alt="123" />
                  <div className="overLay">
                    <div className="title">
                      <h1>Title</h1>
                    </div>
                    <div className="description">
                      <p>Description tio n tion tio ntion tion tion</p>
                    </div>
                  </div>
                  </div>
                </StyledCardTopTen>
              );
            })}
          </Slider>
          <Buttons>
            <button
              onClick={() => arrowRef.current.slickPrev()}
              className="back"
            >
              <PrevArrow/>
            </button>
            <button
              onClick={() => arrowRef.current.slickNext()}
              className="next"
            >
              <NextArrow/>
            </button>
          </Buttons>
        </div>
      </Container>
    </StyledTopTenMovie>
  );
};

export default GenresMovie2;
