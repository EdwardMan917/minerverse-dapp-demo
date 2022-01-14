import { useTranslation } from "react-i18next";
import { Card, CardContainer, CardContent, CardIcon, CardTitle, GameFi, Home, ToolBox } from "../styles/Card";
import { CertikLogo, CoinGeckoLogo, CoinMarketCapLogo, LogoContainer } from "../styles/BusinessLogos";
import { StyledMainFooterContainer } from "../styles/StyledMainContainer";

function Footer() {
  const {t, i18n} = useTranslation();

  return (
    <StyledMainFooterContainer>
      <CardContainer>
        <Card>
          <CardTitle>{t("home.card.mysteryBox.title")}</CardTitle>
          <CardIcon>
            <ToolBox />
          </CardIcon>
          <CardContent>
            {t("home.card.mysteryBox.info.1")}
            <br/>
            {t("home.card.mysteryBox.info.2")}
          </CardContent>
        </Card>

        <Card>
          <CardTitle>{t("home.card.nftMarketplace.title")}</CardTitle>
          <CardIcon>
            <Home />
          </CardIcon>
          <CardContent>
            {t("home.card.nftMarketplace.info.1")}
            <br/>
            {t("home.card.nftMarketplace.info.2")}
          </CardContent>
        </Card>

        <Card>
          <CardTitle>{t("home.card.gameFi.title")}</CardTitle>
          <CardIcon>
            <GameFi />
          </CardIcon>
          <CardContent>
            {t("home.card.gameFi.info.1")}
            <br/>
            {t("home.card.gameFi.info.2")}
          </CardContent>
        </Card>
      </CardContainer>
      <LogoContainer>
        <CertikLogo />
        <CoinGeckoLogo />
        <CoinMarketCapLogo />
      </LogoContainer>
    </StyledMainFooterContainer>
  );
}

export default Footer;