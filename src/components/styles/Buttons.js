import styled from "styled-components";
import { Colors } from "../../constants/Colors.ts";


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

export const LongButton = styled.button`
  background: ${Colors.MinerverseYellow};
  font-family: "GothamBold";
  color: ${Colors.Black};
  font-size: 24px;
  border-width: 0px;
  border-radius: 16px;
  user-select: none;
  width: 45%;

  :active {
    opacity: 0.98;
    transform: translateY(2px);
  }

  @media (max-width: 910px) {
    width: 80%;
    margin: 5px 0;
    height: 50px;
  }
`;

export const ShortButton = styled.button`
  background: ${Colors.MinerverseYellow};
  font-family: "GothamBold";
  color: ${Colors.Black};
  font-size: 24px;
  border-width: 0px;
  border-radius: 16px;
  user-select: none;
  padding: 0 20px 0 20px;
  min-width: 100px;
  height: 60px;
  
  :active {
    opacity: 0.98;
    transform: translateY(2px);
  }
`;

export const NavButtonContainer = styled.div`
  height: 27px;
  min-width: 160px;
  position: relative;

  @media (max-width: 910px) {
    font-size: 12px;
    min-width: 120px;
  }
`;

export const NavButton = styled.button`
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