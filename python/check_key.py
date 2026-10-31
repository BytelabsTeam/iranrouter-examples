"""بررسی کلید و اعتبار — GET /key"""

import json
import os
from pathlib import Path

import httpx
from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / ".env")

api_key = os.getenv("IRANROUTER_API_KEY")
if not api_key:
    raise SystemExit("IRANROUTER_API_KEY ست نیست.")

base_url = os.getenv("IRANROUTER_BASE_URL", "https://iranrouter.net/api/v1").rstrip("/")

with httpx.Client(timeout=30.0) as http:
    r = http.get(f"{base_url}/key", headers={"Authorization": f"Bearer {api_key}"})
    r.raise_for_status()
    print(json.dumps(r.json(), ensure_ascii=False, indent=2))
