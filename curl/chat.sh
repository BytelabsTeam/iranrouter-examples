#!/usr/bin/env bash
# چت ساده
set -euo pipefail

: "${IRANROUTER_API_KEY:?IRANROUTER_API_KEY را ست کنید}"
BASE_URL="${IRANROUTER_BASE_URL:-https://iranrouter.net/api/v1}"

curl -sS "${BASE_URL}/chat/completions" \
  -H "Authorization: Bearer ${IRANROUTER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek/deepseek-flash",
    "messages": [{"role": "user", "content": "سلام! خودت را در یک جمله معرفی کن."}]
  }' | python3 -m json.tool
