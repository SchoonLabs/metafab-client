import { MetaFabClient, API_ENDPOINT, NETWORK } from "../../";
import type { Game, NewGame, UpdateGame } from "../../lib/games";

jest.setTimeout(30000);

describe("Game endpoints", () => {
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

  it("should authenticate to game", async () => {
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
      const result = await client.games.auth();
      expect(result.status).toEqual(200);
      const game: Game = result.data;
      expect(game.id).toBeDefined();
      expect(game.email).toEqual(username);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});

describe.skip("Skipped Game endpoints", () => {
  it("should create a new game on the Polygon Testnet", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.POLY_TEST,
      username,
      password,
    });

    try {
      const newGame: NewGame = {
        name: "",
        email: "",
        password: "",
      };
      const result = await client.games.create(newGame);
      expect(result.status).toEqual(200);
      const game: Game = result.data;
      expect(game.id).toBeDefined();
      expect(game.email).toEqual(username);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });

  it("should update a game on the Polygon Testnet", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.POLY_TEST,
      username,
      password,
    });

    try {
      const updateGame: UpdateGame = {
        name: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        rpcs: {},
        resetPublishedKey: false,
        resetSecretKey: false,
      };
      const result = await client.games.update("", updateGame);
      expect(result.status).toEqual(200);
      const game: Game = result.data;
      expect(game.id).toBeDefined();
      expect(game.email).toEqual(username);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
