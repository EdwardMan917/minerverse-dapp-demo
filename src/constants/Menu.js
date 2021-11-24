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
    title: 'SoFi', icon: <MenuIcons.SoFiIcon />, hasChild: true, children: {
      'Dashboard': '/sofi-dashboard',
      'Market': '/sofi-market',
      'My Portfolio': '/sofi-portfo',
      'Following': '/sofi-following'
    }
  },
  { title: 'NFT', icon: <MenuIcons.NFTIcon />, hasChild: false, path: '/nft' },
  { title: 'Win', icon: <MenuIcons.WinIcon />, hasChild: false, path: '/win' },
  {
    title: 'More', icon: <MenuIcons.MoreIcon />, hasChild: true, children: {
      'Info': '/info', 
      'Voting': '/voting', 
      'Docs': '/docs'
    }
  }
]
