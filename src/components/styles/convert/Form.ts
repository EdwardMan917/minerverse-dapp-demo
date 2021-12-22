import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import DownArrowSvg from "../../../assets/svg/down-arrow.svg";
import { FieldDisplayProps, FieldLabelProps, FormRowProps } from "src/interfaces/AppInterfaces";

export const FormContainer = styled.div`
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Form = styled.div`
  background: ${Colors.ConvertFormGrey};
  color: ${Colors.White};
  border-radius: 20px;
  border-color: ${Colors.FormBorderGrey};
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 400px;
`

export const FormRow = styled.div<FormRowProps>`
  width: 85%;
  min-width: 200px;
  height: ${props => props.height? props.height : "40px"};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 3px 0;
  box-sizing: border-box;
  padding: ${props => props.padding? props.padding : "0px"};
  border:  ${props => props.border? props.border : "none"};
`

export const FieldLabel = styled.label<FieldLabelProps>`
  font-family: "GothamBold";
  font-size: 18px;
  width: ${props => props.width? props.width : "100%" };
  display: flex;
  align-items: flex-end;
  justify-content: left;
`

export const FieldDisplay = styled.div<FieldDisplayProps>`
  font-family: "GothamMedium";
  font-size: 15px;
  width: ${props => props.width? props.width : "100%" };
  min-width: 200px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: right;
`;

export const FieldSelect = styled.select`
  background: ${Colors.Black};
  font-family: "GothamMedium";
  height: 50px;
  font-size: 18px;
  width: 100%;
  min-width: 200px;
  margin: 5px 0;
  color: ${Colors.White};
  border: none;

  :focus-visible{
    outline: none;
  }

  :focus{
    outline: none;
  }
`

export const FieldTextBox = styled.input`
  background: ${Colors.ConvertFormGrey};
  font-family: "GothamMedium";
  height: 40px;
  font-size: 18px;
  width: 85%;
  min-width: 200px;
  margin: 5px 0;
  padding: 0 15px;
  box-shadow: none;
  color: ${Colors.White};
  border: 1px ${Colors.FormBorderGrey} solid;

  :focus-visible{
    outline: none;
  }

  :focus{
    outline: none;
  }
`

export const DownArrow = styled(FormRow)`
  background-image: url(${DownArrowSvg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30px;
  margin: 20px 0 -10px 0;
`