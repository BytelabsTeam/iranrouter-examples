#!/usr/bin/env bash
# embedding
set -euo pipefail

: "${IRANROUTER_API_KEY:?IRANROUTER_API_KEY را ست کنید}"
BASE_URL="${IRANROUTER_BASE_URL:-https://iranrouter.net/api/v1}"

curl -sS "${BASE_URL}/embeddings" \
  -H "Authorization: Bearer ${IRANROUTER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "iranrouter/demo-embed",
    "input": "سلام دنیا"
  }' | python3 -m json.tool
