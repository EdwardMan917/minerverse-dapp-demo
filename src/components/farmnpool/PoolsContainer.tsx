import styled from "styled-components";
import { Colors } from "src/constants/Colors";

export const PoolsContainer = styled.div`
  background: ${Colors.Black};
  width: 100%;
  transform: translateY(64px);
  min-height: calc(100vh - 23vh - 64px);
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`