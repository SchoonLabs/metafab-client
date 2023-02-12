import { AxiosResponse } from "axios";
import { BaseClass } from "../_base";
import { PATH } from "../constants";
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
  create: (
    gameSecretKey: string,
    gamePassword: string,
    newCurrency: NewCurrency
  ) => Promise<AxiosResponse>;
  getBalance: (
    currencyId: string,
    walletAddress: string
  ) => Promise<AxiosResponse<string>>;
}

export function get(gameAccessKey: string): Promise<any> {
  return BaseClass.call("GET", PATH.CURRENCIES, {
    "X-Game-Key": gameAccessKey,
  });
}

export function create(
  gameSecretKey: string,
  gamePassword: string,
  newCurrency: NewCurrency
): Promise<any> {
  return BaseClass.call(
    "POST",
    PATH.CURRENCIES,
    {
      "X-Authorization": gameSecretKey,
      "X-Password": gamePassword,
    },
    newCurrency
  );
}

export function getBalance(
  currencyId: string,
  walletAddress: string
): Promise<any> {
  return BaseClass.call(
    "GET",
    `${PATH.CURRENCIES}/${currencyId}/balances?address=${walletAddress}`,
    {}
  );
}
