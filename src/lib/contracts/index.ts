import type { Transaction } from "../transactions";

export interface Contract {
  id: string;
  gameId: string;
  chain: string;
  abi: any[];
  type: string; // "ERC20_Game_Currency"
  address: string;
  updatedAt: Date;
  createdAt: Date;
  transactions: Transaction[];
}
