import styled from "styled-components";
import { Colors } from "src/constants/Colors";

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
  }

`

export const ToolbarContainer = styled.div`
  background: ${Colors.Black};
  width: 100%;
  height: 100px;
`