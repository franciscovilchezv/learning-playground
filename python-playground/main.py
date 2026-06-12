import anthropic

client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    
)

message = client.messages.create(
    model="claude-3-7-sonnet-20250219",
    max_tokens=20000,
    temperature=1,
    messages=[ {
            "role": "user",
            "content": "Hello, this is EVA",
        }]
)
print(message.content)
