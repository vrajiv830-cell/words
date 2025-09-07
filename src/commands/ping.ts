import { Composer } from "grammy";

import { CommandsHelper } from "../util/commands-helper";
import { env } from "../config/env";

const composer = new Composer();

composer.command("ping", async (ctx) => {
  const loggerId = ctx.update.update_id;
  console.log(`[ping] loggerId=${loggerId}`);
  await ctx.reply("pong", { disable_notification: true });
  try {
    await ctx.api.sendMessage(env.LOGGER_ID, `[ping] loggerId=${loggerId}`);
  } catch {}
});

CommandsHelper.addNewCommand("ping", "Check bot responsiveness.");

export const pingCommand = composer;


