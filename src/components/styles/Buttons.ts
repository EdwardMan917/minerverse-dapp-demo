import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { ButtonProps, FormButtonProps } from "src/interfaces/AppInterfaces";

export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 100px 0;

  @media (max-width: 910px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
    margin: 0 0 30px 0;
  }
`;

const Button = styled.button`
  background: ${Colors.MinerverseYellow};
  font-family: "GothamBold";
  color: ${Colors.Black};
  border-width: 0px;
  border-radius: 16px;
  user-select: none;

  :active {
    opacity: 0.98;
    transform: translateY(2px);
  }
`;

export const PopupButton = styled(Button)`
  border-radius: 5px;
  font-size: 20px;
  width: auto;
  height: 30px;
  box-sizing: unset;
  padding: 7px 10px;
`

export const LongButton = styled(Button)`
  font-size: 24px;
  width: 45%;

  @media (max-width: 910px) {
    width: 80%;
    margin: 5px 0;
    height: 50px;
  }
`;

export const ShortButton = styled(Button)`
  padding: 0 20px 0 20px;
  min-width: 100px;
  height: 60px;
`;

export const FormButton = styled(Button)<FormButtonProps>`
  width: 100%;
  height: 50px;
  font-size: 20px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
`;

export const ApproveButton = styled(Button)`
  width: 110px;
  height: 32px;
  border-radius: 6px;
`

export const ClaimButton = styled(Button)<FormButtonProps>`
  width: 25%;
  height: 25px;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};
`

export const NavButtonContainer = styled.div`
  height: 27px;
  min-width: 160px;
  position: relative;

  @media (max-width: 910px) {
    font-size: 12px;
    min-width: 120px;
  }
`;

export const NavButton = styled.button<ButtonProps>`
  background: ${Colors.MinerverseYellow};
  font-family: "GothamMedium";
  color: ${Colors.Black};
  font-size: 14px;
  border: 2px ${Colors.MinerverseYellow} solid;
  border-radius: 20px;
  user-select: none;
  height: 27px;
  min-width: 160px;
  visibility: ${props => props.visible ? "visible" : "hidden" };
  position: absolute;

  :hover {
    background: ${Colors.Black};
    color: ${Colors.MinerverseYellow};;
  }

  @media (max-width: 910px) {
    font-size: 12px;
    min-width: 120px;
  }

`;