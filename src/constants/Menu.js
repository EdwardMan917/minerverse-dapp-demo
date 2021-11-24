import * as MenuIcons from "../components/styles/MenuIcons";
import { ReactComponent as Farms} from '../assets/svg/pagr-menu/farms.svg';


export const DrawerSpecs = {
  OpenedWidth: '200px',
  ClosedWidth: '40px',
  headerHeight: "64px",
  mobileHeaderHeight: "57px"
}

export const MenuItems = [
  // { title: 'Farms & Pool', icon: <MenuIcons.FarmsIcon />, hasChild: false, path: '/farmsnpool' },
  { title: 'Farms & Pool', icon: <Farms width={'20px'} height={'20px'} />, hasChild: false, path: '/farmsnpool' },
  { title: 'Convert', icon: <MenuIcons.ConvertIcon />, hasChild: false, path: '/convert' },
  {
    title: 'SoFi', icon: <MenuIcons.SoFiIcon />, hasChild: true, children: [
      {index: 1, title: 'Dashboard', path: '/sofi-dashboard'},
      {index: 2, title: 'Market', path:  '/sofi-market'},
      {index: 3, title: 'My Portfolio', path:  '/sofi-portfo'},
      {index: 4, title: 'Following', path:  '/sofi-following'}
    ]
  },
  { title: 'NFT', icon: <MenuIcons.NFTIcon />, hasChild: false, path: '/nft' },
  { title: 'Win', icon: <MenuIcons.WinIcon />, hasChild: false, path: '/win' },
  {
    title: 'More', icon: <MenuIcons.MoreIcon />, hasChild: true, children: [
      {index: 5, title: 'Info', path:  '/info'},
      {index: 6, title: 'Voting', path:  '/voting'}, 
      {index: 7, title: 'Docs', path: '/docs'}
    ]
  }
]
