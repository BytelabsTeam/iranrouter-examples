import { getClient } from "./client.mjs";

const client = getClient();
const models = await client.models.list();

for (const model of models.data.slice(0, 20)) {
  console.log(model.id);
}
