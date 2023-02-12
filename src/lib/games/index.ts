import { BaseClass } from "../_base";
import { PATH } from "../constants";
import type { Wallet } from "../wallets";

export interface NewGame {
  name: string;
  email: string;
  password: string;
}

export interface UpdateGame {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  rpcs?: RPCs;
  resetPublishedKey: boolean;
  resetSecretKey: boolean;
}

export interface Game {
  id: string;
  walletId: string;
  fundingWalletId: string;
  email: string;
  name: string;
  rpcs?: RPCs;
  publishedKey: string;
  secretKey: string;
  updatedAt: Date;
  createdAt: Date;
  wallet: Wallet;
  fundingWallet: Wallet;
}

export interface RPCs {
  ETHEREUM?: string;
  GOERLI?: string;
  MATIC?: string;
  MATICMUMBAI?: string;
}

export interface GameEndpoints {
  auth: () => Promise<any>;
  create: (newGame: NewGame) => Promise<any>;
  update: (gameId: string, updateGame: UpdateGame) => Promise<any>;
}

export function auth(): Promise<any> {
  return BaseClass.call("GET", `${PATH.GAMES}/auth`);
}

export function create(newGame: NewGame): Promise<any> {
  return BaseClass.call("POST", PATH.GAMES, undefined, newGame);
}

export function update(gameId: string, updateGame: UpdateGame): Promise<any> {
  return BaseClass.call(
    "PATCH",
    `${PATH.GAMES}/${gameId}`,
    undefined,
    updateGame
  );
}
