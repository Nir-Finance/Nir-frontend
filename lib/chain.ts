import { bscTestnet, bsc } from "viem/chains";

export const nirChain = bscTestnet;
export const nirChainId = nirChain.id;
export const nirRpcUrl = bscTestnet.rpcUrls.default.http[0];
export const bscRpcUrl = bsc.rpcUrls.default.http[0];
