import { styled } from "styled-components";
import IPosters1 from "../../img/IPoster1.png";
import IPosters2 from "../../img/IPoster2.png";
import IPosters3 from "../../img/IPoster3.png";
import IPosters4 from "../../img/IPoster4.png";
import IPosters5 from "../../img/IPoster5.png";
import IPosters6 from "../../img/IPoster6.png";
const Posters = () => {
  const GridPoster = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 17px;
    padding: 17px;
  `;
  return (
    <container>
      <h1 className="text">POSTERS</h1>
      <GridPoster>
        <img className="posters" src={IPosters1} alt="" />
        <img className="posters" src={IPosters2} alt="" />
        <img className="posters" src={IPosters3} alt="" />
        <img className="posters" src={IPosters4} alt="" />
        <img className="posters" src={IPosters5} alt="" />
        <img className="posters" src={IPosters6} alt="" />
      </GridPoster>
    </container>
  );
};

export default Posters;
