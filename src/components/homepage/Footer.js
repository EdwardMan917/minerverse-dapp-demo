import React from "react";
import { Card, CardContainer, CardContent, CardIcon, CardTitle, GameFi, Home, ToolBox } from "../styles/StyledCard";
import { CertikLogo, CoinGeckoLogo, CoinMarketCapLogo, LogoContainer } from "../styles/StyledLogos";
import { StyledMainFooterContainer } from "../styles/StyledMainContainer";

function Footer() {
  return (
    <StyledMainFooterContainer>
      <CardContainer>
        <Card>
          <CardTitle>Mystery Box & NFT Mining</CardTitle>
          <CardIcon>
            <ToolBox />
          </CardIcon>
          <CardContent>
            Get Collectibles from mystery box!
            <br/>
            Mine rewards,play games and level up to win more!
          </CardContent>
        </Card>

        <Card>
          <CardTitle>NFT Marketplace</CardTitle>
          <CardIcon>
            <Home />
          </CardIcon>
          <CardContent>
            Buy & Sell your miner avatars
            <br/>
            Lend your avatars & tools to earn extra interest!
          </CardContent>
        </Card>

        <Card>
          <CardTitle>GameFi</CardTitle>
          <CardIcon>
            <GameFi />
          </CardIcon>
          <CardContent>
            An entire game-driven tokenomy
            <br/>
            Offer sustainable benefits to metaminers community.
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