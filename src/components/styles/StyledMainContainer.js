import styled from "styled-components";

import Stars from "../../assets/images/common/stars.png";


export const StyledMainContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledMainValueContainer = styled.div`
  width: 100%;
  height: 1600px;
  background-image: url(${Stars});
  background-repeat: repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
`;

export const StyledMainFooterContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;