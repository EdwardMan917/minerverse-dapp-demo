import * as React from 'react';
import { FormButton } from "../components/styles/Buttons";
import { FormRow, FieldDisplay, FieldLabel, FieldSelect, FieldTextBox, Form, DownArrow } from "../components/styles/Form";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";
import { Colors } from "../constants/Colors";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { USDTIcon } from '../components/styles/Tokens';

import { getTotalSupply, allowance, buy } from '../utils/wallet';

function TokenSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"USDT"}><USDTIcon marginLeft={"5px"} />USDT</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
}


function Convert() {
  const LableWidth = "25%";
  const DisplayWidth = "75%";
  const RowPadding = "0 15px";
  const RowBorder = `1px ${Colors.FormBorderGrey} solid`;

  const handleConvert = () => {
    (async () => {
      await getTotalSupply();
    })();
    (async () => {
      await allowance();
    })();
    (async () => {
      await buy();
    })();
  }

  return (
    <StyledMainContainer>
      <Form>
        <FormRow>
          <FieldLabel width={LableWidth} >From</FieldLabel>
          <FieldDisplay width={DisplayWidth} >Available: 0</FieldDisplay>
        </FormRow>
        <FormRow padding={RowPadding} border={RowBorder} >
          <TokenSelect />
        </FormRow>
        <FieldTextBox pattern={"[0-9]+[.]?[0-9]*"}/>
        <DownArrow />
        <FormRow>
          <FieldLabel width={LableWidth} >To</FieldLabel>
          <FieldDisplay width={DisplayWidth} >Available: 0</FieldDisplay>
        </FormRow>
        <FormRow padding={RowPadding} border={RowBorder} >
          <FieldSelect></FieldSelect>
        </FormRow>
        <FieldTextBox />
        <FormRow>
          <FormButton onClick={handleConvert} >Convert</FormButton>
        </FormRow>
      </Form>
    </StyledMainContainer>
  )
}

export default Convert;