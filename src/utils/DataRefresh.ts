import { useState } from "react";
import { getAPY } from "./PoolService";
import { Pools } from "src/constants/Pools";

class PoolInfoStore {

  static instance: PoolInfoStore;
  public PoolInfo: { [PoolId: number] : any } = {};
  // public [PoolInfo: any, setPoolInfo: Function] = useState({});

  private constructor() {
    console.log("constructor called!");
  }

  public static getInstance(): PoolInfoStore {
    if (!PoolInfoStore.instance) {
      PoolInfoStore.instance = new PoolInfoStore();
    }
    return PoolInfoStore.instance;
  }

  public startUpdate() {
    window.setInterval( async () => {
      Pools.map(async (pool) => {
        this.PoolInfo[pool.id] = await getAPY(pool);
      });
      console.log(this.PoolInfo);
    }, 5000);
  }
}

export const poolInfoStore = PoolInfoStore.getInstance();