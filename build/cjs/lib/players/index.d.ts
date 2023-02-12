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
    auth: (gameAccessToken: string, username: string, password: string) => Promise<any>;
    create: (gameAccessToken: string, newPlayer: NewPlayer) => Promise<any>;
    update: (playerAccessToken: string, playerId: string, updatePlayer: UpdatePlayer) => Promise<any>;
    get: (gameAccessToken: string) => Promise<any>;
}
export declare function auth(gameAccessToken: string, username: string, password: string): Promise<any>;
export declare function create(gameAccessToken: string, newPlayer: NewPlayer): Promise<any>;
export declare function update(playerAccessToken: string, playerId: string, updatePlayer: UpdatePlayer): Promise<any>;
export declare function get(gameAccessToken: string): Promise<any>;
