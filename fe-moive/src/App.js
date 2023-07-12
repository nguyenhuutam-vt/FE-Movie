import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Detail } from "./page/Detail";

import LayoutAuth from "./Auth/LayoutAuth";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import { Home } from "./Container/home/Home";
import Profile from "./Container/Profile/Profile";

// import Upcoming from "./Component/UpComing/Upcoming";




import Upcoming from './Component/UpComing/Upcoming';

import About from './Container/About/About';


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

      <Route path="/Profile" element={<Profile />} />

      {/* <Route path="/upcoming" element={<Upcoming />} /> */}
=======
      <Route path='/Profile' element={<Profile/>} />

      <Route path="/upcoming" element={<Upcoming/>}/>

      <Route path="/about" element={<About/>} />

    </Routes>
  );
}

export default App;
