import { contractAddresses, abi } from "../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

export default function LotteryEntrance() {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  // These get re-rendered every time due to our connect button!
  const chainId = parseInt(chainIdHex);
  // console.log(`ChainId is ${chainId}`)
  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  return <div></div>;
}
// https://youtu.be/gyMwXuJrbJQ?t=63684
