
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';
import { Home } from './home/Home';
import LayoutAuth from './Auth/LayoutAuth';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';


function App() {
  return (
    <Routes >
      <Route path="/" element={<Detail />} />
      <Route path="/home" element={<Home />} />
      <Route element={<LayoutAuth/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Route>
    </Routes>
  );
}

export default App;
