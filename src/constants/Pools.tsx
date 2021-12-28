import { IPoolConfig } from "src/interfaces/AppInterfaces";
import * as TokenIcons from "src/components/styles/TokensIcons";


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

const IconDiameter = "38px";

export const Pools: IPoolConfig[] = [
  {
    address: "0xE9FD87510E62509FF01d91876Be648478455Ebd3",
    autoCompound: true,
    icon: <TokenIcons.MVXIcon diameter={IconDiameter} />,
    name: MVX,
    reward: [MVX],
    type: "MinerverseMax"
  },
  {
    address: "0x467a4f3C9347b3A6e87bCb38C08EfEE3eBeDCf7f",
    autoCompound: true,
    icon: <TokenIcons.CAKEIcon diameter={IconDiameter} />,
    name: CAKE,
    reward: [CAKE, MVX],
    type: "CakeToCake"
  },
  {
    address: "0x7562FF38625C9b92Ca88006eb87B55f2141038f7",
    autoCompound: false,
    icon: <>
            <TokenIcons.MVXIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: MVX_WBNB,
    reward: [CAKE, MVX],
    type: "MinverseBNB"
  },
  {
    address: "0xF949Ee17B5AfD9C0CDD95f5781eC790DDf55d0E6",
    autoCompound: false,
    icon: <>
            <TokenIcons.CAKEIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: CAKE_WBNB,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0x537FE9F9c13e49F1BAdFA5AfF8f92857F209c3E8",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDTIcon diameter={IconDiameter} />
            <TokenIcons.BUSDIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDT_BUSD,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0x58Be43B4A67FC0b9651a4DaE711F8382f9dA9638",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDCIcon diameter={IconDiameter} />
            <TokenIcons.BUSDIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDC_BUSD,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0x235f66E407A9aBd95BEf7e5002509cFa4Dd07cd3",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDTIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDT_WBNB,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0x208721728a416F628538a0d3D9cAECEfdD160AEf",
    autoCompound: false,
    icon: <>
            <TokenIcons.ETHIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: WETH_WBNB,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0x944C1FFaF826f519879161f995e8c15C9bc9ae00",
    autoCompound: false,
    icon: <>
            <TokenIcons.BUSDIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: BUSD_WBNB,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0xa1Fff5C8eDB97eC16786506FcFf1077f7442347f",
    autoCompound: false,
    icon: <>
            <TokenIcons.BTCBIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: BTCB_WBNB,
    reward: [CAKE, MVX],
    type: "FlipToCake"
  },
  {
    address: "0xA31A63D5b9b1E3e2Ab7450b0f84c3d7A5806aA79",
    autoCompound: false,
    icon: <>
            <TokenIcons.CAKEIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: CAKE_WBNB_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0x9aC7F021A797D91ba97637F5B27f146E74805662",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDTIcon diameter={IconDiameter} />
            <TokenIcons.BUSDIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDT_BUSD_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0xb99d6216F331c872D32BD659eE63Fb9dA591721c",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDCIcon diameter={IconDiameter} />
            <TokenIcons.BUSDIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDC_BUSD_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0x03e6c3099b8A5fCDbC199B9A35D513B61aa5fc18",
    autoCompound: false,
    icon: <>
            <TokenIcons.USDTIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: USDT_WBNB_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0x3D2D26Bbed3F2768ba3184074d2b5397B7d7d016",
    autoCompound: false,
    icon: <>
            <TokenIcons.ETHIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: WETH_WBNB_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0x0bF77e6AB6bA0d6B04E46E3282ea0341F6105f99",
    autoCompound: false,
    icon:<>
          <TokenIcons.BUSDIcon diameter={IconDiameter} />
          <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
        </>,
    name: BUSD_WBNB_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  },
  {
    address: "0x51b0F029Aeda48Ed9809d86d3EF2E153c7aE74b3",
    autoCompound: false,
    icon: <>
            <TokenIcons.BTCBIcon diameter={IconDiameter} />
            <TokenIcons.WBNBIcon diameter={IconDiameter} transform="translateX(-5px)" />
          </>,
    name: BTCB_WBNB_LP,
    reward: [LP, MVX],
    type: "FlipToFlip"
  }
]