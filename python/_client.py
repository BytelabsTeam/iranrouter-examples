"""کلاینت مشترک برای نمونه‌های پایتون."""

from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / ".env")

DEFAULT_BASE_URL = "https://iranrouter.net/api/v1"


def get_client() -> OpenAI:
    api_key = os.getenv("IRANROUTER_API_KEY")
    if not api_key:
        raise SystemExit(
            "IRANROUTER_API_KEY ست نیست. "
            "از https://iranrouter.net/dashboard/keys کلید بگیرید."
        )

    base_url = os.getenv("IRANROUTER_BASE_URL", DEFAULT_BASE_URL).rstrip("/")
    return OpenAI(api_key=api_key, base_url=base_url)
