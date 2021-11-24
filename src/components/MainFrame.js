import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Homepage from '../pages/Homepage';
import SoFiDashboard from '../pages/SoFiDashboard';

import { MinerverseLogo } from './styles/BusinessLogos';
import MenuDrawer from './MenuDrawer';
import { NavButton } from './styles/Buttons';

import { Colors } from "../constants/Colors.ts";


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})( ({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

const IconStyle = () => ({
  height: '28px',
  width: '28px'
})

const LinkStyle = () => ({
  flexGrow: 1,
  width: '120px'
})

const HamburgerIcon = styled(MenuIcon)({
  ...IconStyle()
});

const DrawerOpenedIcon = styled(ChevronLeftIcon)({
  ...IconStyle()
});

export default function MainFrame() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const BoxStyle = {
    background: `${Colors.Black}`
  }

  const AppBarStyle = {
    background: `${Colors.Black}`,
    borderBottom: `0.6px ${Colors.NavBorderGrey} solid`
  }

  return (
    <Box sx={{ display: 'flex' }} style={{ ...BoxStyle }} >
      <CssBaseline />
      <AppBar style={{ ...AppBarStyle }} open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              marginRight: '20px',
              ...IconStyle()
            }}
          >
            {open ? <DrawerOpenedIcon /> : <HamburgerIcon />}
          </IconButton>
          <Link to="/" style={{ ...LinkStyle() }} >
            <MinerverseLogo />
          </Link>
          <NavButton>Connect Wallet</NavButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} setDrawerOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sofi-dashboard" element={<SoFiDashboard />} />
      </Routes>
    </Box>
  );
}