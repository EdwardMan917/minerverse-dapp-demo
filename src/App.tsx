import './App.css';
import MainFrame from './components/MainFrame';
import { Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import FarmAndPool from './pages/FarmAndPool';
import Convert from './pages/Convert';
import SoFiDashboard from './pages/SoFiDashboard';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

import { Paths } from 'src/constants/Menu';
import { Colors } from './constants/Colors';
import { Box } from '@mui/material';


const BoxStyle = {
  background: `${Colors.Black}`
}


function App() {
  return (
    <Box sx={{ display: 'flex' }} style={{ ...BoxStyle }} >
      <MainFrame />
      <Routes>
        <Route path={Paths.homepage} element={<Homepage />} />
        <Route path={Paths.farmsAndPool} element={<FarmAndPool />} />
        <Route path={Paths.convert} element={<Convert />} />
        <Route path={Paths.sofiDashboard} element={<SoFiDashboard />} />
        <Route path={Paths.sofiMarket} element={<ComingSoon />} />
        <Route path={Paths.sofiPortfolio} element={<ComingSoon />} />
        <Route path={Paths.sofiFollowing} element={<ComingSoon />} />
        <Route path={Paths.nft} element={<ComingSoon />} />
        <Route path={Paths.win} element={<ComingSoon />} />
        <Route path={Paths.info} element={<ComingSoon />} />
        <Route path={Paths.voting} element={<ComingSoon />} />
        <Route path={Paths.docs} element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Box>
  );
}

export default App;