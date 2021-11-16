import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MinerverseLogo } from "./styles/StyledLogos";
import { NavButton } from "./styles/StyledButton";

function NavBar() {
  
  const AppBarStyle = {
    background: '#000',
    'border-bottom': '0.6px #313131 solid'
  }

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        backgroundColor: '#000'
      }}
    >
      <AppBar position="static" style={{...AppBarStyle}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
          <MinerverseLogo />
          <NavButton>Connect Wallet</NavButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;