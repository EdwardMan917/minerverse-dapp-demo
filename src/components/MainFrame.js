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
import Convert from '../pages/Convert';
import SoFiDashboard from '../pages/SoFiDashboard';

import { MinerverseLogo } from './styles/BusinessLogos';
import MenuDrawer from './MenuDrawer';
import { NavButtonContainer } from './styles/Buttons';
import { NavButton } from './styles/Buttons';
import { WalletIcon, AddressBox, WalletIconBox, AddressContainer } from './styles/StyledValueBox';

import { Colors } from "../constants/Colors.ts";

import { getConnectedAccount, connectWallet, getConversionRate, getContractBalance } from '../utils/wallet';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  paddingRight: "0px !important"
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


const maskAddress = (address) => {
  console.log(address)
  let addressLength = address.length;
  return address.substring(0, 3) + "..." + address.substring(addressLength - 5, addressLength);
}

export default function MainFrame() {
  const [open, setOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [address, setAddress] = React.useState('');

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const handleConnect = () => {
    let walletAddress;
    (async () => {
      walletAddress = await connectWallet();
      if (walletAddress) {
        setConnected(true);
        setAddress(maskAddress(walletAddress));
      }
    })()
  }

  React.useEffect(() => {
    window.addEventListener('load', async () => {
      if (await window.ethereum.isConnected()) {
        setAddress(maskAddress(await getConnectedAccount()));
        setConnected(true);
      }
    });

    (async () => {
      let g = await getContractBalance();
      console.log(g);
    })();

    window.ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length > 0) {
        setAddress(maskAddress(accounts[0]));
      } else if (accounts.length == 0) {
        setConnected(false);
        setAddress('');
      }
    });

  });

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
          <Link to="/minerverse-dapp-demo/" style={{ ...LinkStyle() }} >
            <MinerverseLogo />
          </Link>
          <NavButtonContainer>
            <NavButton visible={!connected} onClick={handleConnect} >Connect Wallet</NavButton>
            <AddressContainer visible={connected}>
              <WalletIconBox>
                <WalletIcon />
              </WalletIconBox>
              <AddressBox>
                {address}
              </AddressBox>
            </AddressContainer>
          </NavButtonContainer>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} setDrawerOpen={setOpen} />
      <Routes>
        <Route path="/minerverse-dapp-demo/" element={<Homepage />} />
        <Route path="/minerverse-dapp-demo/convert" element={<Convert />} />
        <Route path="/minerverse-dapp-demo/sofi-dashboard" element={<SoFiDashboard />} />
      </Routes>
    </Box>
  );
}