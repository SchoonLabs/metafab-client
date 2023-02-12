import { MetaFabClient, API_ENDPOINT, NETWORK } from "../../";

jest.setTimeout(30000);

describe("Transactions endpoints", () => {
  it("should initialize class", async () => {
    const fakeToken = "lkajsdfkljasdfopuiwerkljasdf";

    const client = new MetaFabClient({
      accessToken: fakeToken,
    });

    expect(MetaFabClient.network).toEqual(NETWORK.ETH_TEST);
    expect(MetaFabClient.apiUrl).toEqual(API_ENDPOINT.PROD);
    expect(MetaFabClient.accessToken).toEqual(fakeToken);

    try {
      await client.transactions.get("fakeTransaction");
    } catch (e) {
      // We are expecting this test to fail
      expect(e).toBeDefined();
    }
  });

  it("should get a transaction", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.ETH_MAIN,
      username,
      password,
    });

    try {
      const result = await client.transactions.get(
        process.env.METAFAB_TRANSACTION_ID
      );
      expect(result.status).toEqual(200);
      const transaction: any = result.data;
      expect(transaction.id).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
