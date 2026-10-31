import { getClient } from "./client.mjs";

const client = getClient();

const response = await client.images.generate({
  model: "openai/gpt-image-2.5-sunburst",
  prompt: "a teal fox in the desert at dusk",
  size: "1024x1024",
});

const item = response.data[0];
console.log(item.url || (item.b64_json ? `${item.b64_json.slice(0, 80)}…` : item));
