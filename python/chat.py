"""چت ساده با OpenAI SDK."""

from _client import get_client

client = get_client()

response = client.chat.completions.create(
    model="deepseek/deepseek-flash",
    messages=[
        {"role": "user", "content": "سلام! خودت را در یک جمله معرفی کن."},
    ],
)

print(response.choices[0].message.content)
