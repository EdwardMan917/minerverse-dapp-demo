import styled from "styled-components";
import { Colors } from "../../constants/Colors.ts";

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
  background: ${Colors.Black}
`;

export const BoxTitle = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 25px;
  color: ${Colors.White};
  margin-top: 30px;
`;

export const BoxValue = styled.div`
  width: 100%;
  font-family: "GothamBold";
  font-size: 45px;
  color: ${Colors.MinerverseYellow};
  text-shadow: 
    0 0 7px ${Colors.MinerverseYellow};
  margin-top: 15px;
`;
