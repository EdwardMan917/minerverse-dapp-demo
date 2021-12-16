import styled from "styled-components";
import MountainImage from "../../../assets/images/common/mountain.png";

export const StyledBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Mountain = styled.div`
  position: absolute;
  height: 661px;
  width: 100%;
  bottom: 0;
  background-image: url(${MountainImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  
  @media (max-width: 550px){
    width: 150%;
    transform: translateX(-20%);
  }
`;