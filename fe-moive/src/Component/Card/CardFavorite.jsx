import styled from "styled-components";
import BackgroundImage from "../../assets/img/Movie_Detail.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
const CardFavorite = () => {
  const Container = styled.body`
    width: 300px;
    height: 250px;
    border-radius: 10px;
    background-color: transparent;
    border: white 3px solid;
    position: relative;
  `;
  const Card = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: relative;
  `;
  const Content = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    background-color: white;
    color: black;
    opacity: 0.7;
    bottom: 0;
  `;
  const TextView = styled.div`
    padding: unset;
  `;
  return (
    <Container>
      <Card></Card>
      <Content>
        <TextView>
          <b>Phim Này Hay Nè</b>
          <div>
            <TextView>2023 | Action Comedy</TextView>
          </div>
        </TextView>
        <FavoriteIcon htmlColor="Red"></FavoriteIcon>
      </Content>
    </Container>
  );
};
export default CardFavorite;
