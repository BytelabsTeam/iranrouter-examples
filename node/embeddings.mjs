import { getClient } from "./client.mjs";

const client = getClient();

const response = await client.embeddings.create({
  model: "iranrouter/demo-embed",
  input: "سلام دنیا",
});

const vector = response.data[0].embedding;
console.log(`ابعاد: ${vector.length}`);
console.log(`نمونه: ${vector.slice(0, 5).join(", ")} …`);
