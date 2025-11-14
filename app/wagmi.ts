"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  baseSepolia,
  bsc,
  bscTestnet,
  mainnet,
  opBNB,
  opBNBTestnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Nir Finance",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    mainnet,
    polygon,
    sepolia,
    bsc,
    optimism,
    opBNB,
    base,
    bscTestnet,
    arbitrum,
    opBNBTestnet,
    baseSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
