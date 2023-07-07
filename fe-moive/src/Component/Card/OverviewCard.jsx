import { styled } from "styled-components";
import FontBerlin from "../../font/BRLNSR.woff";
import { mobile } from "../../responsive";
const TextView = styled.p`
  @font-face {
    font-family: "Berlin Sans FB";
    src: local("Berlin Sans FB"), local("Berlin Sans FB"),
      url(${FontBerlin}) format("woff2");
    font-style: normal;
  }
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin: unset;
  margin-block-start: unset;
  padding: 10px;
  ${mobile({ fontSize: "15.5px", lineHeight: "14.2px" })}
`;
const TitleText = styled.p`
  color: #7b6844;
  font-size: 24px;
  left: 50%;
  /* font-family: Berlin Sans FB; */
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 10px;
  margin: unset;
  margin-block-start: unset;
  ${mobile({ fontSize: "15.5px", lineHeight: "14.2px", margin: "0px" })}
  margin-top: 35px;
`;
const Content = styled.div`
  ${mobile({ display: "flex", flexDirection: "row" })}
`;
const ViewRight = styled.div`
  ${mobile({ width: "40%" })}
`;
const ViewLeft = styled.div`
  ${mobile({ width: "60%" })}
`;
const OverViewCard = () => {
  return (
    <container className="cont">
      <h1 className="text">OVERVIEW</h1>
      <Content>
        <ViewLeft>
          <TextView>
            Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku
            (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including
            Florence Kasumba), fight to protect their nation from intervening
            world powers in the wake of King T’Challa’s death. As the Wakandans
            strive to embrace their next chapter, the heroes must band together
            with the help of War Dog Nakia (Lupita Nyong’o) and Everett Ross
            (Martin Freeman) and forge a new path for the kingdom of Wakanda.
          </TextView>
        </ViewLeft>
        <ViewRight>
          <TitleText>DIRECTER</TitleText>
          <TextView>Ryan Coogler</TextView>
          <TitleText>WRITER</TitleText>
          <TextView>Ryan Coogler</TextView>
          <TitleText>RELEASE DATE</TitleText>
          <TextView>November 11, 2022</TextView>
          <TitleText>RUNNING TIME</TitleText>
          <TextView>161 MINUTES</TextView>
        </ViewRight>
      </Content>
      <TitleText>CAST</TitleText>
      <TextView>
        Angela Bassett, Letitia Wright, Winston Duke, Danai Gurira, Florence
        Kasumba, Lupita Nyong’o, Martin Freeman, Tenoch Huerta, Dominique
        Thorne, Michaela Coel, Mabel Cadena and Alex Livanalli.
      </TextView>
    </container>
  );
};

export default OverViewCard;
