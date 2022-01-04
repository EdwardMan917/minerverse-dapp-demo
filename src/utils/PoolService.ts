import { ethers } from "ethers";
import { BigNumber } from "bignumber.js";
import { getConnectedAccount } from "./wallet";
import Chef from "src/abi/Chef.json";
import Pool from "src/abi/Pool.json";
import IPancakePair from "src/abi/IPancakePair.json";
import BEP20 from "src/abi/BEP20.json";
import { PoolTypes } from "src/constants/Pools";
import MasterChef from "src/abi/MasterChef.json";
import { IPoolConfig } from "src/interfaces/AppInterfaces";
import Contracts from "src/constants/Contracts";
import { toFloat } from "./UtilFunctions";
import { Pools } from "src/constants/Pools";
import store from "src/redux/store";
import { updateAPY } from "src/redux/action";


export async function getAPY(pool: IPoolConfig) {
  if (typeof window.ethereum !== 'undefined' && await getConnectedAccount() !== "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let apy: any = "0.00";

    let poolContract = new ethers.Contract(pool.address, Pool, provider);
    let masterChefContract = new ethers.Contract(Contracts.pancakeMasterChef, MasterChef, provider);
    let stakingToken = await poolContract.stakingToken();
    let pancakePairContract = new ethers.Contract(stakingToken, IPancakePair, provider);



    if (pool.type === PoolTypes.MinerverseMax || pool.type === PoolTypes.MinerverseBNB) {
      let chefContract = new ethers.Contract(Contracts.chef, Chef, provider);

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
      let cakePerBlockResult = new BigNumber(toFloat(await masterChefContract.cakePerBlock()));
      let allocPointResult = await masterChefContract.poolInfo(pool.pancakeId);
      let totalAllocResult = new BigNumber(toFloat(await masterChefContract.totalAllocPoint()));
      let lpTotalSupplyResult = new BigNumber(toFloat(await pancakePairContract.totalSupply()));

      let lpInterest = cakePerBlockResult.times(10512000).times(new BigNumber(toFloat(allocPointResult.allocPoint))).dividedBy(totalAllocResult);
      let lpAPR = lpInterest.dividedBy(lpTotalSupplyResult).times(100);
      let tempAPY = ((lpAPR.dividedBy(4380).plus(1)).pow(4380)).minus(1);
      apy = ((tempAPY.times(70).dividedBy(100)).plus(tempAPY.times(30).dividedBy(100).times(1.2))).toFixed(2);
    } else if (pool.type === PoolTypes.FlipToCake) {
      let Bep20Contract = new ethers.Contract(Contracts.CAKE, BEP20, provider);

      let cakePerBlockResult = new BigNumber(toFloat(await masterChefContract.cakePerBlock()));
      let allocPointResult = await masterChefContract.poolInfo(pool.pancakeId);
      let totalAllocPointResult = await masterChefContract.totalAllocPoint();
      let lpTotalSupplyResult = new BigNumber(toFloat(await pancakePairContract.totalSupply()));
      let cakeAllocPointResult = await masterChefContract.poolInfo(0); // pancakeId = 0 (cake to cake pool)
      let cakeTotalSupplyResult = new BigNumber(toFloat(await Bep20Contract.totalSupply()));

      let lpInterest = cakePerBlockResult
        .times(10512000)
        .times(new BigNumber(toFloat(allocPointResult.allocPoint)))
        .dividedBy(new BigNumber(toFloat(totalAllocPointResult)));
      let lpAPR = lpInterest.dividedBy(lpTotalSupplyResult).times(100);

      let cakeInterest = cakePerBlockResult
        .times(10512000)
        .times(new BigNumber(toFloat(cakeAllocPointResult.allocPoint)))
        .dividedBy(new BigNumber(toFloat(totalAllocPointResult)));
      let cakeAPR = cakeInterest.dividedBy(cakeTotalSupplyResult).times(100);

      let lpToCakeAPR = lpAPR.dividedBy(2).times(cakeAPR).plus(lpAPR);
      apy = lpToCakeAPR.times(70).dividedBy(100).plus(lpToCakeAPR.times(30).dividedBy(100).times(1.2)).toFixed(2);
    }
    return apy > 999.99 ? "999.99" : apy;
  }
}



