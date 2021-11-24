import styled from "styled-components";
import { Colors } from "../../constants/Colors.ts";

export const StyledMenuFooter = styled.div`
  visibility: ${props => props.visible ? "visible" : "hidden"};
  border-top: 0.6px ${Colors.NavBorderGrey} solid;
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: absolute;
  bottom: 100px;
`;

export const FooterRow = styled.div`
  height: 33%;
  width: 100%;
  padding: 0 10px;
  margin: 13px 0;
  display: flex;
  flex-direction: row;
`;

export const FooterTextBox = styled.div`
  height: 33%;
  width: 100%;
  font-family: "GothamBold";
  font-size: 15px;
  color: ${Colors.White};
  margin-left: 10px;
`;