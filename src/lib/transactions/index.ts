import { BaseClass } from "../_base";
import { PATH } from "../constants";

export interface Transaction {
  id: string;
  contractId: string;
  walletId: string;
  function: string; // ie. "create"
  args: any[];
  hash: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface TransactionEndpoints {
  get: (transactionId: string) => Promise<any>;
}

export function get(transactionId: string): Promise<any> {
  return BaseClass.call("GET", `${PATH.TRANSACTIONS}/${transactionId}`);
}
