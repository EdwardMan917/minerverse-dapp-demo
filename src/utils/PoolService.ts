import { ethers } from "ethers";
import { BigNumber } from "bignumber.js";
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
import { TokenConfig } from "src/constants/Tokens";


export async function getAllAPY() {
  try{
    const provider = store.getState().account.provider;
    if(!provider) return;
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
  } catch (e) {
    console.log(e);
    return;
  }
}

export async function approvePool(pool: IPoolConfig) {
  try {
    const provider = store.getState().account.provider;
    if(!provider) return;
    const signer = provider.getSigner();
    const TokenContract = new ethers.Contract(TokenConfig[pool.name].address, BEP20, signer);
    return await TokenContract.approve(pool.address, ethers.constants.MaxUint256);
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function getAllowance(pool: IPoolConfig){
  try {
    const myStore = store.getState();
    const provider = myStore.account.provider;
    const token = TokenConfig[pool.name];
    if(!provider || !token) return;
    const TokenContract = new ethers.Contract(token.address, BEP20, provider);
    const ZeroBigNumber = ethers.BigNumber.from("0");
    return (await TokenContract.allowance(myStore.account.address, pool.address)).gt(ZeroBigNumber);
  } catch (e) {
    console.log(e);
    return false;
  }
}