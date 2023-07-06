import React from "react";
import { styled } from "styled-components";
import wakan from "../../assets/img/wakanda forever 1.png";
import { popular } from "../../data/fetchData";
const Rate = styled.div`
  width: 40px;
  height: 25px;
  border-radius: 20px;
  background-color: ${(props) => props.fill};
  position: absolute;
  /* bottom: 1080px;
left: 155px; */
  text-align: center;
  transform: translate(80px, -320px);
  color: ${(props) => props.fills};
`;

const RateFill = ({ fill, fills, ...rest }) => {
  return <Rate fill={fill} fills={fills} {...rest}></Rate>;
};
const Popular = () => {
  const Container = styled.div`
    height: 1100px;
    width: 100%;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    color: white;

    justify-content: space-between;
  `;
  const PopularRight = styled.div`
    padding: 0px 70px;
  `;
  const SeeAll = styled.div`
    padding: 0px 190px;
    cursor: pointer;
  `;
  const Movie = styled.div`
    padding: 30px 70px;
    /* position: relative; */
    /* position: relative;
    width: 210px; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 100px;
  `;
  const Title = styled.div`
    width: 230px;
    color: white;
    font-size: 24px;
    /* position: absolute;
    transform: translate(0px, 310px); */
  `;
  const Des = styled.div`
    color: #d1d0d0;
    width: 100%;
    height: 16px;
    font-size: 12px;
    /* position: absolute; */
    /* bottom: 700px; */
    /* transform: translate(0px, 390px); */
  `;
  const Img = styled.div``;
  const ImgWakan = styled.img`
    position: relative;
  `;

  return (
    <Container>
      <Wrapper>
        <PopularRight>POPULAR RIGHT NOW</PopularRight>
        <SeeAll>SEE ALL </SeeAll>
      </Wrapper>
      <Movie>
        {popular.map((item) => {
          return (
            <div>
              {" "}
              <div>
                {" "}
                <ImgWakan src={item.img} alt="" />
              </div>
              <RateFill fill={item.fill} fills={item.color}>
                {item.rate}
              </RateFill>
              <Title>{item.title}</Title>
              <Des>{item.des}</Des>
            </div>
          );
        })}
      </Movie>
    </Container>
  );
};

export default Popular;
