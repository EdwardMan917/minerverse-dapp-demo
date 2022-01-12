import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FormButton } from "../components/styles/Buttons";
import { FormRow, FieldDisplay, FieldLabel, FieldTextBox, Form, DownArrow, FormContainer } from "../components/styles/convert/Form";
import { StyledMainContainer } from "../components/styles/StyledMainContainer";
import Select from 'src/components/Select';

import { validateDecimal } from 'src/utils/validator';
import { getBalance, getConversionRate, doSwap } from '../utils/wallet';
import { BNB, MVX, TokenConfig } from 'src/constants/Tokens';
import Popup from 'src/components/Popup';
import { PopupContents } from 'src/constants/PopupContents';
import usePrevious from 'src/hooks/usePrevious';
import { Colors } from 'src/constants/Colors';
import { useSelector } from 'react-redux';


function Convert() {
  const LableWidth = "25%";
  const DisplayWidth = "75%";

  const [isConverting, setIsConverting] = React.useState(false);

  const [fromToken, setFromToken] = React.useState(BNB);
  const [fromBalance, setFromBalance] = React.useState('-');
  const [fromAmount, setFromAmount] = React.useState('0');
  
  const [toToken, setToToken] = React.useState(MVX);
  const [toBalance, setToBalance] = React.useState('-');
  const [toAmount, setToAmount] = React.useState('0');

  const prevFromToken = usePrevious(fromToken);
  const prevToToken = usePrevious(toToken);

  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupContent, setPopupContent] = React.useState(PopupContents.succeeded);
  
  const storedAccount = useSelector((state: {account: any}) => state.account);

  const [rate, setRate] = React.useState('0');
  
  const refreshBalance = async (token: string) => {
    try{
      if(!token){ return; }
      let tokenData = TokenConfig[token];
      const result = await getBalance(tokenData.type, tokenData.address);
      return result;
    } catch(e) {
      console.log(e);
      return "-";
    }
  }

  const refreshRate = async () => {
    const conversionRate = await getConversionRate(
      {
        from: {
          address: TokenConfig[fromToken].address,
          amount: fromAmount,
          type: TokenConfig[fromToken].type
        },
        to: {
          address: TokenConfig[toToken].address,
          amount: toAmount,
          type: TokenConfig[toToken].type
        }
      }
    );
    return conversionRate? conversionRate : "0.00000";
  }

  const refreshFormData = async () => {
    let fBalance = await refreshBalance(fromToken);
    let tBalance = await refreshBalance(toToken);
    let rateResult = await refreshRate();
    setFromBalance(fBalance? fBalance : "-");
    setToBalance(tBalance? tBalance : "-");
    setRate(rateResult)
  }

  const handleConvert = async () => {
    if(isConverting) { return; }
    if(!storedAccount.address) {
      setPopupContent(PopupContents.connectWallet);
      setPopupOpen(true);
      return;
    }
    if(!validateDecimal(fromAmount) || !validateDecimal(toAmount)){
      setPopupContent(PopupContents.incorrectAmount);
      setPopupOpen(true);
      return;
    }
    setIsConverting(true);
    let swapResult = await doSwap(
      {
        from: {
          address: TokenConfig[fromToken].address,
          amount: fromAmount,
          type: TokenConfig[fromToken].type
        },
        to: {
          address: TokenConfig[toToken].address,
          amount: toAmount,
          type: TokenConfig[toToken].type
        }
      }
    );
    if (swapResult === "success"){
      setPopupContent(PopupContents.succeeded);
    } else if (swapResult === "fail") {
      setPopupContent(PopupContents.failed);
    }
    setPopupOpen(true);
    setIsConverting(false);
    await refreshFormData();
    
  }

  const handleFromInput = (e: { target: {value: string}}) => {
    let amount = e.target.value;
    setFromAmount(amount);
    if(amount && validateDecimal(amount) && validateDecimal(rate)){
      setToAmount((parseFloat(amount) * parseFloat(rate)).toString());
    }
  }

  const handleToInput = (e: { target: {value: string}}) => {
    let amount = e.target.value;
    setToAmount(amount);
    if(amount && validateDecimal(amount) && validateDecimal(rate)){
      setFromAmount((parseFloat(amount) / parseFloat(rate)).toString());
    }
  }

  React.useEffect(() => {
    if(prevFromToken && fromToken === toToken){
      setToToken(prevFromToken? prevFromToken : "");
    } else {
      (async () => {
        await refreshFormData();
      })();
    }
  }, [fromToken])

  React.useEffect(() => {
    if(fromToken === toToken){
      setFromToken(prevToToken? prevToToken : "");
    } else {
      (async () => {
        await refreshFormData();
      })();
    }
  }, [toToken])

  React.useEffect(() => {
    refreshFormData();
  }, [storedAccount]);
  
  return (
    <StyledMainContainer>
      <FormContainer>
        <Form>
          <FormRow height={"0px"}>
            <FieldLabel width={LableWidth} >From</FieldLabel>
            <FieldDisplay width={DisplayWidth} >Available: {fromBalance}</FieldDisplay>
          </FormRow>
          {Select(TokenConfig, setFromToken, fromToken)}
          <FieldTextBox value={fromAmount} onChange={(e: any) => {handleFromInput(e)}} />
          <DownArrow />
          <FormRow>
            <FieldLabel width={LableWidth} >To</FieldLabel>
            <FieldDisplay width={DisplayWidth} >Available: {toBalance}</FieldDisplay>
          </FormRow>
          {Select(TokenConfig, setToToken, toToken)}
          <FieldTextBox value={toAmount} onChange={(e: any) => {handleToInput(e)}} />
          <FormRow>
            <FieldLabel width={LableWidth}>Rate</FieldLabel>
            <FieldDisplay width={DisplayWidth}> 1 {fromToken} = {rate} {toToken} </FieldDisplay>
          </FormRow>
          <FormRow>
            <FormButton 
              background={isConverting? Colors.ConvertFormGrey : Colors.MinerverseYellow} 
              color={isConverting? Colors.PendingGrey : Colors.Black}
              border={isConverting? `1px ${Colors.PendingGrey} solid` : "None"}
              visible={true}
              onClick={handleConvert}
            > 
              { isConverting ? <CircularProgress sx={{ color: `${Colors.PendingGrey}`, padding: "5px", marginRight: "15px" }} /> : <></> } { isConverting? "Pending" : "Convert" }
            </FormButton>
          </FormRow>
        </Form>
      </FormContainer>c
      {Popup(setPopupOpen, popupOpen, popupContent)}
    </StyledMainContainer>
  )
}

export default Convert;