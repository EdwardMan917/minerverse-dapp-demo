import { useEffect, useState } from "react";
import { Colors } from "src/constants/Colors";
import { SliderProps, SwitchOverlayProps, SwitchProps } from "src/interfaces/AppInterfaces";
import styled, { keyframes } from "styled-components";

export const Switch = styled.label<SwitchProps>`
  position: relative;
  display: inline-block;
  border-radius: 20px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  margin: 30px;
`

export const Overlay = styled.div<SwitchOverlayProps>`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: transparent;
  color: ${props => props.color};
  font-family: "GothamBold";
  font-size: ${props => props.fontSize};
`

export const LabelContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  & span{
    position: absolute;
    display: flex;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Slide = keyframes`
  100% { transform: translateX(100%)}
`;

const UFO = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  animation-name: ${Slide};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const Slider = styled.div<SliderProps>`
  animation-name: ${Slide}; 
  position: relative;
  margin: 2px;
  border-radius: 20px;
  width: 48%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  -webkit-transition: .4s;
  transition: .4s;
`

function ToggleSwitch(backgroundColor: Colors, paramToggled: boolean, setParamToggled: Function) {

  const toggleClick = () => {
    setParamToggled(!paramToggled);
  }

  return (
    <Switch 
      width="50px"
      height="20px"
      backgroundColor={Colors.ToggleSwitchGrey}
      color={Colors.Black}
    >
      
    </Switch>
  )
}

export default ToggleSwitch;