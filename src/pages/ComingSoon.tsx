import styled from 'styled-components';
import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import ComingSoonImage from "../assets/images/pc/comingsoon.png";

const ComingSoonBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${ComingSoonImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

function ComingSoon() {
  return (
    <StyledMainContainer>
      <ComingSoonBackground />
    </StyledMainContainer>
  );
}

export default ComingSoon;