
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';
import { Home } from './home/Home';
import Login from './Auth/Login';


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
