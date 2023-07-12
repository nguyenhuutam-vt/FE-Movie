import React, { useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import logo1 from "../assets/img/M logo 1.png";
import ImgLogin from "../assets/img/ACCOUNT 1.png";

const NavbarDetail = () => {
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: #0d1117;
    justify-content: center;
    border-radius: 10px;
  `;

  const Value = styled.div`
    background-color: transparent;
    border: none;
    padding: 10px;
    display: flex;
    color: white;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    justify-content: space-around;
    text-align: center;
    border-radius: 10px;
    &:not(:active):hover,
    &:focus {
      background-color: #21262c;
    }

    &:focus,
    &:active {
      background-color: #1a1f24;
      outline: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: -10px;
      width: 5px;
      height: 80%;
      background-color: #2f81f7;
      border-radius: 5px;
      opacity: 0;
    }

    &:focus::before,
    &:active::before {
      opacity: 1;
    }

    svg {
      width: 15px;
    }
  `;
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    ${mobile({ paddingTop: "5px" })}.account {
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
  const [showAnalog, setShowAnalog] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(!showOptions);
    setShowAnalog(true);
  };

  const handleMouseLeave = () => {
    setShowAnalog(false);
  };
  const Avatar = styled.div``;

  const Dialog = styled.div`
    position: absolute;
    background-color: transparent;
    right: 0;
    align-items: center;
    text-align: center;
    display: flex;
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
    .icon2 {
      width: 20px;
      height: 20px;
    }
  `;
  const [showOptions, setShowOptions] = useState(false);

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <Container onMouseLeave={handleMouseLeave} >
      <Entrance>
        <MenuIcon className="icon" htmlColor="black" />
      </Entrance>
      <Img src={logo1} alt="" />{" "}
      <Entrance>
        <img
          onMouseEnter={handleMouseEnter}
          className="logo"
          src={ImgLogin}
          alt=""
        />
        {showAnalog && (
          <Dialog>
            {showOptions && (
              <InputContainer>
                <Value>
                  <AccountCircleIcon className="icon2" />
                  Profile
                </Value>
                <Value>
                  <FavoriteIcon className="icon2" />
                  Favorite
                </Value>
                <Value>
                  <SettingsIcon className="icon2" />
                  Setting
                </Value>
                <Value>
                  <LogoutIcon className="icon2" />
                  Logout
                </Value>
              </InputContainer>
            )}
          </Dialog>
        )}
        <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
      </Entrance>
      <img
        className="account"
        src={ImgLogin}
        alt=""
        onClick={handleAvatarClick}
      />
    </Container>
  );
};

export default NavbarDetail;
