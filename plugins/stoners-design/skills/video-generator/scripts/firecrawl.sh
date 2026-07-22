#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: firecrawl.sh <url>" >&2
}

load_env() {
  local env_file="$1"
  if [ -f "$env_file" ]; then
    set -a
    # shellcheck disable=SC1090
    source "$env_file"
    set +a
  fi
}

URL="${1:-}"
if [ -z "$URL" ]; then
  usage
  exit 2
fi

load_env "$PWD/.env"
load_env "$HOME/.codex/.env"

if [ -z "${FIRECRAWL_API_KEY:-}" ]; then
  echo "Error: FIRECRAWL_API_KEY not set. Add it to the shell environment or .env in the current workspace." >&2
  exit 1
fi

curl -sS -X POST "https://api.firecrawl.dev/v1/scrape" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${FIRECRAWL_API_KEY}" \
  -d "$(cat <<EOF
{
  "url": "$URL",
  "formats": ["markdown", "extract", "screenshot"],
  "extract": {
    "schema": {
      "type": "object",
      "properties": {
        "brandName": {"type": "string"},
        "tagline": {"type": "string"},
        "headline": {"type": "string"},
        "description": {"type": "string"},
        "features": {"type": "array", "items": {"type": "string"}},
        "logoUrl": {"type": "string"},
        "faviconUrl": {"type": "string"},
        "primaryColors": {"type": "array", "items": {"type": "string"}},
        "ctaText": {"type": "string"},
        "socialLinks": {"type": "object"}
      }
    }
  }
}
EOF
)"
