import styled from "styled-components";
import { Colors } from "../../constants/Colors";

const BaseRadiation =  styled.div`
  border-width: 2px;
  border-color: ${Colors.RadiationGrey};
  border-style: solid;
  border-radius: 50%;
  right: 0;
  top: 70%;
  position: absolute;

  @media (max-width: 550px){
    border-width: 0.6px;
  }
`;

export const RadiationOne = styled(BaseRadiation)`
  width: 50vw;
  height: 50vw;
  transform: translate(50%);
`;

export const RadiationTwo = styled(BaseRadiation)`
  width: 100vw;
  height: 100vw;
  transform: translate(50%, -25vw);
`;

export const RadiationThree = styled(BaseRadiation)`
  width: 130vw;
  height: 130vw;
  transform: translate(50%, -40vw);
`;

export const RadiationFour = styled(BaseRadiation)`
  width: 170vw;
  height: 170vw;
  transform: translate(50%, -60vw);
`;

export const RadiationFive = styled(BaseRadiation)`
  width: 180vw;
  height: 180vw;
  transform: translate(50%, -65vw);
`;

export const RadiationSix = styled(BaseRadiation)`
  width: 200vw;
  height: 200vw;
  transform: translate(50%, -75vw);
`;