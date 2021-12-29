import { ethers, FixedNumber } from "ethers";
import { formatEther, parseEther } from "@ethersproject/units";
import { BigNumber } from "bignumber.js";
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
    let apy: any = "0.00";
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
      
      let cakePerBlockResult = new BigNumber(toFloat(await masterChefContract.cakePerBlock()));
      let allocPointResult = await masterChefContract.poolInfo(pool.pancakeId);
      let totalAllocResult = new BigNumber(toFloat(await masterChefContract.totalAllocPoint()));
      let lpTotalSupplyResult = new BigNumber(toFloat(await pancakePairContract.totalSupply()));
      
      console.log(cakePerBlockResult.toFixed(5));

      let lpInterest = cakePerBlockResult.times(10512000).times(new BigNumber(toFloat(allocPointResult.allocPoint))).dividedBy(totalAllocResult);
      console.log(lpInterest.toFixed(5), lpTotalSupplyResult.toFixed(5));
      let lpAPR = lpInterest.dividedBy(lpTotalSupplyResult).times(100);
      console.log(lpAPR.toFixed(5));
      let tempAPY = ((lpAPR.dividedBy(4380).plus(1)).pow(4380)).minus(1);
      console.log(tempAPY.toFixed(5));
      apy = ((tempAPY.times(70).dividedBy(100)).plus(tempAPY.times(30).dividedBy(100).dividedBy(1.2))).toFixed(2);
      console.log(apy)
    }
    return apy;
  }    
}
