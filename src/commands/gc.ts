import { Composer } from "grammy";

import { CommandsHelper } from "../util/commands-helper";

const composer = new Composer();

composer.command("gc", async (ctx) => {
  const loggerId = ctx.update.update_id;
  console.log(`[gc] loggerId=${loggerId}`);

  const isGcAvailable = typeof global.gc === "function";
  if (isGcAvailable) {
    try {
      // @ts-ignore: Node may expose gc when run with --expose-gc
      global.gc();
      await ctx.reply("Garbage collection triggered.", {
        disable_notification: true,
      });
    } catch (error) {
      await ctx.reply("Failed to trigger garbage collection.", {
        disable_notification: true,
      });
    }
  } else {
    await ctx.reply(
      "GC not available. Run Node with --expose-gc to enable.",
      { disable_notification: true },
    );
  }
});

CommandsHelper.addNewCommand("gc", "Trigger a garbage collection (if enabled).");

export const gcCommand = composer;


