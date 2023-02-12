# MetaFab Typescript Client SDK

![NPM](https://img.shields.io/npm/l/metafab-client)
![NPM](https://img.shields.io/npm/v/metafab-client)
![GitHub Workflow Status](https://github.com/schoonlabs/metafab-client/actions/workflows/metafab-client.yml/badge.svg?branch=main)

Community-built Typescript client for MetaFab's Web3 API.

The official documentation can be found at: https://trymetafab.com.

## Installation

NPM
```
npm install metafab-client
```
YARN
```
yarn add metafab-client
```

## Usage

Authenticate your MetaFab game
```typescript
import { MetaFabClient, NETWORK } from 'metafab-client';
import type { Game } from 'metafab-client';

const client = new MetaFabClient({
  network: NETWORK.POLY_MAIN,
  username: process.env.METAFAB_ACCOUNT_EMAIL,
  password: process.env.METAFAB_ACCOUNT_PASSWORD,
});

const result = await client.games.auth();
const game: Game = result.data;
```

Authenticate a MetaFab player
```typescript
import { MetaFabClient, NETWORK } from 'metafab-client';
import type { Player } from 'metafab-client';

const client = new MetaFabClient({
  network: NETWORK.POLY_MAIN,
  username: process.env.METAFAB_ACCOUNT_EMAIL,
  password: process.env.METAFAB_ACCOUNT_PASSWORD,
});

const result = await client.players.auth(process.env.METAFAB_GAME_PUBLISH_KEY, 'playerUsername', 'p@ssw0rd');
const player: Player = result.data;
```
