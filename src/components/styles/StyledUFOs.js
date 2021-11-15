import styled from "styled-components";

import TopUFOImage from "../../assets/images/common/ufo-1.png";
import MidUFOImage from "../../assets/images/common/ufo-2.png";
import BottomUFOImage from "../../assets/images/common/ufo-3.png";

const UFO = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const TopUFO = styled(UFO)`
  height: 196px;
  width: 168px;
  top: 250px;
  right: 200px;
  background-image: url(${TopUFOImage});
`

export const MidUFO = styled(UFO)`
  height: 65px;
  width: 118px;
  top: 900px;
  left: 200px;
  background-image: url(${MidUFOImage});
`

export const BottomUFO = styled(UFO)`
  height: 79px;
  width: 127px;
  top: 1400px;
  right: 600px;
  background-image: url(${BottomUFOImage});
`