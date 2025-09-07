import { z } from "zod";

export const env = z
  .object({
    BOT_TOKEN: z
      .string()
      .default("8332964966:AAHEHoh9zCOAxRjQhUJgNd42D3_FT-SQ6_I"),
    DATABASE_URI: z
      .string()
      .default(
        "mongodb+srv://batmanmusic:5WlCw5mza3mooIdZ@cluster0.0tz0bxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      ),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    ADMIN_USERS: z
      .string()
      .default("")
      .transform((val) => val.split(",").filter(Boolean).map(Number)),
    REDIS_URI: z.string().default("redis://127.0.0.1:6379"),
    LOGGER_ID: z
      .string()
      .default("-1002937783164")
      .transform((val) => Number(val)),
  })
  .parse(process.env);
