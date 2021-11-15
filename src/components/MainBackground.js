import React from "react";
import { StyledMainBackground, Mountain } from "./styles/StyledMainBackground";
import { TopUFO, MidUFO, BottomUFO } from "./styles/StyledUFOs";

function MainBackground() {
  return (
    <StyledMainBackground>
      <TopUFO />
      <MidUFO />
      <BottomUFO />
      <Mountain />
    </StyledMainBackground>
  );
}

export default MainBackground;