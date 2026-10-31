#!/usr/bin/env bash
# چت استریم (SSE)
set -euo pipefail

: "${IRANROUTER_API_KEY:?IRANROUTER_API_KEY را ست کنید}"
BASE_URL="${IRANROUTER_BASE_URL:-https://iranrouter.net/api/v1}"

curl -N -sS "${BASE_URL}/chat/completions" \
  -H "Authorization: Bearer ${IRANROUTER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-4o-mini",
    "stream": true,
    "messages": [{"role": "user", "content": "سه نکته کوتاه درباره پایتون بگو."}]
  }'
