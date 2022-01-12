import styled from "styled-components";
import MetaMaskSvg from "src/assets/wallet-icon/metamask.svg";
import WalletConnectSvg from "src/assets/wallet-icon/walletconnect.svg";
import TokenPocketSvg from "src/assets/wallet-icon/tokenpocket.svg";
import TrustWalletSvg from "src/assets/wallet-icon/trustWallet.svg";
import MathWalletSvg from "src/assets/wallet-icon/math.svg";
import SafePalSvg from "src/assets/wallet-icon/safepal.svg";
import { IWalletConfig } from "src/interfaces/AppInterfaces";

const WalletIcon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; 
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

const MetaMaskIcon = styled(WalletIcon)`
  background-image: url(${MetaMaskSvg});
`
const WalletConnectIcon = styled(WalletIcon)`
  background-image: url(${WalletConnectSvg});
`

const TokenPocketIcon = styled(WalletIcon)`
  background-image: url(${TokenPocketSvg});
`

const TrustWalletIcon = styled(WalletIcon)`
  background-image: url(${TokenPocketSvg});
`

const MathWalletIcon = styled(WalletIcon)`
  background-image: url(${MathWalletSvg});
`

const SafePalIcon = styled(WalletIcon)`
  background-image: url(${SafePalSvg});
`

export const Wallets: IWalletConfig[] = [
  {name: "MetaMask", icon: <MetaMaskIcon />},
  {name: "WalletConnect", icon: <WalletConnectIcon />},
  {name: "TokenPocket", icon: <TokenPocketIcon />},
  {name: "Trust Wallet", icon: <TrustWalletIcon />},
  {name: "Math Wallet", icon: <MathWalletIcon />},
  {name: "SafePal", icon: <SafePalIcon />}
]