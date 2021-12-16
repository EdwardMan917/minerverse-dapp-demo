import { StyledBackground, Mountain } from "../styles/homepage/StyledBackground";
import * as Radiations from "../styles/Radiations";
import { TopUFO, MidUFO, BottomUFO } from "../styles/UFOs";

function Background() {
  return (
    <StyledBackground>
      <Radiations.RadiationOne />
      <Radiations.RadiationTwo />
      <Radiations.RadiationThree />
      <Radiations.RadiationFour />
      <Radiations.RadiationFive />
      <Radiations.RadiationSix />
      <TopUFO />
      <MidUFO />
      <BottomUFO />
      <Mountain />
    </StyledBackground>
  );
}

export default Background;