import React from "react";
import ContentContainer from "./ContentContainer";
import MainBackground from "./MainBackground";
import { StyledMainContainer, StyledMainValueContainer, StyledMainFooterContainer } from "./styles/StyledMainContainer"

function MainContainer() {
  return (
    <StyledMainContainer>
      <StyledMainValueContainer>
        <MainBackground />
        <ContentContainer />
      </StyledMainValueContainer>
      <StyledMainFooterContainer>
      </StyledMainFooterContainer>
    </StyledMainContainer>
  );
}

export default MainContainer;