import { Composer } from "grammy";

import { count, countDistinct, like } from "drizzle-orm";

import { env } from "../config/env";
import { db } from "../drizzle/db";
import { leaderboardTable, usersTable } from "../drizzle/schema";

const composer = new Composer();

composer.command("stats", async (ctx) => {
  if (!ctx.from) return;

  if (!env.ADMIN_USERS.includes(ctx.from.id)) return;

  const [usersResult, groupsResult] = await Promise.all([
    db
      .select({ usersCount: count(usersTable.id) })
      .from(usersTable),
    db
      .select({ groupsCount: countDistinct(leaderboardTable.chatId) })
      .from(leaderboardTable)
      .where(like(leaderboardTable.chatId, "-1%"))
  ]);

  const usersCount = usersResult[0].usersCount;
  const groupsCount = groupsResult[0].groupsCount;

  return ctx.reply(`Total Users: ${usersCount}\nTotal Groups: ${groupsCount}`);
});

export const statsCommand = composer;
