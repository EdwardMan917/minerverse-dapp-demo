import * as React from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { MinerverseLogo } from './styles/BusinessLogos';
import MenuDrawer from './MenuDrawer';
import { NavButtonContainer } from './styles/Buttons';
import { NavButton } from './styles/Buttons';
import { WalletIcon, AddressBox, WalletIconBox, AddressContainer } from './styles/StyledValueBox';

import { Colors } from "../constants/Colors";

import { AppBarProps } from 'src/interfaces/AppInterfaces';
import { Paths } from 'src/constants/Menu';
import { useSelector } from 'react-redux';
import WalletPopup from './WalletPopup';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
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


const maskAddress = (address: string) => {
  let addressLength = address.length;
  return address.substring(0, 3) + "..." + address.substring(addressLength - 4, addressLength);
}

export default function MainFrame() {
  const [open, setOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [walletModalOpen, setWalletModalOpen] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const storedAccount = useSelector((state: {account: any}) => state.account);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const handleConnect = () => {
    setWalletModalOpen(true);
  }

  React.useEffect(() => {
    window.addEventListener('load', () => {
      let walletAddress = storedAccount.address;
      if (!walletAddress) { return; }
      setAddress(maskAddress(walletAddress));
      setConnected(true);
    });
  });

  React.useEffect(() => {
    let newAddress = storedAccount.address
    if(!newAddress){
      setAddress("");
      setConnected(false);
      return;
    }
    setAddress(maskAddress(newAddress));
    setConnected(true);
  }, [storedAccount]);
  
  const AppBarStyle = {
    background: `${Colors.Black}`,
    borderBottom: `0.6px ${Colors.NavBorderGrey} solid`
  }
  
  return (
    <>
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
          <Link to={Paths.homepage} style={{ ...LinkStyle() }} >
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
      {WalletPopup(setWalletModalOpen, walletModalOpen)}
    </>
  );
}