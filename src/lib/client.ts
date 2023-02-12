import { BaseClass, BaseParams } from "./_base";
import { API_ENDPOINT, NETWORK } from "./constants";
import * as currencies from "./currencies";
import * as games from "./games";
import * as players from "./players";
import * as transactions from "./transactions";
import * as wallets from "./wallets";

export class MetaFabClient extends BaseClass {
  readonly currencies: currencies.CurrencyEndpoints;
  readonly games: games.GameEndpoints;
  readonly players: players.PlayerEndpoints;
  readonly transactions: transactions.TransactionEndpoints;
  readonly wallets: wallets.WalletEndpoints;

  constructor(params: BaseParams) {
    super({
      ...params,
      apiUrl: params.apiUrl || API_ENDPOINT.PROD,
      network: params.network || NETWORK.ETH_TEST,
    });
    // this.contracts = contracts;
    this.currencies = currencies;
    this.games = games;
    this.players = players;
    this.transactions = transactions;
    this.wallets = wallets;
  }
}
