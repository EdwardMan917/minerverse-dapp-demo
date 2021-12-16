import styled from "styled-components";

import Stars from "../../assets/images/common/stars.png";
import { Colors } from "../../constants/Colors";


export const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledMainValueContainer = styled.div`
  width: 100%;
  height: 1500px;
  background-image: url(${Stars});
  background-repeat: repeat;
  background-size: contain;
  display: flex;
  justify-content: center;

  @media (max-width: 550px){
    background-size: 300%;  
  }
`;

export const StyledMainFooterContainer = styled.div`
  background: ${Colors.Black};
  z-index: 1;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 910px) {
    height: 1500px;
  }

  @media (max-width: 550px) {
    height: 1850px;
  }

`;