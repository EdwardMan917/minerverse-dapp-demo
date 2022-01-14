import { I18nDropdownProps, I18nOptionProps, MenuFooterProps } from "src/interfaces/AppInterfaces";
import styled from "styled-components";
import { Colors } from "../../constants/Colors";

export const StyledMenuFooter = styled.div<MenuFooterProps>`
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

export const I18nDisplay = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  user-select: none;
`

export const I18nDropdown = styled.ul<I18nDropdownProps>`
  visibility: ${props => props.visible ? "visible" : "hidden"}; 
  width: 120px;
  height: auto;
  background-color: ${Colors.Black};
  border: 1px ${Colors.NavBorderGrey} solid;
  border-radius: 15px;
  position: absolute;
  padding: 0;
  transform: translateY(-90px);
`

export const I18nOption = styled.li<I18nOptionProps>`
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "GothamBold";
  font-size: 15px;
  color: ${Colors.White};
  border-radius: ${props => props.borderRadius};
  cursor: pointer;
  user-select: none;

  &:hover{
    background-color: ${Colors.I18nOptionBackground};
  }
`