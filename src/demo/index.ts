import { MetaFabClient, NETWORK } from "../";
import { Game } from "../lib/types";

async function fetchGame() {
  const client = new MetaFabClient({
    network: NETWORK.POLY_MAIN,
    username: process.env.METAFAB_ACCOUNT_EMAIL,
    password: process.env.METAFAB_ACCOUNT_PASSWORD,
  });

  console.log("MetaFabClient", client);

  const result = await client.games.auth();
  const game: Game = result.data;
  console.log({ game });
}

fetchGame();
