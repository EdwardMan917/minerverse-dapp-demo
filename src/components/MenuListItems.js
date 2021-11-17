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


const StyledListItem = styled(ListItem)({
  padding: '0px',
  margin: '5px 0 5px 0'
})

const StyledListIcon = styled(ListItemIcon)({
  minWidth: '30px'
})

const StyledListItemText = styled(ListItemText)({
  ...({
    '& .MuiTypography-root': {
      fontFamily: 'GothamMedium',
      fontSize: '14px',
      color: 'white'
    }
  })
});

const StyledMenuItem = styled(MenuItem)({
  fontFamily: 'GothamMedium',
  fontSize: '14px',
  color: 'white'
})

const ExpandIcon = styled(ExpandMoreIcon)({
  color: 'white'
})

const CollapseIcon = styled(ExpandLessIcon)({
  color: 'white'
})

export const SingleListItem = (item, setDrawerOpen) => {

  const handleClick = () => {
    setDrawerOpen(true);
  }

  return(
    <StyledListItem button key={item.title} onClick={handleClick} >
      <StyledListIcon>
        {item.icon}
      </StyledListIcon>
      <StyledListItemText primary={item.title} />
    </StyledListItem>
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
    <React.Fragment>
      <StyledListItem button onClick={handleClick}>
        <StyledListIcon>{item.icon}</StyledListIcon>
        <StyledListItemText primary={item.title} />
        {open ? <CollapseIcon /> : <ExpandIcon />}
      </StyledListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child) => (
            <StyledMenuItem>{child}</StyledMenuItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

