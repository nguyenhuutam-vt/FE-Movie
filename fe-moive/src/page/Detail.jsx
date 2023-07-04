import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import NavbarDetail from "../Component/NavbarDetail";
import Banner from "../img/Banner_Detail_Page.png";
import CardVideo from "../Component/Card/CardVideo";
import Video1 from "../img/Trailer_Video_Detail.png";
import Video2 from "../img/Movie_Detail.png";

export const Detail = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    ${mobile({ height: "50px" })}
  `;
  const BannerD = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 1000px;
    background-size: cover;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    /* background-position: fixed; */
  `;
  const Content = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
  `;
  const Footer = styled.footer`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  `;
  const OverView = styled.footer`
    background-color: blue;
    width: 50%;
    height: 1000px;
  `;
  const Posters = styled.footer`
    background-color: red;
    width: 50%;
    height: 1000px;
  `;
  return (
    <Container>
      <BannerD>
        <NavbarDetail />
      </BannerD>
      <Content>
        <CardVideo Title={"WATCH TRAILER"} Video={Video1}></CardVideo>
        <CardVideo Title={"WATCH MOVIE NOW"} Video={Video2}></CardVideo>
      </Content>
      <Footer>
        <OverView></OverView>
        <Posters></Posters>
      </Footer>
    </Container>
  );
};
