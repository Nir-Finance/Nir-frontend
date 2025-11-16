"use client";

import { ReactNode, useState } from "react";
import { WagmiProvider, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RainbowKitProvider,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";

import { nirChain, nirChainId, nirRpcUrl } from "@/lib/chain";
import { ToastProvider } from "@/components/ui/toast-provider";

const wagmiConfig = getDefaultConfig({
    appName: "Nir Finance",
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    chains: [nirChain],
    transports: {
      [nirChainId]: http(nirRpcUrl),
    },
});

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ToastProvider>{children}</ToastProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
