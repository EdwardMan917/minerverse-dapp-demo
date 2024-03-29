import * as React from 'react';
import { Colors } from "../constants/Colors";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';

import { InputBase, styled } from '@mui/material';
import { ITokenConfig } from 'src/interfaces/AppInterfaces';
import SCstyled from "styled-components";

const IconBox = SCstyled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSelect = styled(MuiSelect)(() => ({
  '& .MuiSvgIcon-root': {
    fill: `${Colors.White}`
  }
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    color: `${Colors.White}`,
    backgroundColor: `${Colors.ConvertFormGrey}`,
    border: `1px solid ${Colors.FormBorderGrey}`,
    fontSize: '15px',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'GothamBold',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    '&:focus': {
      borderColor: `${Colors.FormBorderGrey}`,
      boxShadow: 'None',
    },
  },
}));

function Item(key: number, title: string, data: {value: string; icon: JSX.Element}) {
  return (
    <MenuItem key={key} value={data.value}>
      <IconBox>
        {data.icon}
      </IconBox>{title}
    </MenuItem>);
}

function Select(items: ITokenConfig, setToken: Function, parentToken: string | undefined) {
  const [value, setValue] = React.useState(parentToken);
  const handleChange = (e: any) => {
    let token = e.target.value;
    setToken(token)
    setValue(token);
  };

  React.useEffect(() => {
    setValue(parentToken);
  }, [parentToken])

  return (
    <FormControl sx={{ m: 1, width: '85%' }} variant="standard">
      <StyledSelect
        value={value}
        onChange={(e: any): void => handleChange(e)}
        input={<BootstrapInput />}
      > 
        {Object.keys(items).map((title: string, index: number) => (
          Item(index, title, items[title]? items[title] : {value:"", icon: <div />})
        ))}
      </StyledSelect>
    </FormControl>
  );
}

export default Select;