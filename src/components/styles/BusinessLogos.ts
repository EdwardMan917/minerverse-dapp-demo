import styled from "styled-components";

import CertikSvg from "../../assets/svg/page-home/logo-Certik.svg";
import CoinGeckoSvg from "../../assets/svg/page-home/logo-CoinGecko.svg";
import CoinMarketCapSvg from "../../assets/svg/page-home/logo-CoinMarketCap.svg";

import MinerverseSvg from "../../assets/svg/logo.svg";

export const LogoContainer = styled.div`
  max-width: 800px;
  width: 70%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 910px) {
    width: 80%;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    width: 250px;
    height: 200px;
    align-items: center;
    margin-top: 0px;
  }
`;

const Svg = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 100%;
  width: 250px;
  margin: 10px;
  
  @media (max-width: 550px) {
    width: 100%;
    height: 50px;
  }
`;

export const CertikLogo = styled(Svg)`
  background-image: url(${CertikSvg});
`;

export const CoinGeckoLogo = styled(Svg)`
  background-image: url(${CoinGeckoSvg});
`;

export const CoinMarketCapLogo = styled(Svg)`
  background-image: url(${CoinMarketCapSvg});
`;

export const MinerverseLogo = styled(Svg)`
  background-image: url(${MinerverseSvg});
  background-position-x: left;
  height: 35px;
  flex-grow: 1;
`;
