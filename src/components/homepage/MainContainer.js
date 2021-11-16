import React from "react";
import { StyledMainContainer } from "../styles/StyledMainContainer";
import ContentContainer from "./ContentContainer";
import Footer from "./Footer";

function MainContainer() {
  return (
    <StyledMainContainer>
      <ContentContainer />
      <Footer />
    </StyledMainContainer>
  );
}

export default MainContainer;