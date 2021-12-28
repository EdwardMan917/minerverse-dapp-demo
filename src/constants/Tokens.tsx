import * as TokenIcons from "src/components/styles/TokensIcons";
import { ITokenConfig } from "src/interfaces/AppInterfaces";


export const BNB = "BNB";
export const CAKE = "CAKE";
export const MVX = "MVX";
export const WBNB = "WBNB";
export const BUSD = "BUSD";
export const USDT = "USDT";
export const USDC = "USDC";
export const ETH = "ETH";
export const BTCB = "BTCB";

export const NativeToken = "native";
export const Token = "token";
export const LPToken = "lp";

export const TokenConfig: ITokenConfig = {
  BNB: {
    address: "",
    value: BNB,
    type: NativeToken,
    icon: <TokenIcons.BNBIcon diameter="20px" marginRight={"10px"} /> 
  },
  CAKE: {
    address: "0xc3E0E5fea6f93caa60328a860bD5A18DaFB63e46",
    value: CAKE,
    type: Token,
    icon: <TokenIcons.CAKEIcon diameter="20px" marginRight={"10px"} /> 
  },
  MVX: {
    address: "0x383a78C81159e451Bbb40c0B7750156fF1FecF0A",
    value: MVX,
    type: Token,
    icon: <TokenIcons.MVXIcon diameter="20px" marginRight={"10px"} /> 
  },
  WBNB: {
    address: "0x2CdFAFCbf745F7720EAe97505c8C58CDF68EA197",
    value: WBNB,
    type: Token,
    icon: <TokenIcons.WBNBIcon diameter="20px" marginRight={"10px"} /> 
  },
  BUSD: {
    address: "0xc9609f9292DD259B7f899Ca19Cbb4108bcDA6178",
    value: BUSD,
    type: Token,
    icon: <TokenIcons.BUSDIcon diameter="20px" marginRight={"10px"} /> 
  },
  USDT: {
    address: "0xc1F135f2097188b3f42CCE4E8f4E5C365d98c1dE",
    value: USDT,
    type: Token,
    icon: <TokenIcons.USDTIcon diameter="20px" marginRight={"10px"} /> 
  },
  USDC: {
    address: "0x91DB862Ea8bBAFB5f76B437f05B13d587050a7B6",
    value: USDC,
    type: Token,
    icon: <TokenIcons.USDCIcon diameter="20px" marginRight={"10px"} /> 
  },
  ETH: {
    address: "0xfD7049527Bb983ab727de4C81D6477205F8e251D",
    value: ETH,
    type: Token,
    icon: <TokenIcons.ETHIcon diameter="20px" marginRight={"10px"} /> 
  },
  BTCB: {
    address: "0x38CccEE41a6F06FBad11D5D66d92183Ac6BfE480",
    value: BTCB,
    type: Token,
    icon: <TokenIcons.BTCBIcon diameter="20px" marginRight={"10px"} /> 
  }
}
