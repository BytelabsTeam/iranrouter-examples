#!/usr/bin/env bash
# فهرست مدل‌ها
set -euo pipefail

: "${IRANROUTER_API_KEY:?IRANROUTER_API_KEY را ست کنید}"
BASE_URL="${IRANROUTER_BASE_URL:-https://iranrouter.net/api/v1}"

curl -sS "${BASE_URL}/models" \
  -H "Authorization: Bearer ${IRANROUTER_API_KEY}" \
  | python3 -m json.tool
