import { MetaFabClient, API_ENDPOINT, NETWORK } from "../../";
import type { Currency } from "../../lib/types";

describe("Currency endpoints", () => {
  it("should initialize class", async () => {
    const fakeToken = "lkajsdfkljasdfopuiwerkljasdf";

    const client = new MetaFabClient({
      accessToken: fakeToken,
    });

    expect(MetaFabClient.network).toEqual(NETWORK.ETH_TEST);
    expect(MetaFabClient.apiUrl).toEqual(API_ENDPOINT.PROD);
    expect(MetaFabClient.accessToken).toEqual(fakeToken);

    try {
      await client.games.auth();
    } catch (e) {
      // We are expecting this test to fail
      expect(e).toBeDefined();
    }
  });

  it("should get currencies of a game", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.ETH_MAIN,
      username,
      password,
    });

    expect(MetaFabClient.network).toEqual(NETWORK.ETH_MAIN);
    expect(MetaFabClient.apiUrl).toEqual(API_ENDPOINT.PROD);
    expect(MetaFabClient.username).toEqual(username);
    expect(MetaFabClient.password).toEqual(password);

    try {
      const result = await client.currencies.get(
        process.env.METAFAB_GAME_PUBLISH_KEY
      );
      expect(result.status).toEqual(200);
      const currencies: Currency[] = result.data;
      expect(currencies.length).toBeGreaterThan(0);
      const currency: Currency = currencies[0];
      expect(currency.id).toBeDefined();
      expect(currency.gameId).toBeDefined();
      expect(currency.contractId).toBeDefined();
      expect(currency.name).toBeDefined();
      expect(currency.symbol).toBeDefined();
      expect(currency.supplyCap).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });

  it("should get currency balance for player wallet", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.ETH_MAIN,
      username,
      password,
    });

    try {
      const result = await client.currencies.getBalance(
        process.env.METAFAB_CURRENCY_ID,
        process.env.METAFAB_PLAYER_WALLET_ADDRESS
      );
      expect(result.status).toEqual(200);
      const balance: string = result.data;
      expect(balance).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
