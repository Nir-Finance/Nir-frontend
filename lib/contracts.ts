import deployed from "../contract/deployed-addresses.json";
import StrategyVaultAbi from "../contract/abis/StrategyVault.json";

type DeployedFileShape = {
  contracts: {
    StrategyVault: string;
  };
};

export const strategyVaultAddress = (deployed as DeployedFileShape).contracts
  .StrategyVault as `0x${string}`;

export const strategyVaultAbi = StrategyVaultAbi as typeof StrategyVaultAbi;

export const nirContracts = {
  strategyVault: {
    address: strategyVaultAddress,
    abi: strategyVaultAbi,
  },
} as const;
