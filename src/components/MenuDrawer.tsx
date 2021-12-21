import { useEffect, useState, CSSProperties } from 'react';
import { styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MultiLevelListItem, SingleListItem } from './MenuListItems';
import MenuFooter from './MenuFooter';

import { Colors } from "../constants/Colors";
import { MenuItems, DrawerSpecs } from '../constants/Menu';
import { useLocation } from 'react-router';


const openedMixin = (theme?: Theme) => ({
  width: `${DrawerSpecs.openedWidth}`,
  transition: theme? theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }) : "none",
  overflowX: 'hidden'
} as CSSProperties);

const closedMixin = (theme?: Theme) => ({
    transition: theme? theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  }) : "none",
  overflowX: 'hidden',
  width: `${DrawerSpecs.closedWidth}`
} as CSSProperties);

const DrawerStyle = () => ({
  background: `${Colors.Black}`,
  borderRight: `0.6px ${Colors.NavBorderGrey} solid`,
  top: `${DrawerSpecs.headerHeight}`,
  position: 'fixed',
  height: `calc(100vh - ${DrawerSpecs.headerHeight})`,
  "@media (max-width:600px)": {
    top: `${DrawerSpecs.mobileHeaderHeight}`,
    height: `calc(100vh - ${DrawerSpecs.mobileHeaderHeight})`
  }
});


const Drawer = styled(MuiDrawer)(( props: {theme?: Theme; open: boolean;} ) => ({
    width: `${DrawerSpecs.openedWidth}`,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(props.open && {
      ...openedMixin(props.theme),
      '& .MuiDrawer-paper': {
        ...DrawerStyle(),
        ...openedMixin(props.theme)
      }
    }),
    ...(!props.open && {
      ...closedMixin(props.theme),
      '& .MuiDrawer-paper': {
        ...DrawerStyle(),
        ...closedMixin(props.theme)
      }
    }),
  }),
);

function MenuDrawer(props: { open: boolean; setDrawerOpen: Function; }) {

  const location = useLocation();

  const [open, setOpen] = useState(props.open);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClose = () => {
    props.setDrawerOpen(!open);
  }

  useEffect(() => {
    setOpen(props.open);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })
  }, [props.open]);

  const MenuListStyle = {
    background: `${Colors.Black}`
  }

  // onClose required for drawer close when clicking overlay
  return (
    <Drawer ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    }} variant={ width < 670 ? "temporary" : "permanent" } open={open} onClose={handleClose} >
      <Divider />
      <List style={{ ...MenuListStyle }} >
        {MenuItems.map((item)  => (
          item.children ? MultiLevelListItem(item, open, props.setDrawerOpen, location) : SingleListItem(item, props.setDrawerOpen, location)
        ))}
      </List>
      <Divider />
      <MenuFooter visible={open} />
    </Drawer>
  );
}

export default MenuDrawer;