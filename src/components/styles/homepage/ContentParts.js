import styled from "styled-components";
import { Colors } from "../../../constants/Colors.ts";


export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 550px;
  justify-content: center;
`;

export const IntroTitle = styled.div`
  text-align: center;
  justify-content: center;
  width: 100%;
  font-family: "GothamBold";
  font-size: 65px;
  color: ${Colors.White};
  margin-bottom: 10px;
`;

export const IntroSlogan = styled.div`
  text-align: center;
  justify-content: center;
  width: 100%;
  font-family: "GothamLight";
  font-size: 25px;
  color: ${Colors.White};
`;

export const IntroContainer = styled.div`
  margin-top: 150px;
  margin-bottom: 40px;
  top: 0;
  justify-content: center;
  width: 100%;
`;

export const PhraseContainer = styled.div`
  text-align: center;
  width: 200%;
  font-family: "GothamBold";
  font-size: 55px;
  color: ${Colors.White};
  margin-left: -50%;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    width: 150%;
    margin-left: -25%;
    font-size: 40px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    font-size: 30px;
  }
`;

export const MarketingPhrase = styled.div`
  width: 100%;
  margin-top: 15px;
`;