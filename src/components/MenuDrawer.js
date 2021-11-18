import React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MultiLevelListItem, SingleListItem } from './MenuListItems';
import MenuFooter from './MenuFooter';

import { Colors } from "../constants/Colors.ts";
import { MenuItems, DrawerSpecs } from '../constants/Menu';


const openedMixin = (theme) => ({
  width: `${DrawerSpecs.OpenedWidth}`,
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
  width: `${DrawerSpecs.ClosedWidth}`,
});

const DrawerStyle = () => ({
  background: `${Colors.Black}`,
  borderRight: `0.6px ${Colors.NavBorderGrey} solid`,
  top: `${DrawerSpecs.headerHeight}`,
  position: 'fixed',
  height: `calc(100vh - ${DrawerSpecs.headerHeight})`
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: `${DrawerSpecs.OpenedWidth}`,
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
    background: `${Colors.Black}`,
    paddingLeft: '10px'
  }

  return (
    <Drawer variant="permanent" open={open}>
      <Divider />
      <List style={{ ...MenuListStyle }} >
        {MenuItems.map((item)  => (
          item.hasChild ? MultiLevelListItem(item, open, props.setDrawerOpen) : SingleListItem(item, props.setDrawerOpen)
        ))}
      </List>
      <Divider />
      <MenuFooter visible={open} />
    </Drawer>
  );
}

export default MenuDrawer;