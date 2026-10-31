"""فهرست مدل‌ها."""

from _client import get_client

client = get_client()

for model in client.models.list().data[:20]:
    print(model.id)
