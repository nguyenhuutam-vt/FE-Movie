import { styled } from "styled-components";
import FontBerlin from "../../font/BRLNSR.woff";
const TextView = styled.p`
  @font-face {
    font-family: "Berlin Sans FB";
    src: local("Berlin Sans FB"), local("Berlin Sans FB"),
      url(${FontBerlin}) format("woff2");
    font-style: normal;
  }
  color: #fff;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  margin: unset;
  margin-block-start: unset;
`;
const TitleText = styled.p`
  color: #7b6844;
  font-size: 38px;
  /* font-family: Berlin Sans FB; */
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  margin: unset;
  margin-block-start: unset;
  margin-top: 35px;
`;
const Content = styled.div``;
const OverViewCard = () => {
  return (
    <container>
      <h1 className="text">OVERVIEW</h1>
      <TextView>
        Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston
        Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence
        Kasumba), fight to protect their nation from intervening world powers in
        the wake of King T’Challa’s death. As the Wakandans strive to embrace
        their next chapter, the heroes must band together with the help of War
        Dog Nakia (Lupita Nyong’o) and Everett Ross (Martin Freeman) and forge a
        new path for the kingdom of Wakanda.
      </TextView>
      <Content>
        <TitleText>DIRECTER</TitleText>
        <TextView>Ryan Coogler</TextView>
      </Content>
      <TitleText>WRITER</TitleText>
      <TextView>Ryan Coogler</TextView>
      <TitleText>RELEASE DATE</TitleText>
      <TextView>November 11, 2022</TextView>
      <TitleText>RUNNING TIME</TitleText>
      <TextView>161 MINUTES</TextView>
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
