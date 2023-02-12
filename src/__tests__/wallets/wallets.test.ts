import { MetaFabClient, API_ENDPOINT, NETWORK } from "../../";
import type { Balances } from "../../lib/wallets";

jest.setTimeout(30000);

describe("Wallet endpoints", () => {
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

  it("should get wallet balance", async () => {
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
      const result = await client.wallets.walletBalances(
        process.env.METAFAB_PLAYER_WALLET_ID
      );
      expect(result.status).toEqual(200);
      const wallet: Balances = result.data;
      expect(wallet.ETHEREUM).toBeDefined();
      expect(wallet.GOERLI).toBeDefined();
      expect(wallet.MATIC).toBeDefined();
      expect(wallet.MATICMUMBAI).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });

  it("should get wallet transactions", async () => {
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
      const result = await client.wallets.walletTransactions(
        process.env.METAFAB_PLAYER_WALLET_ID
      );
      expect(result.status).toEqual(200);
      const wallet: any[] = result.data;
      expect(wallet).toStrictEqual([]);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
