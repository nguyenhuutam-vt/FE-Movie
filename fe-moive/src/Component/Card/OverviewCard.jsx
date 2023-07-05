import { styled } from "styled-components";
const TextView = styled.p`
  color: #fff;
  font-size: 28px;
  font-family: Berlin Sans FB;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;
const TitleText = styled.p`
  color: #7b6844;
  font-size: 24px;
  font-family: Berlin Sans FB;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
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
      <TitleText>DIRECTER</TitleText>
      <TextView>Ryan Coogler</TextView>
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
