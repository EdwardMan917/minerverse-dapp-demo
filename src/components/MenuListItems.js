import React from "react";
import { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material/styles';
import { Colors } from "../constants/Colors.ts";
import { Link } from "react-router-dom";


const StyledListItem = styled(ListItem)({
  padding: '0px',
  margin: '5px 0 5px 0'
})

const StyledListIcon = styled(ListItemIcon)({
  minWidth: '30px',
  color: `${Colors.MinerverseYellow}`
})

const StyledListItemText = styled(ListItemText)(({ selected }) => ({
  ...({
    '& .MuiTypography-root': {
      fontFamily: 'GothamMedium',
      fontSize: '14px',
      color: selected ? `${Colors.MinerverseYellow}` : `${Colors.White}`
    }
  })
}));

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'GothamMedium',
  fontSize: '14px',
  color: `${Colors.White}`
})

const ExpandIcon = styled(ExpandMoreIcon)({
  color: `${Colors.White}`
})

const CollapseIcon = styled(ExpandLessIcon)({
  color: `${Colors.White}`
})

export const SingleListItem = (item, setDrawerOpen) => {

  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
    setDrawerOpen(true);
  }

  return(
    <Link key={item.title} to={item.path}>
      <StyledListItem button key={item.title} onClick={handleClick} >
          <StyledListIcon>
            {item.icon}
          </StyledListIcon>
          <StyledListItemText primary={item.title} selected={selected} />
      </StyledListItem>
    </Link>
  );
}


export const MultiLevelListItem = (item, drawerOpened, setDrawerOpen) => {
  let children = item.children;

  const [open, setOpen] = useState(false);
 
  const handleClick = () => {
    setDrawerOpen(true);
    setOpen((prev) => !prev);
  };

  const handleCollapse = (drawerOpened) => {
    if(!drawerOpened){
      setOpen(false);
    }
  }

  useEffect(() => {
    handleCollapse(drawerOpened);
  }, [drawerOpened])

  return (
    <React.Fragment key={item.title} >
      <StyledListItem button key={item.title} onClick={handleClick}>
        <StyledListIcon>
          {item.icon}
        </StyledListIcon>
        <StyledListItemText primary={item.title} />
        {open ? <CollapseIcon /> : <ExpandIcon />}
      </StyledListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child) => (
            <StyledMenuItem key={child.index} >{child.title}</StyledMenuItem> // TODO: add link
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

