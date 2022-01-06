import styled from "styled-components";
import FarmBannerImage from "src/assets/images/pc/farms-banner.png";
import { Colors } from "src/constants/Colors";


export const FarmMountain = styled.div`
  width: 100%;
  transform: translateY(64px);
  min-height: 230px;
  height: 23vh;
  background-image: url(${FarmBannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

export const BannerTextContainer = styled.div`
  position: absolute;
  height: 23vh;
  display: flex;
  flex-direction: column;
  padding: 40px 150px;

  @media (max-width: 946px) {
    padding: 40px 0 40px 40px;
  }
`

export const BannerTitle = styled.div`
  font-family: "GothamBold";
  font-size: 48px;
  color: ${Colors.White};
  margin-bottom: 15px;
`;

export const BannerSlogan = styled.div`
  font-family: "GothamBold";
  font-size: 14px;
  color: ${Colors.White};
`;