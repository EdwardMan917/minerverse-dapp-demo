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
  { title: 'menu.farms', icon: getFarmsIcon, path: Paths.farmsAndPool, children: null},
  { title: 'menu.convert', icon: getConvertIcon, path: Paths.convert, children: null },
  {
    title: 'menu.sofi.title', icon: getSoFiIcon, path: null, children: [
      { index: 1, title: 'menu.sofi.child.dashboard', path: Paths.sofiDashboard },
      { index: 2, title: 'menu.sofi.child.market', path: Paths.sofiMarket },
      { index: 3, title: 'menu.sofi.child.myPortfolio', path: Paths.sofiPortfolio },
      { index: 4, title: 'menu.sofi.child.following', path: Paths.sofiFollowing }
    ]
  },
  { title: 'menu.nft', icon: getNFTIcon, path: Paths.nft, children: null },
  { title: 'menu.win', icon: getWinIcon, path: Paths.win, children: null },
  {
    title: 'menu.more.title', icon: getMoreIcon, path: null, children: [
      { index: 5, title: 'menu.more.child.info', path: Paths.info },
      { index: 6, title: 'menu.more.child.voting', path: Paths.voting }, 
      { index: 7, title: 'menu.more.child.docs', path: Paths.docs }
    ]
  }
]
