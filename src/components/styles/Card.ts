import styled from "styled-components";
import GameFiSvg from "../../assets/svg/page-home/gameFi.svg";
import ToolBoxSvg from "../../assets/svg/page-home/toolBox.svg";
import HomeSvg from "../../assets/svg/page-home/home.svg";
import { Colors } from "../../constants/Colors";

const Svg = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  margin-top: auto;
`;

export const GameFi = styled(Svg)`
  background-image: url(${GameFiSvg});
  height: 75%;
`;

export const ToolBox = styled(Svg)`
  background-image: url(${ToolBoxSvg});
  height: 115%;
`;

export const Home = styled(Svg)`
  background-image: url(${HomeSvg});
  height: 70%;
`;

export const CardContainer = styled.div`
  max-width: 1100px;
  width: 70%;
  min-width: 900px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 910px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1300px;
    min-width: 0px;
  }

  @media (max-width: 550px) {
    height: 1700px;
  }

`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: ${Colors.NavBorderGrey};
  border-radius: 20px;
  height: 100%;
  width: 30%;

  @media (max-width: 1150px) {
    width: 28%;
  }

  @media (max-width: 910px) {
    width: 80%;
    margin-top: 20px;
    height: 400px;
  }

  @media (max-width: 550px) {
    height: 450px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "GothamBold";
  font-size: 30px;
  line-height: 38px;
  color: ${Colors.White};
  height: 150px;
  width: 100%;

  @media (max-width: 550px) {
   font-size: 25px;
   height: 100px;
  }
`;

export const CardIcon = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    height: 130px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "GothamLight";
  font-size: 18px;
  line-height: 40px;
  color: ${Colors.White};
  height: 300px;
  width: 100%;
`;