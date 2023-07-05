import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo1 from "../img/M logo 1.png";
import ImgLogin from "../img/ACCOUNT 1.png";
const NavbarDetail = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    position: absolute;
    ${mobile({ height: "50px" })};
  `;
  const Img = styled.div`
    /* margin-top: -15px; */
  `;
  const Entrance = styled.div`
    display: flex;
    width: 160px;
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
      <Img>
        <img src={logo1} alt="" />
      </Img>
      <Entrance>
        <img className="icon" src={ImgLogin} alt="" />
        <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
      </Entrance>
    </Container>
  );
};

export default NavbarDetail;
