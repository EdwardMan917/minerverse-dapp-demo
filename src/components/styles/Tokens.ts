import { TokenIconProps } from "src/interfaces/AppInterfaces";
import styled from "styled-components";
import MVXPng from "../../assets/tokens/img/MVX.png";
import USDTPng from "../../assets/tokens/img/USDT.png";

export const MVXIcon = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${MVXPng});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const USDTIcon = styled.div<TokenIconProps>`
  width: 25px;
  height: 25px;
  background-image: url(${USDTPng});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: ${props => props.marginLeft? props.marginLeft : "0px"};
`;