import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../assets/img/M logo 1.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const Container = styled.div`
    width: 100%;
    height: 45px;
    background-color: #190401;
    color: white;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    position: fixed;
    z-index: 999;
    ${mobile({
      display: "grid",
      rowGap: "20px",
      padding: "0px 0px",
      height: "50%",
      width: "0%",
      float: "left",
      position: "absolute",
    })};
  `;
  const Nav = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-between;
    ${mobile({
      height: "100%",
      display: "block",
      rowGap: "25px",
      position: "relative",
      width: "20%",
      transform: "translate(10px, -50px)",
    })};
  `;
  const About = styled.div`
    height: 25px;
    width: 110px;
    text-align: center;

    color: white;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({
      background: "none",
      textAlign: "inherit",
      transform: "translate(10px, 115px)",
    })};
  `;
  const Img = styled.div`
    margin-top: -15px;
    ${mobile({
      height: "50px",
      position: "absolute",

      left: "30px",
    })};
  `;
  const Entrance = styled.div`
    display: flex;
    ${mobile({
      display: "block",
      position: "absolute",
      transform: "translate(20px, 180px)",
      padding: "0px 0px",
    })};
  `;
  const SignIn = styled.div`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({ background: "none" })};
  `;
  const SignUp = styled.div`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({ background: "none" })};
  `;
  const Menu = styled.div`
    ${mobile({ display: "none" })};
  `;

  return (
    <Container>
      <Menu>
        <MenuIcon />
      </Menu>
      <Nav>
        <NavLink to="/about">
          <About>ABOUT</About>
        </NavLink>
        <NavLink to="/movie">
        <About>MOVIES</About>

        </NavLink>
        <NavLink to="/home">
          <Img>
            {" "}
            <img src={logo1} alt="" />
          </Img>
        </NavLink>
        <About>SERIES</About>

        <NavLink to="/upcoming">
          <About>UPCOMING</About>
        </NavLink>
      </Nav>
      <Entrance>
        <NavLink to="/login">
          {" "}
          <SignIn>SIGN IN</SignIn>
        </NavLink>
        <NavLink to="/signup">
          <SignUp>SIGN UP</SignUp>
        </NavLink>
      </Entrance>
    </Container>
  );
};

export default Navbar;
