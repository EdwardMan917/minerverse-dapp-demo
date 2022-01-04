import { getAllAPY, getAPY } from "./PoolService";

class PoolInfoStore {

  static instance: PoolInfoStore;

  private constructor() {
  }

  public static getInstance(): PoolInfoStore {
    if (!PoolInfoStore.instance) {
      PoolInfoStore.instance = new PoolInfoStore();
    }
    return PoolInfoStore.instance;
  }

  public startUpdate = async () => {
    await getAllAPY();
    window.setInterval(async () => {
      await getAllAPY();
    }, 120000);
  }
}

export const poolInfoStore = PoolInfoStore.getInstance();