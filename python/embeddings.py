"""ساخت embedding."""

from _client import get_client

client = get_client()

response = client.embeddings.create(
    model="iranrouter/demo-embed",
    input="سلام دنیا",
)

vector = response.data[0].embedding
print(f"ابعاد: {len(vector)}")
print(f"نمونه: {vector[:5]} …")
