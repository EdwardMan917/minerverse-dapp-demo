import React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import * as MenuIcons from './styles/StyledMenuIcons';
import { MultiLevelListItem, SingleListItem } from './MenuListItems';


const drawerOpenedWidth = '200px';
const drawerClosedWidth = '40px';
const headerHeight = "64px";

const Icons = [
  { title: 'Farms & Pool', icon: <MenuIcons.FarmsIcon />, hasChild: false },
  { title: 'Convert', icon: <MenuIcons.ConvertIcon />, hasChild: false },
  { title: 'SoFi', icon: <MenuIcons.SoFiIcon />, hasChild: true, children: ['Dashboard', 'Market', 'My Portfolio', 'Following'] },
  { title: 'NFT', icon: <MenuIcons.NFTIcon />, hasChild: false },
  { title: 'Win', icon: <MenuIcons.WinIcon />, hasChild: false },
  { title: 'More', icon: <MenuIcons.MoreIcon />, hasChild: true, children: ['Info', 'Voting', 'Docs'] }
]

const openedMixin = (theme) => ({
  width: drawerOpenedWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: drawerClosedWidth
});

const DrawerStyle = () => ({
  background: '#000',
  borderRight: '0.6px #313131 solid',
  top: headerHeight,
  position: 'fixed'
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerOpenedWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...DrawerStyle(),
        ...openedMixin(theme)
      }
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...DrawerStyle(),
        ...closedMixin(theme)
      }
    }),
  }),
);

function MenuDrawer(props) {

  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const MenuListStyle = {
    background: '#000',
    paddingLeft: '10px'
  }

  return (
    <Drawer variant="permanent" open={open}>
      <Divider />
      <List style={{ ...MenuListStyle }} >
        {Icons.map((item)  => (
          item.hasChild ? MultiLevelListItem(item, open, props.setDrawerOpen) : SingleListItem(item, props.setDrawerOpen)
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default MenuDrawer;