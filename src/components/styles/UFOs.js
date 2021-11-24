import styled, { keyframes } from "styled-components";

import TopUFOImage from "../../assets/images/common/ufo-1.png";
import MidUFOImage from "../../assets/images/common/ufo-2.png";
import BottomUFOImage from "../../assets/images/common/ufo-3.png";

const Slide = keyframes`
  0% { transform: translateX(-5px) translateY(-5px)}
  100% { transform: translateX(5px) translateY(5px)}
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

export const TopUFO = styled(UFO)`
  height: 196px;
  width: 168px;
  top: 15%;
  right: 10%;
  background-image: url(${TopUFOImage});
  animation-delay: 0s;

  @media (max-width: 550px) {
    flex-direction: column;
    width: 250px;
    height: 200px;
    align-items: center;
    margin-top: 0px;
  }
`

export const MidUFO = styled(UFO)`
  height: 65px;
  width: 118px;
  top: 50%;
  left: 10%;
  background-image: url(${MidUFOImage});
  animation-delay: 0.5s;
`;

export const BottomUFO = styled(UFO)`
  height: 79px;
  width: 127px;
  top: 90%;
  right: 30%;
  z-index: 2;
  background-image: url(${BottomUFOImage});
  animation-delay: 1s;
`;