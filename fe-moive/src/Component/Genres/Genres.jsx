import React, { useState } from "react";
import { styled } from "styled-components";
import "../Genres/Genres.css";
import menu from "../../assets/img/MENU 1.png";
import filter from "../../assets/img/filter-icon-svg-3 1.png";
import { mobile } from "../../responsive";
const Genres = ({ type }) => {
  const [isActive, setActive] = useState(false);

  const Container = styled.div`
    height: 100%;
    width: 100%;
    color: white;
    ${mobile({
      display: "none",
    })};
  `;
  return (
    <Container>
      {/* <div className="category">
        <span>{type === "movie" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre" className="select">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div> */}
      <div className="dropdown">
        <div className="head" style={{ display: "flex" }}>
          <div className="dropdown-btn" onClick={(e) => setActive(!isActive)}>
            <div className="p">Genres</div>
          </div>
          <div className="line"></div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "10px" }}>
              <img src={menu} alt="" />
            </div>
            <div>
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
        {isActive && (
          <div className="dropdown-content">
            <div className="dropdown-item">ACTION</div>
            <div className="dropdown-item">BIOGRAPHY</div>
            <div className="dropdown-item">DRAMA</div>
            <div className="dropdown-item">HISTORY</div>
            <div className="dropdown-item">ROMANCE</div>
            <div className="dropdown-item">TV MOVIE</div>
            <div className="dropdown-item">ACTION</div>
            <div className="dropdown-item">COMEDY</div>
            <div className="dropdown-item">FANTASY</div>
            <div className="dropdown-item">MUSIC</div>
            <div className="dropdown-item">SERIES</div>
            <div className="dropdown-item">THRILLER</div>
            <div className="dropdown-item">ADVENTURE</div>
            <div className="dropdown-item">CRIME</div>
            <div className="dropdown-item">FAMILY</div>
            <div className="dropdown-item">NEWS</div>
            <div className="dropdown-item">SCI-FI</div>
            <div className="dropdown-item">WESTERN</div>
            <div className="dropdown-item">ANIMATION</div>
            <div className="dropdown-item">DOCUMENTARY</div>
            <div className="dropdown-item">HORROR</div>
            <div className="dropdown-item">POLITICS</div>
            <div className="dropdown-item">TALK</div>
            <div className="dropdown-item">WAR</div>

            <select name="genre" id="genre" className="select">
              <option>COUNTRY</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
            <select name="genre" id="genre" className="selectt">
              <option>YEAR</option>
              <option value="adventure">2023</option>
              <option value="comedy">2022</option>
              <option value="crime">2021</option>
            </select>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Genres;
