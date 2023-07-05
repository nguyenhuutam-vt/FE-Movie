
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';

import Login from './Auth/Login';
import { Home } from './Container/home/Home';


function App() {
  return (
    <Routes >
      <Route path='/login' element={<Login/>} />
      <Route path="/" element={<Detail />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
