import styled from "styled-components";
import { Colors } from "src/constants/Colors";
import { connectWallet, connectWithWalletConnect } from "src/utils/wallet";
import { Wallets } from "src/constants/Wallets";
import { IWalletConfig } from "src/interfaces/AppInterfaces";

const WalletButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: ${Colors.SubmenuGrey};
  font-family: "GothamLight";
  font-size: 18px;
  color: ${Colors.White};
  display: flex;
  align-items: center;
  border: none;
  margin: 0 0 10px 0 !important;

  &:hover{
    background-color: ${Colors.MinerverseYellow};
    color: ${Colors.Black};
  }
`

const ButtonTitle = styled.div`
  height: 100%;
  width: calc(100% - 25px);
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 10px;
`

const Button = (props: {handleClose: Function, wallet: IWalletConfig}) => {
  
  const handleConnect = () => {
    if(props.wallet.name === "WalletConnect"){
      connectWithWalletConnect();
    } else {
      connectWallet();
    }
    props.handleClose();
  }

  return (
    <WalletButton onClick={handleConnect}>
      <ButtonTitle>{props.wallet.name}</ButtonTitle>
      {props.wallet.icon}
    </WalletButton>
  )
}

export const WalletButtons = (props: {handleClose: Function}) => {
  return (
    <>
      {Wallets.map((wallet: IWalletConfig) => {
        return <Button key={wallet.name} handleClose={props.handleClose} wallet={wallet}/>;
      })}
    </>
  )
}