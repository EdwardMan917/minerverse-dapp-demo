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
  user-select: None;
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
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Label = styled.label`
  display: flex;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.White};
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  border-radius: 20px;
  width: 48%;
  height: calc(100% - 6px);
  background-color: ${props => props.backgroundColor};
  -webkit-transition: .4s;
  transition: .4s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
`
