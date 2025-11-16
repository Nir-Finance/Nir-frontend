"use client";

import { useState } from "react";
import { parseUnits } from "viem";
import { useAccount, usePublicClient, useWriteContract } from "wagmi";

import { Button } from "@/components/ui/button";
import { nirContracts } from "@/lib/contracts";
import { erc20Abi } from "@/lib/erc20-abi";

interface ExecuteStrategyButtonProps {
  strategyId: number;
  inputToken: string;
  disabled?: boolean;
}

export function ExecuteStrategyButton({
  strategyId,
  inputToken,
  disabled,
}: ExecuteStrategyButtonProps) {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync, isPending } = useWriteContract();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleJoin = async () => {
    if (disabled) return;

    if (!isConnected || !address) {
      setError("Connect your wallet on BNB testnet to join this strategy.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const amount = parseUnits("0.1", 18);

      const approveHash = await writeContractAsync({
        abi: erc20Abi,
        address: inputToken as `0x${string}`,
        functionName: "approve",
        args: [nirContracts.strategyVault.address, amount],
      });

      if (publicClient) {
        await publicClient.waitForTransactionReceipt({ hash: approveHash });
      }

      const executeHash = await writeContractAsync({
        abi: nirContracts.strategyVault.abi,
        address: nirContracts.strategyVault.address,
        functionName: "executeStrategy",
        args: [BigInt(strategyId), amount, 1],
      });

      if (publicClient) {
        await publicClient.waitForTransactionReceipt({ hash: executeHash });
      }
    } catch {
      setError("Failed to join strategy. Check your wallet and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-stretch gap-2 w-full sm:w-auto">
      <Button
        type="button"
        variant="outline"
        className="bg-[#1FE9F7] text-[#090909] px-6 sm:px-12 py-4 sm:py-5 rounded-md border-none outline-none hover:bg-[#1FE9F7]/80 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
        onClick={handleJoin}
        disabled={disabled || submitting || isPending}
      >
        {submitting || isPending ? "Joining..." : "Join Strategy"}
      </Button>
      {error && (
        <span className="text-[11px] sm:text-[12px] text-red-400">{error}</span>
      )}
    </div>
  );
}
