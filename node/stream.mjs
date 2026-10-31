import { getClient } from "./client.mjs";

const client = getClient();

const stream = await client.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [{ role: "user", content: "سه نکته کوتاه درباره جاوااسکریپت بگو." }],
  stream: true,
});

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content;
  if (text) process.stdout.write(text);
}

process.stdout.write("\n");
