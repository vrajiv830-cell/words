import { Composer } from "grammy";

import { banCommand } from "./ban-user";
import { endGameCommand } from "./end-game";
import { helpCommand } from "./help";
import { leaderboardCommand } from "./leaderboard";
import { myScoreCommand } from "./my-score";
import { newGameCommand } from "./new-game";
import { startCommand } from "./start";
import { statsCommand } from "./stats";
import { unbanCommand } from "./unban-user";
import { pingCommand } from "./ping";
import { gcCommand } from "./gc";

const composer = new Composer();

composer.use(
  startCommand,
  helpCommand,
  newGameCommand,
  endGameCommand,
  myScoreCommand,
  statsCommand,
  banCommand,
  unbanCommand,
  leaderboardCommand,
  pingCommand,
  gcCommand,
);

export const commands = composer;
