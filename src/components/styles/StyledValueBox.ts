import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { ReactComponent as WalletSvg } from "../../assets/svg/wallet.svg";
import { AddressContainerProps } from "src/interfaces/AppInterfaces";

export const ValueBox = styled.div`
  box-sizing: border-box;
  width: 100%; 
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border: 2px;
  border-style: solid;
  border-color: ${Colors.White};
  border-radius: 15px;
  margin-bottom: 40px;
  padding-left: 20px;
  background: ${Colors.Black};
`;

export const BoxTitle = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 25px;
  color: ${Colors.White};
  margin-top: 30px;

  @media (max-width: 900px){
    font-size: 25px;
  }
`;

export const BoxValue = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 45px;
  color: ${Colors.MinerverseYellow};
  text-shadow: 
    0 0 7px ${Colors.MinerverseYellow};
  margin-top: 15px;

  @media (max-width: 900px){
    font-size: 35px;
  }
`;

export const WalletIcon = styled(WalletSvg)`
  transform: scale(0.6) translateY(-2px);
`;

export const WalletIconBox = styled.div`
  position: absolute;
  background: ${Colors.Black};
  border: 2px ${Colors.AddressBoxGrey} solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  z-index: 1;
`;

export const AddressBox = styled.div`
  padding-top: 3px;
  padding-left: 20px;
  background: ${Colors.AddressBoxGrey};
  font-family: "GothamMedium";
  color: ${Colors.White};
  font-size: 15px;
  border-radius: 20px;
  user-select: none;
  line-height: 27px;
  height: 27px;
  min-width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;

  @media (max-width: 910px) {
    font-size: 12px;
    min-width: 120px;
  }

`;

export const AddressContainer = styled.div<AddressContainerProps>`
  visibility: ${props => props.visible ? "visible" : "hidden" };
  height: 27px;
  width: 130px;
  display: flex;
  align-items: center;
`
