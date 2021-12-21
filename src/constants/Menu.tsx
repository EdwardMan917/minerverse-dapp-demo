import * as MenuIcons from "../components/styles/MenuIcons";

export const ContextPath: string = process.env.REACT_APP_CONTEXT_PATH;

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
  info: ContextPath + "more-info",
  voting: ContextPath + "more-voting",
  docs: ContextPath + "more-docs"
}


export const DrawerSpecs = {
  openedWidth: '200px',
  closedWidth: '40px',
  headerHeight: "64px",
  mobileHeaderHeight: "57px"
}


const getFarmsIcon = (selected: boolean) => {
  return <MenuIcons.FarmsIcon selected={selected} />;
}
const getConvertIcon = (selected: boolean) => {
  return <MenuIcons.ConvertIcon selected={selected} />;
}
const getSoFiIcon = (selected: boolean) => {
  return <MenuIcons.SoFiIcon selected={selected} />;
}
const getNFTIcon = (selected: boolean) => {
  return <MenuIcons.NFTIcon selected={selected} />;
}
const getWinIcon = (selected: boolean) => {
  return <MenuIcons.WinIcon selected={selected} />;
}
const getMoreIcon = (selected: boolean) => {
  return <MenuIcons.MoreIcon selected={selected} />;
}

export const MenuItems = [
  { title: 'Farms & Pool', icon: getFarmsIcon, path: Paths.farmsAndPool, children: null},
  { title: 'Convert', icon: getConvertIcon, path: Paths.convert, children: null },
  {
    title: 'SoFi', icon: getSoFiIcon, path: null, children: [
      { index: 1, title: 'Dashboard', path: Paths.sofiDashboard },
      { index: 2, title: 'Market', path: Paths.sofiMarket },
      { index: 3, title: 'My Portfolio', path: Paths.sofiPortfolio },
      { index: 4, title: 'Following', path: Paths.sofiFollowing }
    ]
  },
  { title: 'NFT', icon: getNFTIcon, path: Paths.nft, children: null },
  { title: 'Win', icon: getWinIcon, path: Paths.win, children: null },
  {
    title: 'More', icon: getMoreIcon, path: null, children: [
      { index: 5, title: 'Info', path: Paths.info },
      { index: 6, title: 'Voting', path: Paths.voting }, 
      { index: 7, title: 'Docs', path: Paths.docs }
    ]
  }
]
