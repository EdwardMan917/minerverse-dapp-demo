import styled from "styled-components";

import TwitterSvg from "../../assets/images/common/twitter.svg";
import TelegramSvg from "../../assets/images/common/telegram.svg";
import MediumSvg from "../../assets/images/common/medium.svg";
import DiscordSvg from "../../assets/images/common/discord.svg";

const Icon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 25px;
  width: 25px;
  margin-right: 13px;
`;

export const TwitterIcon = styled(Icon)`
  background-image: url(${TwitterSvg});
`;

export const TelegramIcon = styled(Icon)`
  background-image: url(${TelegramSvg});
`;

export const MediumIcon = styled(Icon)`
  background-image: url(${MediumSvg});
`;

export const DiscordIcon = styled(Icon)`
  background-image: url(${DiscordSvg});
`;

