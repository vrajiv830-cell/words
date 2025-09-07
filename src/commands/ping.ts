import { Composer } from "grammy";

import { CommandsHelper } from "../util/commands-helper";

const composer = new Composer();

composer.command("ping", async (ctx) => {
  const loggerId = ctx.update.update_id;
  console.log(`[ping] loggerId=${loggerId}`);
  await ctx.reply("pong", { disable_notification: true });
});

CommandsHelper.addNewCommand("ping", "Check bot responsiveness.");

export const pingCommand = composer;


