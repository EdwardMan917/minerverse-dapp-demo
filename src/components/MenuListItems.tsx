import React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material/styles';
import { Colors } from "../constants/Colors";
import { Link } from "react-router-dom";
import { ListItemTextProps } from "src/interfaces/AppInterfaces";
import { ListItemButton } from "@mui/material";


const StyledListItem = styled(ListItemButton)({
  padding: '0px',
  margin: '5px 0 5px 0'
})

const StyledListIcon = styled(ListItemIcon)({
  minWidth: '30px',
  color: `${Colors.MinerverseYellow}`
})

const StyledListItemText = styled(ListItemText)<ListItemTextProps>(( props: {selected: boolean}) => ({
  ...({
    '& .MuiTypography-root': {
      fontFamily: 'GothamMedium',
      fontSize: '14px',
      color: props.selected ? `${Colors.MinerverseYellow}` : `${Colors.White}`
    }
  })
}));

const StyledMenuItem = styled(MenuItem)((props: {selected: boolean}) => ({
  fontFamily: 'GothamMedium',
  fontSize: '14px',
  color: props.selected ? `${Colors.MinerverseYellow}` : `${Colors.White}`
}));

const ExpandIcon = styled(ExpandMoreIcon)({
  color: `${Colors.White}`
})

const CollapseIcon = styled(ExpandLessIcon)({
  color: `${Colors.White}`
})

export const SingleListItem = (
    item: any, 
    setDrawerOpen: Function
  ) => {

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
    setDrawerOpen(true);
  }

  return(
    <Link key={item.title} to={item.path}>
      <StyledListItem key={item.title} onClick={handleClick} >
          <StyledListIcon>
            {item.icon}
          </StyledListIcon>
          <StyledListItemText primary={item.title} selected={selected} />
      </StyledListItem>
    </Link>
  );
}


export const MultiLevelListItem = (
    item: any,
    drawerOpened: boolean, 
    setDrawerOpen: Function
  ) => {
  let children = item.children;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
 
  const handleClick = () => {
    setDrawerOpen(true);
    setOpen((prev) => !prev);
  };

  const handleChildClick = (e: any) => {
    console.log(e);
    setSelected(true);
  }

  const handleCollapse = (drawerOpened: any) => {
    if(!drawerOpened){
      setOpen(false);
    }
  }

  useEffect(() => {
    handleCollapse(drawerOpened);
  }, [drawerOpened])

  return (
    <React.Fragment key={item.title} >
      <StyledListItem key={item.title} onClick={handleClick}>
        <StyledListIcon>
          {item.icon}
        </StyledListIcon>
        <StyledListItemText primary={item.title} selected={selected} />
        {open ? <CollapseIcon /> : <ExpandIcon />}
      </StyledListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: { index: React.Key; title: string; path: string;}) => (
            <Link key={child.index} to={child.path} onClick={(e) => {handleChildClick(e)}}>
              <StyledMenuItem selected={selected} key={child.index} >{child.title}</StyledMenuItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

