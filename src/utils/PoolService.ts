import { BigNumber, ethers, FixedNumber } from "ethers";
import { formatUnits } from "@ethersproject/units";
import { getConnectedAccount } from "./wallet";
import Chef from "src/abi/Chef.json";
import Pool from "src/abi/Pool.json";
import IPancakePair from "src/abi/IPancakePair.json";
import { PoolTypes } from "src/constants/Pools";
import MasterChef from "src/abi/MasterChef.json";
import { IPoolConfig } from "src/interfaces/AppInterfaces";
import Contracts from "src/constants/Contracts";
import { toFloat } from "./UtilFunctions";


export async function getAPY(pool: IPoolConfig){
  if (typeof window.ethereum !== 'undefined' && await getConnectedAccount() !== "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let apy = "0.00";
    if(pool.type === PoolTypes.MinerverseMax || pool.type === PoolTypes.MinerverseBNB) {
      let chefContract = new ethers.Contract(Contracts.chef, Chef, provider);
      let poolContract = new ethers.Contract(pool.address, Pool, provider);
      
      let MXVPerBlockResult = await chefContract.minerversePerBlock();
      let allocPointResult = await chefContract.vaultInfoOf(pool.address);
      let totalAllocResult = await chefContract.totalAllocPoint();
      let totalSupplyResult = await poolContract.totalSupply();
      
      let tempAPY = (
        toFloat(MXVPerBlockResult) 
        * 10512000 
        * toFloat(allocPointResult.allocPoint) 
        / toFloat(totalAllocResult)
        / toFloat(totalSupplyResult)
      );
      apy = tempAPY.toFixed(2).toString();
    } else if (pool.type === PoolTypes.CakeToCake || pool.type === PoolTypes.FlipToFlip) {
      let masterChefContract = new ethers.Contract(Contracts.pancakeMasterChef, MasterChef, provider);
      
      let poolContract = new ethers.Contract(pool.address, Pool, provider);
      let stakingToken = await poolContract.stakingToken();
      
      let pancakePairContract = new ethers.Contract(stakingToken, IPancakePair, provider);
      
      let cakePerBlockResult = await masterChefContract.cakePerBlock();
      let allocPointResult = await masterChefContract.poolInfo(pool.pancakeId);
      let totalAllocResult = await masterChefContract.totalAllocPoint();
      let lpTotalSupplyResult = await pancakePairContract.totalSupply();
      
      let lpInterest = cakePerBlockResult.mul(10512000).mul(allocPointResult.allocPoint).div(totalAllocResult);
      console.log(toFloat(lpInterest));
      let lpAPR = (lpInterest.div(lpTotalSupplyResult)).mul(100);
      console.log(toFloat(lpAPR));
      let tempAPY = ((lpAPR.div(4380).add(1)).pow(4380)).sub(1);
      console.log(toFloat(tempAPY));
      apy = ((tempAPY.mul(70).div(100)) + (tempAPY.mul(30).div(100).div(FixedNumber.from("1.2"))));
      console.log((tempAPY * 70 / 100), " + ", (tempAPY * 30 / 100 * 1.2));

    }
    return apy;
  }    
}
