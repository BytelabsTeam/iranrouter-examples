import { config } from "dotenv";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
config({ path: resolve(root, ".env") });

const apiKey = process.env.IRANROUTER_API_KEY;
if (!apiKey) {
  console.error("IRANROUTER_API_KEY ست نیست.");
  process.exit(1);
}

const baseURL = (
  process.env.IRANROUTER_BASE_URL || "https://iranrouter.net/api/v1"
).replace(/\/$/, "");

const res = await fetch(`${baseURL}/key`, {
  headers: { Authorization: `Bearer ${apiKey}` },
});

if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}

console.log(JSON.stringify(await res.json(), null, 2));
