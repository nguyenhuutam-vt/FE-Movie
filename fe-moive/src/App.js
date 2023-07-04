
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Detail } from './page/Detail';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Detail />} />
    </Routes>
  );
}

export default App;
