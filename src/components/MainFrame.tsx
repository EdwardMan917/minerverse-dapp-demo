import * as React from 'react';
import { useTranslation } from 'react-i18next';
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
import { Dropdown, DropdownOption } from './Dropdown';
import { disconnectWallet } from 'src/utils/wallet';


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
  const [walletDropdownOpen, setWalletDropdownOpen] = React.useState(false);
  const [walletModalOpen, setWalletModalOpen] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const storedAccount = useSelector((state: {account: any}) => state.account);
  const {t, i18n} = useTranslation();

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const handleWalletDropdownOpen = () => {
    setWalletDropdownOpen(!walletDropdownOpen);
  }

  const handleConnect = () => {
    setWalletModalOpen(true);
  }

  const handleDisconnect = () => {
    setWalletDropdownOpen(false);
    disconnectWallet();
  }

  const dropdownElements = [
    "addressContainer",
    "walletIcon",
    "address",
    "wallet",
    "disconnect"
  ]

  React.useEffect(() => {
    window.addEventListener('load', () => {
      let walletAddress = storedAccount.address;
      if (!walletAddress) { return; }
      setAddress(maskAddress(walletAddress));
      setConnected(true);
    });

    window.addEventListener("click", (e: any) => {
      if(!dropdownElements.includes(e.target.id)){
        setWalletDropdownOpen(false);
      }
    })
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
            <NavButton visible={!connected} onClick={handleConnect} >{t("home.connectWallet")}</NavButton>
            <AddressContainer id="addressContainer" visible={connected} onClick={handleWalletDropdownOpen}>
              <WalletIconBox id="walletIcon">
                <WalletIcon />
              </WalletIconBox>
              <AddressBox id="address">
                {address}
              </AddressBox>
            </AddressContainer>
            <Dropdown
              visible={walletDropdownOpen}
              width="120px"
              transform="translateX(30px) translateY(-16px)"
            >
              <DropdownOption 
                id="wallet"
                borderRadius="14px 14px 0 0"
              >
                {t("home.wallet")}
              </DropdownOption>
              <DropdownOption 
                id="disconnect"
                borderRadius="0 0 14px 14px"
                onClick={handleDisconnect}
              >
                {t("home.disconnect")}
              </DropdownOption>
            </Dropdown>
          </NavButtonContainer>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={open} setDrawerOpen={setOpen} />
      {WalletPopup(setWalletModalOpen, walletModalOpen)}
    </>
  );
}