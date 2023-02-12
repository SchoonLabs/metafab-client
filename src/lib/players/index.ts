import { BaseClass } from "../_base";
import { PATH } from "../constants";
import type { Wallet } from "../wallets";

export interface NewPlayer {
  username: string;
  password: string;
}

export interface UpdatePlayer {
  currentPassword: string;
  newPassword: string;
  resetAccessToken: boolean;
}

export interface Player {
  id: string;
  gameId: string;
  walletId: string;
  username: string;
  accessToken: string;
  updatedAt: Date;
  createdAt: Date;
  wallet: Wallet;
}

export interface PlayerEndpoints {
  auth: (
    gameAccessToken: string,
    username: string,
    password: string
  ) => Promise<any>;
  create: (gameAccessToken: string, newPlayer: NewPlayer) => Promise<any>;
  update: (
    playerAccessToken: string,
    playerId: string,
    updatePlayer: UpdatePlayer
  ) => Promise<any>;
  get: (gameAccessToken: string) => Promise<any>;
}

export function auth(
  gameAccessToken: string,
  username: string,
  password: string
): Promise<any> {
  const token = `${username}:${password}`;
  const encodedToken = Buffer.from(token).toString("base64");

  return BaseClass.call("GET", `${PATH.PLAYERS}/auth`, {
    Authorization: "Basic " + encodedToken,
    "X-Game-Key": gameAccessToken,
  });
}

export function create(
  gameAccessToken: string,
  newPlayer: NewPlayer
): Promise<any> {
  return BaseClass.call(
    "POST",
    PATH.PLAYERS,
    { "X-Game-Key": gameAccessToken },
    newPlayer
  );
}

export function update(
  playerAccessToken: string,
  playerId: string,
  updatePlayer: UpdatePlayer
): Promise<any> {
  return BaseClass.call(
    "PATCH",
    `${PATH.PLAYERS}/${playerId}`,
    { "X-Authorization": playerAccessToken },
    updatePlayer
  );
}

export function get(gameAccessToken: string): Promise<any> {
  return BaseClass.call("GET", PATH.PLAYERS, {
    "X-Authorization": gameAccessToken,
  });
}
