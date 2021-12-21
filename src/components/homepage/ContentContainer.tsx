import { StyledMainValueContainer } from "../styles/StyledMainContainer";
import Background from "./Background";
import Content from "./Content";


function ContentContainer() {
  return (
    <StyledMainValueContainer>
      <Background />
      <Content />
    </StyledMainValueContainer>
  );
}

export default ContentContainer;