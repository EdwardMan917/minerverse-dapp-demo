import React from "react";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";
import ContentContainer from "../components/homepage/ContentContainer";
import Footer from "../components/homepage/Footer";

function Homepage() {
  return (
    <StyledMainContainer>
      <ContentContainer />
      <Footer />
    </StyledMainContainer>
  );
}

export default Homepage;