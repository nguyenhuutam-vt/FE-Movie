import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../img/M logo 1.png";
const Navbar = () => {
  const Container = styled.div`
    width: 100%;
    height: 45px;
    background-color: #190401;
    color: white;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    ${mobile({ height: "50px" })};
  `;
  const Nav = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-between;
    ${mobile({ height: "50px" })};
  `;
  const About = styled.button`
    height: 25px;
    width: 110px;
    text-align: center;

    color: white;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
  `;
  const Img = styled.div`
    margin-top: -15px;
  `;
  const Entrance = styled.div`
    display: flex;
  `;
  const SignIn = styled.button`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
  `;
  const SignUp = styled.button`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
  `;
  return (
    <Container>
      <div>
        <MenuIcon />
      </div>
      <Nav>
        <About>ABOUT</About>
        <About>MOVIES</About>
        <Img>
          {" "}
          <img src={logo1} alt="" />
        </Img>
        <About>SERIES</About>
        <About>UPCOMING</About>
      </Nav>
      <Entrance>
        <SignIn>SIGN IN</SignIn>
        <SignUp>SIGN UP</SignUp>
      </Entrance>
    </Container>
  );
};

export default Navbar;
