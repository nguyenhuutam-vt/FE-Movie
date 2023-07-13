import React, { useRef } from "react";

import { styled } from "styled-components";
import Slider from "react-slick";
import {ReactComponent as NextArrow} from '../../assets/icons/nextArrow.svg';
import {ReactComponent as PrevArrow} from '../../assets/icons/prevArrow.svg';

import { mobile } from "../../responsive";
import { topMovie } from "../../data/fetchData";

import { ReactComponent as Num1 } from "../../assets/img/number/1.svg";
import { ReactComponent as Num2 } from "../../assets/img/number/2.svg";
import { ReactComponent as Num3 } from "../../assets/img/number/3.svg";
import { ReactComponent as Num4 } from "../../assets/img/number/4.svg";
import { ReactComponent as Num5 } from "../../assets/img/number/5.svg";
import { ReactComponent as Num6 } from "../../assets/img/number/6.svg";
import { ReactComponent as Num7 } from "../../assets/img/number/7.svg";
import { ReactComponent as Num8 } from "../../assets/img/number/8.svg";
import { ReactComponent as Num9 } from "../../assets/img/number/9.svg";
import { ReactComponent as Num10 } from "../../assets/img/number/10.svg";

const settings = {
  className: "center",
  dots: false,
  infinite: true,
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
  height: 100%;
  width: 100%;
  margin-top: 20px;
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
    width: 90%;
    padding: 1em;
    img {
      width: 50%;
      height: 13em;
    }
  }
  .top:hover{
    .num{
      opacity: 0;
    }
    img{
      transform: scale(1.9);
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
  }
  .rowHeader{
    width: 100%;
    margin: 0 auto;
    /* background-color: rgba(0, 0, 0, 0.3); */
  }
  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
    /* overflow: visible; */
  }
  .slick-list{
  }
`;
const TopTenMovie = () => {
  const arrowRef = useRef(null);
  return (
    <StyledTopTenMovie>
      <Container>
          <h3>Top 10 Film this week</h3>
        <div className="rowHeader">
          <Slider ref={arrowRef} {...settings}>
            {topMovie.map((item) => {
              return (
                <StyledCardTopTen>
                  <div className="top">
                    <div className="num">
                      {item.top === 1 ? (
                        <Num1 />
                      ) : item.top == 2 ? (
                        <Num2 />
                      ) : item.top == 3 ? (
                        <Num3 />
                      ) : item.top == 4 ? (
                        <Num4 />
                      ) : item.top == 5 ? (
                        <Num5 />
                      ) : item.top == 6 ? (
                        <Num6 />
                      ) : item.top == 7 ? (
                        <Num7 />
                      ) : item.top == 8 ? (
                        <Num8 />
                      ) : item.top == 9 ? (
                        <Num9 />
                      ) : (
                        <Num10 />
                      )}
                    </div>
                    <img src={item.img} alt="123" />
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

export default TopTenMovie;
