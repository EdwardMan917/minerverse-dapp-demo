import styled from "styled-components";
import GameFiSvg from "../../assets/svg/page-home/gameFi.svg";
import ToolBoxSvg from "../../assets/svg/page-home/toolBox.svg";
import HomeSvg from "../../assets/svg/page-home/home.svg";

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
  width: 1100px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 20px;
  height: 100%;
  width: 30%;
`;

export const CardTitle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "GothamBold";
  font-size: 30px;
  line-height: 38px;
  color: white;
  height: 150px;
  width: 100%;
`;

export const CardIcon = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "GothamLight";
  font-size: 18px;
  line-height: 40px;
  color: white;
  height: 300px;
  width: 100%;
`;