import { config } from "dotenv";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import OpenAI from "openai";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
config({ path: resolve(root, ".env") });

const DEFAULT_BASE_URL = "https://iranrouter.net/api/v1";

export function getClient() {
  const apiKey = process.env.IRANROUTER_API_KEY;
  if (!apiKey) {
    console.error(
      "IRANROUTER_API_KEY ست نیست. از https://iranrouter.net/dashboard/keys کلید بگیرید.",
    );
    process.exit(1);
  }

  const baseURL = (process.env.IRANROUTER_BASE_URL || DEFAULT_BASE_URL).replace(
    /\/$/,
    "",
  );

  return new OpenAI({ apiKey, baseURL });
}

export { DEFAULT_BASE_URL };
