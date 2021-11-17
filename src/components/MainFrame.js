import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import MainContainer from './homepage/MainContainer';
import { MinerverseLogo } from './styles/StyledLogos';
import MenuDrawer from './MenuDrawer';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})( ({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1
}));

const HamburgerIcon = styled(MenuIcon)({
  height: '28px',
  width: '28px'
});

const DrawerOpenedIcon = styled(ChevronLeftIcon)({
  height: '28px',
  width: '28px'
});

export default function MainFrame() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const BoxStyle = {
    background: '#000'
  }

  const AppBarStyle = {
    background: '#000',
    borderBottom: '0.6px #313131 solid'
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
              height: '28px',
              width: '28px'
            }}
          >
            {open ? <DrawerOpenedIcon /> : <HamburgerIcon />}
          </IconButton>
          <MinerverseLogo />
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} setDrawerOpen={setOpen}/>
      <MainContainer />
    </Box>
  );
}