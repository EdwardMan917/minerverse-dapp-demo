import styled from "styled-components";
import { Colors } from "../../constants/Colors.ts";


export const StyledButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px 0 100px 0;
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
  
  :active {
    opacity: 0.98;
    transform: translateY(2px);
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

  :hover {
    background: ${Colors.Black};
    color: ${Colors.MinerverseYellow};;
  }

`;