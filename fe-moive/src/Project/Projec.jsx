import React from "react";
import { styled } from "styled-components";
import "../Project/Projectt.css";
import trailerrr from "../assets/img/lala land 1.png";
const Projec = () => {
  return (
    <Container className="project">
      <Img src={trailerrr} alt="" className="abc" />
      <Disc className="disc">sdasd</Disc>
    </Container>
  );
};

export default Projec;

// const Disc = styled.div`
// position: absolute;
//     right: 0;
//     left: 0;
//     bottom: -10rem;
//     text-align: left;
//     padding: 0.5rem;
//     background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
//     transition: all 400ms ease-in-out;
//     h1 {
//       font-size: 1rem;
//     }

//     p {
//       width: 90%;
//       font-size: 0.8rem;
//       a {
//         margin-left: 0.4rem;
//         color: red;
//       }
//     }
// `

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-in-out;
`;

const Description = styled.div`
  font-size: 1rem;
`;
const Disc = styled.div`
  position: absolute;
  transform: translate(10px, -91px);
`;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  :hover > .abc {
    transform: scale(1.3);
  }
  :hover > .disc {
    bottom: 0;
  }
`;
