import React from "react";
import { LongButton, ShortButton, StyledButtonContainer } from "../styles/StyledButton";
import { IntroContainer, IntroTitle, IntroSlogan, PhraseContainer, MarketingPhrase, ContentWrapper } from "../styles/StyledContents";
import { BoxTitle, BoxValue, ValueBox } from "../styles/StyledValueBox";

function Content() {
  return (
    <ContentWrapper>
      <IntroContainer>
        <IntroTitle>Minerverse</IntroTitle>
        <IntroSlogan>Hold. Stake. Earn. NFT. GameFi.</IntroSlogan>
      </IntroContainer>
      <ValueBox>
        <BoxTitle>Total Value Locked</BoxTitle>
        <BoxValue>1,234,567,890</BoxValue>
      </ValueBox>
      <ValueBox>
        <BoxTitle>MNC Market Cap</BoxTitle>
        <BoxValue>634,634,773</BoxValue>
      </ValueBox>
      <StyledButtonContainer>
        <LongButton>Connect Wallet</LongButton>
        <LongButton>Token Pre-sales</LongButton>
      </StyledButtonContainer>
      <PhraseContainer>
        <MarketingPhrase>Yield Farming with Metaminers</MarketingPhrase>  
        <MarketingPhrase>Maximize your APY</MarketingPhrase>
      </PhraseContainer>
      <StyledButtonContainer>
        <ShortButton>Earn Now</ShortButton>
      </StyledButtonContainer>
    </ContentWrapper>
  );
}

export default Content;