export interface Transaction {
    id: string;
    contractId: string;
    walletId: string;
    function: string;
    args: any[];
    hash: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface TransactionEndpoints {
    get: (transactionId: string) => Promise<any>;
}
export declare function get(transactionId: string): Promise<any>;
