export function formatBalance(balance: string | undefined | number) {
  if (!balance) return "0.00";
  return Number(balance).toFixed(5);
}
