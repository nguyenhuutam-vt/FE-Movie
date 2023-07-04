import React from "react";
import styled from "styled-components";
const Cont = styled.div`
  text-align: center;
  color: white;
  .h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;
const CardVideo = ({ Video, Title }) => {
  return (
    <Cont>
      <h1>{Title}</h1>
      <img src={Video} alt="" style={{ width: "100%" }} />
    </Cont>
  );
};
export default CardVideo;
