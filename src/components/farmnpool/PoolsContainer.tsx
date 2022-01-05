import styled from "styled-components";
import { Colors } from "src/constants/Colors";
import { ToolbarSubContainerProps } from "src/interfaces/AppInterfaces";

export const PoolsContainer = styled.div`
  background: ${Colors.Black};
  width: 100%;
  transform: translateY(64px);
  min-height: calc(100vh - 23vh - 64px - 80px);
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(100px + 64px);
  box-sizing: border-box;

  @media (max-width: 946px) {
    padding: 0 20px;
    margin-bottom: 200px;
  }

`

export const ToolbarContainer = styled.div`
  background: ${Colors.Black};
  width: 886px;
  height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 946px) {
    width: 100%;
  }
`

export const ToolbarSubContainer = styled.div<ToolbarSubContainerProps>`
  background: transparent;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
`

export const StakedToggleContainer = styled.div`
  background-color: transparent;
  color: ${Colors.White};
  font-family: "GothamLight";
  font-size: 14px;
  height: 25px;
  display: flex;
  align-items: center;
  width: auto;
  margin-left: 30px;
`