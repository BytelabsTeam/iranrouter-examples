#!/usr/bin/env bash
# تولید تصویر
set -euo pipefail

: "${IRANROUTER_API_KEY:?IRANROUTER_API_KEY را ست کنید}"
BASE_URL="${IRANROUTER_BASE_URL:-https://iranrouter.net/api/v1}"

curl -sS "${BASE_URL}/images/generations" \
  -H "Authorization: Bearer ${IRANROUTER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/gpt-image-2.5-sunburst",
    "prompt": "a teal fox in the desert at dusk",
    "size": "1024x1024"
  }' | python3 -m json.tool
