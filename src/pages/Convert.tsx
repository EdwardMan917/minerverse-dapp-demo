import * as React from 'react';
import { FormButton } from "../components/styles/Buttons";
import { FormRow, FieldDisplay, FieldLabel, FieldTextBox, Form, DownArrow, FormContainer } from "../components/styles/convert/Form";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";
import Select from 'src/components/Select';

import { validateDecimal } from 'src/utils/validator';
import { getBalance, getConversionRate } from '../utils/wallet';
import { BNB, MVX, TokenConfig } from 'src/constants/Tokens';
import Popup from 'src/components/Popup';
import { PopupContents } from 'src/constants/PopupContents';


function Convert() {
  const LableWidth = "25%";
  const DisplayWidth = "75%";

  const [fromBalance, setFromBalance] = React.useState('-');
  const [fromToken, setFromToken] = React.useState('BNB');
  const [toBalance, setToBalance] = React.useState('-');
  const [toToken, setToToken] = React.useState('MVX');

  const [fromAmount, setFromAmount] = React.useState('0');
  const [toAmount, setToAmount] = React.useState('0');

  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupContent, setPopupContent] = React.useState(PopupContents.succeeded);

  const [rate, setRate] = React.useState('0');

  const handleConvert = () => {
    if(!fromToken || !toToken){
      setPopupContent(PopupContents.emptyToken);
      setPopupOpen(true);
      return;
    }
    if(!validateDecimal(fromAmount) || !validateDecimal(toAmount)){
      setPopupContent(PopupContents.incorrectAmount);
      setPopupOpen(true);
      return;
    }
    setPopupContent(PopupContents.succeeded);
    setPopupOpen(true);
  }

  const handleInput = (e: { target: {value: string}}, setAmount: Function) => {
    (async () => {
      
    })()
    let amount = e.target.value;
    setAmount(amount);
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
      if (fromToken && toToken){
        const conversionRate = await getConversionRate(
          {
            from: {
              address: TokenConfig[fromToken].address,
              type: TokenConfig[fromToken].type
            },
            to: {
              address: TokenConfig[toToken].address,
              type: TokenConfig[toToken].type
            }
          }
        );
        if(conversionRate){
          setRate(conversionRate);
        }
      }
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
          {Select(TokenConfig, setFromToken, BNB)}
          <FieldTextBox defaultValue="0" onChange={(e: any) => {handleInput(e, setFromAmount)}} />
          <DownArrow />
          <FormRow>
            <FieldLabel width={LableWidth} >To</FieldLabel>
            <FieldDisplay width={DisplayWidth} >Available: {toBalance}</FieldDisplay>
          </FormRow>
          {Select(TokenConfig, setToToken, MVX)}
          <FieldTextBox defaultValue="0" onChange={(e: any) => {handleInput(e, setToAmount)}} />
          <FormRow>
            <FieldLabel width={LableWidth}>Rate</FieldLabel>
            <FieldDisplay width={DisplayWidth}> 1 {fromToken} = {rate} {toToken} </FieldDisplay>
          </FormRow>
          <FormRow>
            <FormButton onClick={handleConvert} >Convert</FormButton>
          </FormRow>
        </Form>
      </FormContainer>
      {Popup(setPopupOpen, popupOpen, popupContent)}
    </StyledMainContainer>
  )
}

export default Convert;