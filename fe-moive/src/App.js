



import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';
import LayoutAuth from './Auth/LayoutAuth';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import { Home } from './Container/home/Home';
import Profile from './Container/Profile/Profile';

import Upcoming from './Component/UpComing/Upcoming';
import About from './Container/About/About';
import MovieUpComing from './Component/UpComing/Movie/MovieUpComing';
import Movie from './Component/UpComing/Movie/Movie';
import Series from './Container/Serie/Series';


import Movies from './Container/Movie/Movie';


function App() {
  return (
    <Routes>

      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Home />} />

      <Route element={<LayoutAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Route>
      <Route path="/Profile" element={<Profile />} />
      <Route path="/about" element={<About/>} />
      <Route path='/movie/:id' element={<Movie/>}/>
      <Route path='/series' element={<Series/>} />
      <Route path="/upcoming" element={<Upcoming />} />


      <Route path='/Profile' element={<Profile/>} />

      <Route path="/upcoming" element={<Upcoming/>}/>


      <Route path='/movies' element={<Movies/>} />

    </Routes>
  );
}

export default App;
