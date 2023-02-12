import { BaseClass, BaseParams } from "./_base";
import * as currencies from "./currencies";
import * as games from "./games";
import * as players from "./players";
import * as transactions from "./transactions";
import * as wallets from "./wallets";
export declare class MetaFabClient extends BaseClass {
    readonly currencies: currencies.CurrencyEndpoints;
    readonly games: games.GameEndpoints;
    readonly players: players.PlayerEndpoints;
    readonly transactions: transactions.TransactionEndpoints;
    readonly wallets: wallets.WalletEndpoints;
    constructor(params: BaseParams);
}
