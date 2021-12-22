import { TokenIconProps } from "src/interfaces/AppInterfaces";
import styled from "styled-components";

import BNBPng from "../../assets/tokens/img/BNB.png";
import CAKEPng from "../../assets/tokens/img/CAKE.png";
import MVXPng from "../../assets/tokens/img/MVX.png";
import WBNBPng from "../../assets/tokens/img/WBNB.svg";
import BUSDPng from "../../assets/tokens/img/BUSD.png";
import USDTPng from "../../assets/tokens/img/USDT.png";
import USDCPng from "../../assets/tokens/img/USDC.png";
import ETHPng from "../../assets/tokens/img/ETH.png";
import BTCBPng from "../../assets/tokens/img/BTCB.png";

const TokenIcon = styled.div<TokenIconProps>`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: ${props => props.marginRight? props.marginRight : "0px"};
`
export const BNBIcon = styled(TokenIcon)`
  background-image: url(${BNBPng});
`;

export const CAKEIcon = styled(TokenIcon)`
  background-image: url(${CAKEPng});
`;

export const MVXIcon = styled(TokenIcon)`
  background-image: url(${MVXPng});
`;

export const WBNBIcon = styled(TokenIcon)`
  background-image: url(${WBNBPng});
`;

export const BUSDIcon = styled(TokenIcon)`
  background-image: url(${BUSDPng});
`;

export const USDTIcon = styled(TokenIcon)`
  background-image: url(${USDTPng});
`;

export const USDCIcon = styled(TokenIcon)`
  background-image: url(${USDCPng});
`;

export const ETHIcon = styled(TokenIcon)`
  background-image: url(${ETHPng});
`;

export const BTCBIcon = styled(TokenIcon)`
  background-image: url(${BTCBPng});
`;