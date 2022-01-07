import { getAllAPY } from "./PoolService";

class PoolInfoManger {

  static instance: PoolInfoManger;

  private constructor() {
  }

  public static getInstance(): PoolInfoManger {
    if (!PoolInfoManger.instance) {
      PoolInfoManger.instance = new PoolInfoManger();
    }
    return PoolInfoManger.instance;
  }

  public startUpdate = async () => {
    await getAllAPY();
    window.setInterval(async () => {
      await getAllAPY();
    }, 120000);
  }
}

export const poolInfoManger = PoolInfoManger.getInstance();