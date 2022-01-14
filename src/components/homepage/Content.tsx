import { useTranslation } from "react-i18next";
import { LongButton, ShortButton, StyledButtonContainer } from "../styles/Buttons";
import { IntroContainer, IntroTitle, IntroSlogan, PhraseContainer, MarketingPhrase, ContentWrapper } from "../styles/homepage/ContentParts";
import { BoxTitle, BoxValue, ValueBox } from "../styles/StyledValueBox";
import CountUp from 'react-countup';


function Content() {
  const {t, i18n} = useTranslation();

  let valueLocked = 1234567890;
  let marketCap = 634634773;
  const counts = 100;

  const getStaticNumberPart = (endNumber: number) => {
    let endNumberStr = endNumber.toLocaleString();
    return endNumberStr.substring(0, endNumberStr.length - 3);
  }

  const getStartNumber = (endNumber: number) => {
    let startNumberStr = (endNumber - counts).toLocaleString();
    return parseInt(startNumberStr.substring(startNumberStr.length - 3, startNumberStr.length));
  }

  const getFinalNumber = (endNumber: number) => {
    let endNumberStr = endNumber.toLocaleString();
    return parseInt(endNumberStr.substring(endNumberStr.length - 3, endNumberStr.length));
  }

  return (
    <ContentWrapper>
      <IntroContainer>
        <IntroTitle>Minerverse</IntroTitle>
        <IntroSlogan>Hold. Stake. Earn. NFT. GameFi.</IntroSlogan>
      </IntroContainer>
      <ValueBox>
        <BoxTitle>{t("home.totalValueLocked")}</BoxTitle>
        <BoxValue>
          <CountUp start={getStartNumber(valueLocked)} end={getFinalNumber(valueLocked)} duration={1} delay={0} >
            {({ countUpRef }) => (
              <div>
                {getStaticNumberPart(valueLocked)}<span ref={countUpRef} ></span>
              </div>
            )}
          </CountUp>
        </BoxValue>
      </ValueBox>
      <ValueBox>
        <BoxTitle>{t("home.marketCapital")}</BoxTitle>
        <BoxValue>
          <CountUp start={getStartNumber(marketCap)} end={getFinalNumber(marketCap)} duration={1} delay={0} >
            {({ countUpRef }) => (
              <div>
                {getStaticNumberPart(marketCap)}<span ref={countUpRef} ></span>
              </div>
            )}
          </CountUp>
        </BoxValue>
      </ValueBox>
      <StyledButtonContainer>
        <LongButton>{t("home.connectWallet")}</LongButton>
        <LongButton>{t("home.preSale")}</LongButton>
      </StyledButtonContainer>
      <PhraseContainer>
        <MarketingPhrase>{t("home.yieldFarmingSlogan.1")}</MarketingPhrase>  
        <MarketingPhrase>{t("home.yieldFarmingSlogan.2")}</MarketingPhrase>
      </PhraseContainer>
      <StyledButtonContainer>
        <ShortButton>{t("home.earnNow")}</ShortButton>
      </StyledButtonContainer>
    </ContentWrapper>
  );
}

export default Content;