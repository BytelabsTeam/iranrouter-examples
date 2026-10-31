import { getClient } from "./client.mjs";

const client = getClient();

const response = await client.chat.completions.create({
  model: "deepseek/deepseek-flash",
  messages: [{ role: "user", content: "سلام! خودت را در یک جمله معرفی کن." }],
});

console.log(response.choices[0].message.content);
