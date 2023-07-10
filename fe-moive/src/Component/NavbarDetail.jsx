import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo1 from "../assets/img/M logo 1.png";
import ImgLogin from "../assets/img/ACCOUNT 1.png";

const NavbarDetail = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    ${mobile({ paddingTop: "5px" })}
    .account {
      width: 50px;
      height: 50px;
      display: none;
      ${mobile({
        display: "flex",
        width: "25px",
        height: "25px",
      })}
    }
  `;
  const Img = styled.img`
    /* margin-top: -15px; */
    ${mobile({ display: "flex", width: "25px", Height: "25px" })}
  `;
  const Entrance = styled.div`
    display: flex;
    width: 160px;
    padding-top: 20px;
    justify-content: space-evenly;
    ${mobile({ display: "none" })}
    .icon {
      width: 50px;
      height: 50px;
    }
  `;

  return (
    <Container>
      <Entrance>
        <MenuIcon className="icon" htmlColor="black" />
      </Entrance>

      <Img src={logo1} alt="" />{" "}

      <Entrance>
        <img className="logo" src={ImgLogin} alt="" />
        <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
      </Entrance>
      <img className="account" src={ImgLogin} alt="" />
    </Container>
  );
};

export default NavbarDetail;
