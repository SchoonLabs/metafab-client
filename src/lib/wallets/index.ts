import { BaseClass } from "../_base";
import { PATH } from "../constants";

export interface Wallet {
  id: string;
  address: string;
}

export interface Balances {
  ETHEREUM: string;
  GOERLI: string;
  MATIC: string;
  MATICMUMBAI: string;
}

export interface WalletEndpoints {
  walletBalances: (walletId: string) => Promise<any>;
  walletTransactions: (walletId: string) => Promise<any>;
}

export function walletBalances(walletId: string): Promise<any> {
  return BaseClass.call("GET", `${PATH.WALLETS}/${walletId}/balances`);
}

export function walletTransactions(walletId: string): Promise<any> {
  return BaseClass.call("GET", `${PATH.WALLETS}/${walletId}/transactions`);
}
