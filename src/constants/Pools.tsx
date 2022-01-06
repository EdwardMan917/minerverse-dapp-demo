import { IPoolConfig } from "src/interfaces/AppInterfaces";
import * as TokenIcons from "src/components/styles/TokensIcons";

export enum PoolTypes {
  MinerverseMax = "MinerverseMax",
  MinerverseBNB = "MinverseBNB",
  CakeToCake = "CakeToCake",
  FlipToCake = "FlipToCake",
  FlipToFlip = "FlipToFlip"
}

const MVX = "MVX";
const CAKE = "CAKE";
const LP = "LP";
const MVX_WBNB = "MVX-WBNB";
const CAKE_WBNB = "CAKE-WBNB";
const USDT_BUSD = "USDT-BUSD";
const USDC_BUSD = "USDC-BUSD";
const USDT_WBNB = "USDT-WBNB";
const WETH_WBNB = "WETH-WBNB";
const BUSD_WBNB = "BUSD-WBNB";
const BTCB_WBNB = "BTCB-WBNB";
const CAKE_WBNB_LP = "CAKE-WBNB";
const USDT_BUSD_LP = "USDT-BUSD";
const USDC_BUSD_LP = "USDC-BUSD";
const USDT_WBNB_LP = "USDT-WBNB";
const WETH_WBNB_LP = "WETH-WBNB";
const BUSD_WBNB_LP = "BUSD-WBNB"; 
const BTCB_WBNB_LP = "BTCB-WBNB";


const getIcon = (name: string, diameter: string) => {
  switch(name){
    case MVX:
      return <TokenIcons.MVXIcon diameter={diameter} />;
    case CAKE:
      return <TokenIcons.CAKEIcon diameter={diameter} />;
    case MVX_WBNB:
      return <>
              <TokenIcons.MVXIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case CAKE_WBNB:
    case CAKE_WBNB_LP:
      return <>
              <TokenIcons.CAKEIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case USDT_BUSD:
    case USDT_BUSD_LP:
      return <>
              <TokenIcons.USDTIcon diameter={diameter} />
              <TokenIcons.BUSDIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case USDC_BUSD:
    case USDC_BUSD_LP:
      return <>
              <TokenIcons.USDCIcon diameter={diameter} />
              <TokenIcons.BUSDIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case USDT_WBNB:
    case USDT_WBNB_LP:
      return <>
              <TokenIcons.USDTIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case WETH_WBNB:
    case WETH_WBNB_LP:
      return <>
              <TokenIcons.ETHIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case BUSD_WBNB:
    case BUSD_WBNB_LP:
      return <>
              <TokenIcons.BUSDIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
    case BTCB_WBNB:
    case BTCB_WBNB_LP:
      return <>
              <TokenIcons.BTCBIcon diameter={diameter} />
              <TokenIcons.WBNBIcon diameter={diameter} transform="translateX(-5px)" />
            </>
  }
}

export const Pools: IPoolConfig[] = [
  { 
    address: "0xE9FD87510E62509FF01d91876Be648478455Ebd3",
    autoCompound: true,
    icon: getIcon,
    id: 1,
    name: MVX,
    pancakeId: 9999,
    reward: [MVX],
    type: PoolTypes.MinerverseMax
  },
  {
    address: "0x467a4f3C9347b3A6e87bCb38C08EfEE3eBeDCf7f",
    autoCompound: true,
    icon: getIcon,
    id: 2,
    name: CAKE,
    pancakeId: 0,
    reward: [CAKE, MVX],
    type: PoolTypes.CakeToCake
  },
  {
    address: "0x7562FF38625C9b92Ca88006eb87B55f2141038f7",
    autoCompound: false,
    icon: getIcon,
    id: 3,
    name: MVX_WBNB,
    pancakeId: 9,
    reward: [CAKE, MVX],
    type: PoolTypes.MinerverseBNB
  },
  {
    address: "0xF949Ee17B5AfD9C0CDD95f5781eC790DDf55d0E6",
    autoCompound: false,
    icon: getIcon,
    id: 4,
    name: CAKE_WBNB,
    pancakeId: 7,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0x537FE9F9c13e49F1BAdFA5AfF8f92857F209c3E8",
    autoCompound: false,
    icon: getIcon,
    id: 5,
    name: USDT_BUSD,
    pancakeId: 6,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0x58Be43B4A67FC0b9651a4DaE711F8382f9dA9638",
    autoCompound: false,
    icon: getIcon,
    id: 6,
    name: USDC_BUSD,
    pancakeId: 5,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0x235f66E407A9aBd95BEf7e5002509cFa4Dd07cd3",
    autoCompound: false,
    icon: getIcon,
    id: 7,
    name: USDT_WBNB,
    pancakeId: 4,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0x208721728a416F628538a0d3D9cAECEfdD160AEf",
    autoCompound: false,
    icon: getIcon,
    id: 8,
    name: WETH_WBNB,
    pancakeId: 3,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0x944C1FFaF826f519879161f995e8c15C9bc9ae00",
    autoCompound: false,
    icon: getIcon,
    id: 9,
    name: BUSD_WBNB,
    pancakeId: 2,
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0xa1Fff5C8eDB97eC16786506FcFf1077f7442347f",
    autoCompound: false,
    icon: getIcon,
    id: 10,
    name: BTCB_WBNB,
    pancakeId: 1, 
    reward: [CAKE, MVX],
    type: PoolTypes.FlipToCake
  },
  {
    address: "0xA31A63D5b9b1E3e2Ab7450b0f84c3d7A5806aA79",
    autoCompound: false,
    icon: getIcon,
    id: 11,
    name: CAKE_WBNB_LP,
    pancakeId: 7,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0x9aC7F021A797D91ba97637F5B27f146E74805662",
    autoCompound: false,
    icon: getIcon,
    id: 12,
    name: USDT_BUSD_LP,
    pancakeId: 6,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0xb99d6216F331c872D32BD659eE63Fb9dA591721c",
    autoCompound: false,
    icon: getIcon,
    id: 13,
    name: USDC_BUSD_LP,
    pancakeId: 5,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0x03e6c3099b8A5fCDbC199B9A35D513B61aa5fc18",
    autoCompound: false,
    icon: getIcon,
    id: 14,
    name: USDT_WBNB_LP,
    pancakeId: 4,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0x3D2D26Bbed3F2768ba3184074d2b5397B7d7d016",
    autoCompound: false,
    icon: getIcon,
    id: 15,
    name: WETH_WBNB_LP,
    pancakeId: 3,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0x0bF77e6AB6bA0d6B04E46E3282ea0341F6105f99",
    autoCompound: false,
    icon: getIcon,
    id: 16,
    name: BUSD_WBNB_LP,
    pancakeId: 2,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  },
  {
    address: "0x51b0F029Aeda48Ed9809d86d3EF2E153c7aE74b3",
    autoCompound: false,
    icon: getIcon,
    id: 17,
    name: BTCB_WBNB_LP,
    pancakeId: 1,
    reward: [LP, MVX],
    type: PoolTypes.FlipToFlip
  }
]