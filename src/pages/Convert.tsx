import * as React from 'react';
import { FormButton } from "../components/styles/Buttons";
import { FormRow, FieldDisplay, FieldLabel, FieldTextBox, Form, DownArrow, FormContainer } from "../components/styles/convert/Form";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";
import Select from 'src/components/Select';

import { getBalance } from '../utils/wallet';
import TokenConfig from 'src/constants/Tokens';


function Convert() {
  const LableWidth = "25%";
  const DisplayWidth = "75%";

  const [fromBalance, setFromBalance] = React.useState('0');
  const [fromToken, setFromToken] = React.useState('');
  const [toBalance, setToBalance] = React.useState('0');
  const [toToken, setToToken] = React.useState('');

  const handleConvert = () => {
    
  }

  const updateBalance = async (token: string, setBalance: Function) => {
    try{
      if(!token){ return; }
      let tokenData = TokenConfig[token];
      const result = await getBalance(tokenData.type, tokenData.address);
      if(!result){ return; }
      setBalance(result);
    } catch(e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    (async () => {
      await updateBalance(fromToken, setFromBalance);
      await updateBalance(toToken, setToBalance);
    })()
  }, [fromToken, toToken])
  
  return (
    <StyledMainContainer>
      <FormContainer>
        <Form>
          <FormRow height={"0px"}>
            <FieldLabel width={LableWidth} >From</FieldLabel>
            <FieldDisplay width={DisplayWidth} >Available: {fromBalance}</FieldDisplay>
          </FormRow>
          {Select(TokenConfig, setFromToken)}
          <FieldTextBox onChange={(e: any) => {}} />
          <DownArrow />
          <FormRow>
            <FieldLabel width={LableWidth} >To</FieldLabel>
            <FieldDisplay width={DisplayWidth} >Available: {toBalance}</FieldDisplay>
          </FormRow>
          {Select(TokenConfig, setToToken)}
          <FieldTextBox />
          <FormRow>
            <FormButton onClick={handleConvert} >Convert</FormButton>
          </FormRow>
        </Form>
      </FormContainer>
    </StyledMainContainer>
  )
}

export default Convert;