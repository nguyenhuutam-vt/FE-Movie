import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import LayoutAuth from "./Auth/LayoutAuth";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import { Home } from "./Container/home/Home";
import Profile from "./Container/Profile/Profile";
import Setting from "./Container/Profile/Setting";
import Upcoming from "./Component/UpComing/Upcoming";
import About from "./Container/About/About";
import MovieUpComing from "./Component/UpComing/Movie/MovieUpComing";
import Movie from "./Component/UpComing/Movie/Movie";
import Series from "./Container/Serie/Series";

import { Detail } from "./page/Detail";
import Movies from "./Container/Movie/Movie";
import Search from "./Container/Search/Search";
import SearchMovie from "./Container/Search/SearchMovie";
import CastInfo from "./Component/UpComing/Movie/CastInfo";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((item) => item.auth.isAuthenticated);
  // const navigate = useNavigate();
  // if (auth === false) navigate("/login");
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<LayoutAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>

        <Route path="/Profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/searchMovie/:searchTerm" element={<SearchMovie />} />
        <Route path="/cast/:id" element={<CastInfo />} />
      </Routes>
    </>

  );
}

export default App;
