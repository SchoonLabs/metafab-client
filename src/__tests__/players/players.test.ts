import { MetaFabClient, API_ENDPOINT, NETWORK } from "../../";
import type { Player, NewPlayer, UpdatePlayer } from "../../lib/players";

jest.setTimeout(30000);

describe("Player endpoints", () => {
  it("should initialize class", async () => {
    const fakeToken = "lkajsdfkljasdfopuiwerkljasdf";

    const client = new MetaFabClient({
      accessToken: fakeToken,
    });

    expect(MetaFabClient.network).toEqual(NETWORK.ETH_TEST);
    expect(MetaFabClient.apiUrl).toEqual(API_ENDPOINT.PROD);
    expect(MetaFabClient.accessToken).toEqual(fakeToken);

    try {
      await client.players.auth(
        process.env.METAFAB_GAME_PUBLISH_KEY,
        "fakeUser",
        "p@ssw0rd"
      );
    } catch (e) {
      // We are expecting this test to fail
      expect(e).toBeDefined();
    }
  });

  it("should authenticate a player", async () => {
    const playerUsername = process.env.METAFAB_PLAYER_USERNAME;
    const playerPassword = process.env.METAFAB_PLAYER_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.ETH_MAIN,
      username: playerUsername,
      password: playerPassword,
    });

    try {
      const result = await client.players.auth(
        process.env.METAFAB_GAME_PUBLISH_KEY,
        playerUsername,
        playerPassword
      );
      expect(result.status).toEqual(200);
      const player: Player = result.data;
      expect(player.id).toBeDefined();
      expect(player.username).toEqual(playerUsername);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });

  it("should get all players", async () => {
    const playerUsername = process.env.METAFAB_PLAYER_USERNAME;
    const playerPassword = process.env.METAFAB_PLAYER_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.ETH_MAIN,
      username: playerUsername,
      password: playerPassword,
    });

    try {
      const result = await client.players.get(
        process.env.METAFAB_GAME_SECRET_KEY
      );
      expect(result.status).toEqual(200);
      console.log(result.data);
      const players: Array<Player> = result.data;
      expect(players).toBeDefined();
      expect(players?.length).toBeGreaterThan(1);
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});

describe.skip("Skipped Player endpoints", () => {
  it("should create a new player on the Polygon Testnet", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.POLY_TEST,
      username,
      password,
    });

    try {
      const newPlayer: NewPlayer = {
        username: "",
        password: "",
      };
      const result = await client.players.create(
        process.env.METAFAB_GAME_PUBLISH_KEY,
        newPlayer
      );
      expect(result.status).toEqual(200);
      const player: Player = result.data;
      expect(player.id).toBeDefined();
      expect(player.username).toEqual(newPlayer.username);
      expect(player.createdAt).toBeDefined();
      expect(player.updatedAt).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });

  it("should update a player on the Polygon Testnet", async () => {
    const username = process.env.METAFAB_ACCOUNT_EMAIL;
    const password = process.env.METAFAB_ACCOUNT_PASSWORD;

    const client = new MetaFabClient({
      network: NETWORK.POLY_TEST,
      username,
      password,
    });

    try {
      const updatePlayer: UpdatePlayer = {
        currentPassword: "",
        newPassword: "",
        resetAccessToken: false,
      };
      const result = await client.players.update(
        process.env.METAFAB_PLAYER_TOKEN,
        process.env.METAFAB_PLAYER_ID,
        updatePlayer
      );
      expect(result.status).toEqual(200);
      const player: Player = result.data;
      expect(player.id).toBeDefined();
      expect(player.username).toBeDefined();
    } catch (e) {
      expect(e).toBeUndefined();
    }
  });
});
