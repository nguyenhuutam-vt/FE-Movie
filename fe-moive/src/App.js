
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';
import { Home } from './home/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
