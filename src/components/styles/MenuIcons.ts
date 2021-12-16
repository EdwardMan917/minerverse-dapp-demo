import styled from 'styled-components';

import FarmsSvg from '../../assets/svg/pagr-menu/farms.svg';
import ConvertSvg from '../../assets/svg/pagr-menu/convert.svg';
import SoFiSvg from '../../assets/svg/pagr-menu/Sofi.svg';
import NFTSvg from '../../assets/svg/pagr-menu/NFT.svg';
import WinSvg from '../../assets/svg/pagr-menu/win.svg';
import MoreSvg from '../../assets/svg/pagr-menu/more.svg';

import I18NSvg from '../../assets/images/common/i18n.svg';


const MenuIcon = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
`;

export const FarmsIcon = styled(MenuIcon)`
  background-image: url(${FarmsSvg});
`;

export const ConvertIcon = styled(MenuIcon)`
  background-image: url(${ConvertSvg});
`;

export const SoFiIcon = styled(MenuIcon)`
  background-image: url(${SoFiSvg});
`;

export const NFTIcon = styled(MenuIcon)`
  background-image: url(${NFTSvg});
`;

export const WinIcon = styled(MenuIcon)`
  background-image: url(${WinSvg});
`;

export const MoreIcon = styled(MenuIcon)`
  background-image: url(${MoreSvg});
`;

export const I18NIcon = styled.div`
  background-image: url(${I18NSvg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 25px;
  height: 25px;
`;