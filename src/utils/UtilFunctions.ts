import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

export function toFloat(input: BigNumber) {
  return parseFloat(formatEther(input));
}