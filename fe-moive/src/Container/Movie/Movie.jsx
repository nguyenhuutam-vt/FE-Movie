import Navbar from "../../Component/Navbar";
import { styled } from "styled-components";
import TopMovie from "../../Component/TopMovie";
import TopTenMovie from "../../Component/TopTenMovie/TopTenMovie";
import GenresMovie2 from "../../Component/TopTenMovie/Genres";
import { actionComedies, horror } from "../../data/fetchData";
import Footer from "../../Component/Footer/Footer";
import { useEffect } from "react";
import axiosInstance from "../../service/axios";
import { useState } from "react";
const StyledMovie = styled.div`
  background-color: #1b0301;
  width: 100%;
  overflow-x: hidden;
  .clear {
    clear: both;
  }
  .container {
    width: 84%;
    margin: 0 auto;
  }
`;
const Movie = () => {
  const [cast, setCast] = useState("");
  useEffect(() => {
    axiosInstance
      .get("/movies/top-ten")
      .then((res) => {
        setCast(res.data.data);
      })
      .catch((err) => {});
  }, []);
  console.log("movie", cast);
  return (
    <StyledMovie>
      <Navbar />
      <TopMovie />
      <TopTenMovie />
      <GenresMovie2 data={horror} name={"horror film"} />
      <GenresMovie2 data={actionComedies} name={"Action Comedies"} />
      <Footer />
    </StyledMovie>
  );
};
export default Movie;
