import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import list1 from "../assets/img/avatar.png";
import { list } from "../data/fetchData";
import "../ListMove/ListMovie.css";
const ListMovie = () => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1b0301;
    margin-top: -5px;
    display: flex;
    ${mobile({ height: "50px" })}
  `;
  const Movie = styled.div`
    padding: 55px 28px;
  `;
  const Poster = styled.div`
    cursor: pointer;
  `;
  const Title = styled.div`
    text-align: center;
    width: 100px;
    color: white;
  `;
  return (
    <Container>
      {list.map((item) => {
        return (
          <Movie className="poster">
            <Poster>
              <img src={item.imgList} alt="" />
            </Poster>
            <Title>{item.title}</Title>
          </Movie>
        );
      })}
    </Container>
  );
};

export default ListMovie;
