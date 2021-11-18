import React from "react";
import styled from "styled-components";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";

import ComingSoonDashboard from "../assets/images/pc/comingsoon-dashboard.png";

const Dashboard = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${ComingSoonDashboard});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;


function SoFiDashboard() {
  return (
    <StyledMainContainer>
      <Dashboard />
    </StyledMainContainer>
  )
}

export default SoFiDashboard;