export async function getAllAPY() {
  if (typeof window.ethereum !== 'undefined' && await getConnectedAccount() !== "") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const chefContract = new ethers.Contract(Contracts.chef, Chef, provider);
    const MXVPerBlock = await chefContract.minerversePerBlock();
    const totalAlloc = await chefContract.totalAllocPoint();

    const masterChefContract = new ethers.Contract(Contracts.pancakeMasterChef, MasterChef, provider);
    const cakePerBlock = new BigNumber(toFloat(await masterChefContract.cakePerBlock()));
    const masterChefTotalAlloc = new BigNumber(toFloat(await masterChefContract.totalAllocPoint()));
    const cakeAllocPoint = await masterChefContract.poolInfo(0);

    const Bep20Contract = new ethers.Contract(Contracts.CAKE, BEP20, provider);
    const cakeTotalSupply = new BigNumber(toFloat(await Bep20Contract.totalSupply()));

    Pools.forEach(async (pool) => {
      let poolContract = new ethers.Contract(pool.address, Pool, provider);
      let pancakePairContract;
      let lpInterest;
      let lpAPR;
      let result;
      switch (pool.type) {
        case PoolTypes.MinerverseMax:
        case PoolTypes.MinerverseBNB:
          Promise.all([
            chefContract.vaultInfoOf(pool.address),
            poolContract.totalSupply()
          ]).then(([allocPoint, totalSupply]) => {
            result = (
              toFloat(MXVPerBlock)
              * 10512000
              * toFloat(allocPoint.allocPoint)
              / toFloat(totalAlloc)
              / toFloat(totalSupply)
            ).toFixed(2).toString();
            store.dispatch(updateAPY({ [pool.id]: parseFloat(result) > 999.99 ? "999.99" : result }));
          }).catch((error) => {
            console.error(error);
          });
          break;

        case PoolTypes.CakeToCake:
        case PoolTypes.FlipToFlip:

          pancakePairContract = new ethers.Contract(await poolContract.stakingToken(), IPancakePair, provider);

          Promise.all([
            masterChefContract.poolInfo(pool.pancakeId),
            pancakePairContract.totalSupply()
          ]).then(([
            allocPoint, lpTotalSupply
          ]) => {
            lpTotalSupply = new BigNumber(toFloat(lpTotalSupply));

            lpInterest = cakePerBlock.times(10512000).times(new BigNumber(toFloat(allocPoint.allocPoint))).dividedBy(masterChefTotalAlloc);
            lpAPR = lpInterest.dividedBy(lpTotalSupply).times(100);
            let tempAPY = ((lpAPR.dividedBy(4380).plus(1)).pow(4380)).minus(1);
            result = tempAPY.times(70).dividedBy(100).plus(tempAPY.times(30).dividedBy(100).times(1.2)).toFixed(2);
            store.dispatch(updateAPY({ [pool.id]: parseFloat(result) > 999.99 ? "999.99" : result }));
          }).catch((error) => {
            console.error(error);
          });

          break;

        case PoolTypes.FlipToCake:
          pancakePairContract = new ethers.Contract(await poolContract.stakingToken(), IPancakePair, provider);

          Promise.all([
            masterChefContract.poolInfo(pool.pancakeId),
            pancakePairContract.totalSupply()
          ]).then(([
            allocPoint, lpTotalSupply
          ]) => {
            lpTotalSupply = new BigNumber(toFloat(lpTotalSupply));

            lpInterest = cakePerBlock
              .times(10512000)
              .times(new BigNumber(toFloat(allocPoint.allocPoint)))
              .dividedBy(masterChefTotalAlloc);
            lpAPR = lpInterest.dividedBy(lpTotalSupply).times(100);

            let cakeInterest = cakePerBlock
              .times(10512000)
              .times(new BigNumber(toFloat(cakeAllocPoint.allocPoint)))
              .dividedBy(masterChefTotalAlloc);
            let cakeAPR = cakeInterest.dividedBy(cakeTotalSupply).times(100);

            let lpToCakeAPR = lpAPR.dividedBy(2).times(cakeAPR).plus(lpAPR);
            result = lpToCakeAPR.times(70).dividedBy(100).plus(lpToCakeAPR.times(30).dividedBy(100).times(1.2)).toFixed(2);
            store.dispatch(updateAPY({ [pool.id]: parseFloat(result) > 999.99 ? "999.99" : result }));
          }).catch((error) => {
            console.error(error);
          });
          break;
      }
    })
  }
}