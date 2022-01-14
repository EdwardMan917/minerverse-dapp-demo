import styled from "styled-components";
import { Colors } from "src/constants/Colors";
import { DropdownProps, OptionProps } from "src/interfaces/AppInterfaces";

export const Dropdown = styled.ul<DropdownProps>`
  visibility: ${props => props.visible ? "visible" : "hidden"}; 
  width: ${props => props.width}; 
  height: auto;
  background-color: ${Colors.Black};
  border: 1px ${Colors.NavBorderGrey} solid;
  border-radius: 15px;
  position: absolute;
  padding: 0;
  transform: ${props => props.transform}; 
`

export const DropdownOption = styled.li<OptionProps>`
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