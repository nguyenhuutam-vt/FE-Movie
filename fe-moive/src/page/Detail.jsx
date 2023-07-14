import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import NavbarDetail from "../Component/NavbarDetail";
import Banner from "../assets/img/Banner_Detail_Page.png";
import CardVideo from "../Component/Card/CardVideo";
import Video1 from "../assets/img/Trailer_Video_Detail.png";
import Video2 from "../assets/img/Movie_Detail.png";
import PostersCard from "../Component/Card/Posters";
import OverViewCard from "../Component/Card/OverviewCard";
import Footer from "../Component/Footer/Footer";
export const Detail = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    /* font-family: Berlin Sans FB; */
  `;
  const BannerD = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50cqmax;
    background-size: contain;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    ${mobile({
      height: "220px",
    })}/* background-position: fixed; */
  `;
  const Content = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    ${mobile({
      flexDirection: "column",
      fontSize: "8px",
      padding: "27px",
    })}
  `;
  const DFooter = styled.footer`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    ${mobile({
      flexDirection: "column",
      width: "100%",
      marginTop: "50px",
    })}
  `;
  const OverView = styled.footer`
    width: 50%;
    margin-left: 37px;
    ${mobile({
      width: "100%",
      marginLeft: "0",
    })}
  `;
  const Posters = styled.footer`
    width: 50%;
    text-align: center;
    align-items: center;
    ${mobile({
      width: "100%",
    })}
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
      <DFooter>
        <OverView>
          <OverViewCard />
        </OverView>
        <Posters>
          <PostersCard />
        </Posters>
      </DFooter>
      <Footer/>
    </Container>
  );
};
