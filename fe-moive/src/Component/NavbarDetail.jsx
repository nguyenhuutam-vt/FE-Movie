import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../img/M logo 1.png";

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
    margin-top: -15px;
  `;
  const Entrance = styled.div`
    display: flex;
    width: 160px;
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
      <Entrance>
        <MenuIcon htmlColor="black" />
      </Entrance>
      <Img>
        <img src={logo1} alt="" />
      </Img>
      <Entrance>
        <SignIn>SIGN IN</SignIn>
        <SignUp>SIGN UP</SignUp>
      </Entrance>
    </Container>
  );
};

export default NavbarDetail;
