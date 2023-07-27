import styled from "styled-components";
import NavbarDetail from "./../../Component/NavbarDetail";
import Footer from "./../../Component/Footer/Footer";
import { mobile } from "../../responsive";
import CardFavorite from "../../Component/Card/CardFavorite";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../../service/axios";

const Favorite = () => {
  const Body = styled.body`
    width: 70%;
    height: 400vh;
    padding: 20px;
    margin-top: 100px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    background-color: black;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    overflow: auto;
  `;
  const Container = styled.div`
    background-color: #1b0301;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    ${mobile({
      fontSize: "12px",
    })}
  `;
  //kho
  const [cast, setCast] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/watchlist")
      .then((res) => {
        setCast(res.data);
      })
      .catch((err) => {});
  }, []);
  // console.log("watchlist", cast);
  return (
    <Container>
      <NavbarDetail />
      <Body>
        <CardFavorite cast={cast} />
        {/* <CardFavorite />
        <CardFavorite />
        <CardFavorite /> */}
      </Body>
      <Footer />
    </Container>
  );
};

export default Favorite;
