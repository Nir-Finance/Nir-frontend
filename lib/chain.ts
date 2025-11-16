import { bscTestnet } from "viem/chains";

export const nirChain = bscTestnet;
export const nirChainId = nirChain.id;
export const nirRpcUrl =
  process.env.NEXT_PUBLIC_BSC_TESTNET_RPC_URL ??
  "https://data-seed-prebsc-1-s1.bnbchain.org:8545";
