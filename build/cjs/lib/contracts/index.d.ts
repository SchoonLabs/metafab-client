import type { Transaction } from "../transactions";
export interface Contract {
    id: string;
    gameId: string;
    chain: string;
    abi: any[];
    type: string;
    address: string;
    updatedAt: Date;
    createdAt: Date;
    transactions: Transaction[];
}
