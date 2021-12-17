import './App.css';
import MainFrame from './components/MainFrame';
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Convert from './pages/Convert';
import SoFiDashboard from './pages/SoFiDashboard';

import { Paths } from 'src/constants/Menu';


function App() {
  return (
    <>
      <Routes>
        <Route path={Paths.homepage} element={<Homepage />} />
        <Route path={Paths.convert} element={<Convert />} />
        <Route path={Paths.sofiDashboard} element={<SoFiDashboard />} />
      </Routes>
      <MainFrame />
    </>
  );
}

export default App;