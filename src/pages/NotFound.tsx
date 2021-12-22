import styled from "styled-components";
import { StyledMainContainer } from "src/components/styles/StyledMainContainer";
import { Colors } from "src/constants/Colors";

const TextContainer = styled.p`
  color: ${Colors.White};
  font-size: 40px;
  font-family: 'GothamBold';
`


function NotFound() {
  return (
    <StyledMainContainer>
      <div>
        <TextContainer>
          Oops! Page not found...
        </TextContainer>
      </div>
    </StyledMainContainer>
  )
}

export default NotFound;