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
export const BTCB_WBNB = "BTCB-WBNB";
export const BUSD_WBNB = "BUSD-WBNB";
export const ETH_WBNB = "ETH-WBNB";
export const USDT_WBNB = "USDT-WBNB";
export const USDC_BUSD = "USDC-BUSD";
export const USDT_BUSD = "USDT-BUSD";
export const CAKE_WBNB = "CAKE-WBNB";
export const MVX_WBNB = "MVX-WBNB";

export const NativeToken = "native";
export const Token = "token";
export const LPToken = "lp";

const DefaultDiameter = "20px";
const DefaultTransform = "translateX(-5px)";

const getIcon = (name: string) => {
  switch(name){
    case BNB:
      return (<TokenIcons.BNBIcon diameter={DefaultDiameter} />);
    case CAKE:
      return (<TokenIcons.CAKEIcon diameter={DefaultDiameter} />);
    case MVX:
      return (<TokenIcons.MVXIcon diameter={DefaultDiameter} />);
    case WBNB:
      return (<TokenIcons.WBNBIcon diameter={DefaultDiameter} />);
    case BUSD:
      return (<TokenIcons.BUSDIcon diameter={DefaultDiameter} />);
    case USDT:
      return (<TokenIcons.USDTIcon diameter={DefaultDiameter} />);
    case USDC:
      return (<TokenIcons.USDCIcon diameter={DefaultDiameter} />);
    case ETH:
      return (<TokenIcons.ETHIcon diameter={DefaultDiameter} />);
    case BTCB:
      return (<TokenIcons.BTCBIcon diameter={DefaultDiameter} />);
    case BTCB_WBNB:
      return (<>
              <TokenIcons.BTCBIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform} />
            </>);
    case BUSD_WBNB:
      return (<>
              <TokenIcons.BUSDIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case ETH_WBNB:
      return (<>
              <TokenIcons.ETHIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case USDT_WBNB:
      return (<>
              <TokenIcons.USDTIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case USDC_BUSD:
      return (<>
              <TokenIcons.USDCIcon diameter={DefaultDiameter} />
              <TokenIcons.BUSDIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case USDT_BUSD:
      return (<>
              <TokenIcons.USDTIcon diameter={DefaultDiameter} />
              <TokenIcons.BUSDIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case CAKE_WBNB:
      return (<>
              <TokenIcons.CAKEIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    case MVX_WBNB:
      return (<>
              <TokenIcons.MVXIcon diameter={DefaultDiameter} />
              <TokenIcons.WBNBIcon diameter={DefaultDiameter} transform={DefaultTransform}/>
            </>);
    default:
      return (<div />);
  }
}

export const TokenConfig: ITokenConfig = {
  BNB: {
    address: "",
    value: BNB,
    type: NativeToken,
    icon: getIcon(BNB) 
  },
  CAKE: {
    address: "0xc3E0E5fea6f93caa60328a860bD5A18DaFB63e46",
    value: CAKE,
    type: Token,
    icon: getIcon(CAKE) 
  },
  MVX: {
    address: "0x383a78C81159e451Bbb40c0B7750156fF1FecF0A",
    value: MVX,
    type: Token,
    icon: getIcon(MVX)
  },
  WBNB: {
    address: "0x2CdFAFCbf745F7720EAe97505c8C58CDF68EA197",
    value: WBNB,
    type: Token,
    icon: getIcon(WBNB) 
  },
  BUSD: {
    address: "0xc9609f9292DD259B7f899Ca19Cbb4108bcDA6178",
    value: BUSD,
    type: Token,
    icon: getIcon(BUSD) 
  },
  USDT: {
    address: "0xc1F135f2097188b3f42CCE4E8f4E5C365d98c1dE",
    value: USDT,
    type: Token,
    icon: getIcon(USDT) 
  },
  USDC: {
    address: "0x91DB862Ea8bBAFB5f76B437f05B13d587050a7B6",
    value: USDC,
    type: Token,
    icon: getIcon(USDC) 
  },
  ETH: {
    address: "0xfD7049527Bb983ab727de4C81D6477205F8e251D",
    value: ETH,
    type: Token,
    icon: getIcon(ETH) 
  },
  BTCB: {
    address: "0x38CccEE41a6F06FBad11D5D66d92183Ac6BfE480",
    value: BTCB,
    type: Token,
    icon: getIcon(BTCB) 
  },
  [BTCB_WBNB]: {
    address: "0x4358f10Fb199092b7B443480CaB5fb2C77D2028a",
    value: BTCB_WBNB,
    type: LPToken,
    icon: getIcon(BTCB_WBNB) 
  },
  [BUSD_WBNB]: {
    address: "0x63Bedc5dfc051C33c684D9125abbc406A39C5F75",
    value: BUSD_WBNB,
    type: LPToken,
    icon: getIcon(BUSD_WBNB) 
  },
  [ETH_WBNB]: {
    address: "0x41E1D1419cE8C271FBb86b15F4eB81205CE76bD4",
    value: ETH_WBNB,
    type: LPToken,
    icon: getIcon(ETH_WBNB) 
  },
  [USDT_WBNB]: {
    address: "0x99cf66b89AA929C2c45418b695De095506261Cc8",
    value: USDT_WBNB,
    type: LPToken,
    icon: getIcon(USDT_WBNB) 
  },
  [USDC_BUSD]: {
    address: "0xB57Fd0410a4c4e2Ed414D2Cc1cfe91f70C8Cff20",
    value: USDC_BUSD,
    type: LPToken,
    icon: getIcon(USDC_BUSD) 
  },
  [USDT_BUSD]: {
    address: "0x299Eaf507935fCa74f3B06d01fe6028030dD28B6",
    value: USDT_BUSD,
    type: LPToken,
    icon: getIcon(USDT_BUSD)  
  },
  [CAKE_WBNB]: {
    address: "0x946D69abea7a15E0e3b8e00869f951dd65Fd1527",
    value: CAKE_WBNB,
    type: LPToken,
    icon: getIcon(CAKE_WBNB)  
  },
  [MVX_WBNB]: {
    address: "0xE4f248E9f97e5e78469A8062E2106C63c1EF7414",
    value: MVX_WBNB,
    type: LPToken,
    icon: getIcon(MVX_WBNB)  
  }
}
