import Navbar from "../../Component/Navbar";
import {styled} from "styled-components";
import TopMovie from "../../Component/TopMovie";
import TopTenMovie from "../../Component/TopTenMovie/TopTenMovie";
import GenresMovie2 from "../../Component/TopTenMovie/Genres";
import { actionComedies, horror } from "../../data/fetchData";
import Footer from "../../Component/Footer/Footer";
const StyledMovie = styled.div`
    background-color: #1B0301;
    width: 100%;
    .clear{
        clear: both;
    }
    .container{
        width: 84%;
        margin: 0 auto;
    }
`;
const Movie = () => {
    return(
        <StyledMovie>
            <Navbar/>
            <TopMovie/>
            <div className="container">
                <TopTenMovie/>
                <GenresMovie2 data={horror} name={'horror film'}/>
                <GenresMovie2 data={actionComedies} name={'Action Comedies'}/>
            </div>
            <Footer/>
        </StyledMovie>
    )
}
export default Movie;