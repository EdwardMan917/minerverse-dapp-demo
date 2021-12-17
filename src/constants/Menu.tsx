import * as MenuIcons from "../components/styles/MenuIcons";
import { ReactComponent as Farms} from '../assets/svg/pagr-menu/farms.svg';

const ContextPath: string = process.env.REACT_APP_CONTEXT_PATH;

export const Paths = {
  homepage: ContextPath,
  farmsAndPool: ContextPath + "farmsnpool",
  convert: ContextPath + "convert",
  sofiDashboard: ContextPath + "sofi-dashboard",
  sofiMarket: ContextPath + "sofi-market",
  sofiPortfolio: ContextPath + "sofi-portfo",
  sofiFollowing: ContextPath + "sofi-following", 
  nft: ContextPath + "nft",
  win: ContextPath + "win",
  info: ContextPath + "info",
  voting: ContextPath + "voting",
  docs: ContextPath + "docs"
}


export const DrawerSpecs = {
  openedWidth: '200px',
  closedWidth: '40px',
  headerHeight: "64px",
  mobileHeaderHeight: "57px"
}

export const MenuItems = [
  { title: 'Farms & Pool', icon: <Farms width={'20px'} height={'20px'} />, path: Paths.farmsAndPool, children: null},
  { title: 'Convert', icon: <MenuIcons.ConvertIcon />, path: Paths.convert, children: null },
  {
    title: 'SoFi', icon: <MenuIcons.SoFiIcon />, path: null, children: [
      { index: 1, title: 'Dashboard', path: Paths.sofiDashboard },
      { index: 2, title: 'Market', path: Paths.sofiMarket },
      { index: 3, title: 'My Portfolio', path: Paths.sofiPortfolio },
      { index: 4, title: 'Following', path: Paths.sofiFollowing }
    ]
  },
  { title: 'NFT', icon: <MenuIcons.NFTIcon />, path: Paths.nft, children: null },
  { title: 'Win', icon: <MenuIcons.WinIcon />, path: Paths.win, children: null },
  {
    title: 'More', icon: <MenuIcons.MoreIcon />, path: null, children: [
      { index: 5, title: 'Info', path: Paths.info },
      { index: 6, title: 'Voting', path: Paths.voting }, 
      { index: 7, title: 'Docs', path: Paths.docs }
    ]
  }
]
