import { AxiosResponse } from "axios";
import type { Contract } from "../contracts";
export interface NewCurrency {
    name: string;
    symbol: string;
    supplyCap: number;
    chain: string;
}
export interface Currency {
    id: string;
    gameId: string;
    contractId: string;
    name: string;
    symbol: string;
    supplyCap: number;
    updatedAt: Date;
    createdAt: Date;
    contract: Contract;
}
export interface CurrencyEndpoints {
    get: (gameAccessKey: string) => Promise<AxiosResponse>;
    create: (gameSecretKey: string, gamePassword: string, newCurrency: NewCurrency) => Promise<AxiosResponse>;
    getBalance: (currencyId: string, walletAddress: string) => Promise<AxiosResponse<string>>;
}
export declare function get(gameAccessKey: string): Promise<any>;
export declare function create(gameSecretKey: string, gamePassword: string, newCurrency: NewCurrency): Promise<any>;
export declare function getBalance(currencyId: string, walletAddress: string): Promise<any>;
