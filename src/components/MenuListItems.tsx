import React from "react";
import { useEffect } from "react";
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
import useState from 'react-usestateref';
import { ContextPath } from "src/constants/Menu";
import { useTranslation } from 'react-i18next';

const StyledListItem = styled(ListItemButton)(( props: { selected: boolean }) => ({
  padding: '0px 0px 0px 8px',
  margin: '5px 0 5px 0',
  height: '35px',
  borderLeft: props.selected? `4px solid ${Colors.MinerverseYellow}` : '4px solid transparent'
}));

const StyledListIcon = styled(ListItemIcon)({
  minWidth: '30px'
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
  backgroundColor: `${Colors.SubmenuGrey}`,
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
  setDrawerOpen: Function,
  location: any
) => {

  const [selected, setSelected] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setDrawerOpen(true);
  }

  useEffect(() => {
    setSelected(location.pathname === item.path)
  }, [item, location]);

  return(
    <Link key={item.title} to={item.path}>
      <StyledListItem selected={selected} key={item.title} onClick={handleClick} >
          <StyledListIcon>
            {item.icon(selected)}
          </StyledListIcon>
          <StyledListItemText primary={t(item.title)} selected={selected} />
      </StyledListItem>
    </Link>
  );
}


export const MultiLevelListItem = (
    item: any,
    drawerOpened: boolean, 
    setDrawerOpen: Function,
    location: any
  ) => {
  let children = item.children;

  const [open, setOpen] = useState(false);
  const [selected, setSelected, selectedRef] = useState(false);
  const [currentPath, setCurrentPath, currentPathRef] = useState('');
  const [targetPath, setTargetPath, targetPathRef] = useState('');
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setDrawerOpen(true);
    setOpen((prev) => !prev);
  };

  const handleChildClick = (childPath: string) => {
    setTargetPath(childPath);
  }

  const handleCollapse = (drawerOpened: boolean) => {
    if(!drawerOpened){
      setOpen(false);
    }
  }

  useEffect(() => {
    setCurrentPath(location.pathname);
    if(targetPathRef.current === ''){
      setSelected(currentPathRef.current.replace(ContextPath, '').startsWith(item.title.toLowerCase()));
    } else {
      setSelected(currentPathRef.current === targetPathRef.current);
    }
    handleCollapse(drawerOpened);
  }, [drawerOpened, location])

  return (
    <React.Fragment key={item.title} >
      <StyledListItem selected={selected} key={item.title} onClick={handleClick}>
        <StyledListIcon >
          {item.icon(selected)}
        </StyledListIcon>
        <StyledListItemText primary={t(item.title)} selected={selectedRef.current} />
        {open ? <CollapseIcon /> : <ExpandIcon />}
      </StyledListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: { index: React.Key; title: string; path: string; }) => (
            <Link key={child.index} to={child.path}>
              <StyledMenuItem selected={currentPathRef.current === child.path} key={child.index} onClick={() => {handleChildClick(child.path)}} >{t(child.title)}</StyledMenuItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

