#!/usr/bin/env bash
set -euo pipefail

STATE_DIR="${XDG_STATE_HOME:-$HOME/.local/state}/codex-video-generator"
mkdir -p "$STATE_DIR"

usage() {
  echo "Usage: tunnel.sh <start|status|stop|list> [port]" >&2
}

require_cloudflared() {
  if ! command -v cloudflared >/dev/null 2>&1; then
    echo "Error: cloudflared is not installed. Install Cloudflare Tunnel to expose a public preview URL." >&2
    exit 1
  fi
}

command_name="${1:-}"
port="${2:-3000}"

case "$command_name" in
  start)
    require_cloudflared
    log_file="$STATE_DIR/tunnel-$port.log"
    pid_file="$STATE_DIR/tunnel-$port.pid"
    if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" >/dev/null 2>&1; then
      echo "Tunnel already running for port $port"
      grep -Eo "https://[^ ]+\\.trycloudflare\\.com" "$log_file" | tail -1 || true
      exit 0
    fi
    cloudflared tunnel --url "http://localhost:$port" >"$log_file" 2>&1 &
    echo "$!" >"$pid_file"
    for _ in $(seq 1 30); do
      public_url="$(grep -Eo "https://[^ ]+\\.trycloudflare\\.com" "$log_file" | tail -1 || true)"
      if [ -n "$public_url" ]; then
        echo "$public_url"
        exit 0
      fi
      sleep 1
    done
    echo "Tunnel started, but no public URL was found yet. Check $log_file" >&2
    exit 1
    ;;

  status)
    pid_file="$STATE_DIR/tunnel-$port.pid"
    log_file="$STATE_DIR/tunnel-$port.log"
    if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" >/dev/null 2>&1; then
      echo "Tunnel running for port $port"
      grep -Eo "https://[^ ]+\\.trycloudflare\\.com" "$log_file" | tail -1 || true
    else
      echo "No tunnel running for port $port"
      exit 1
    fi
    ;;

  stop)
    pid_file="$STATE_DIR/tunnel-$port.pid"
    if [ -f "$pid_file" ] && kill -0 "$(cat "$pid_file")" >/dev/null 2>&1; then
      kill "$(cat "$pid_file")"
      rm -f "$pid_file"
      echo "Stopped tunnel for port $port"
    else
      echo "No tunnel running for port $port"
    fi
    ;;

  list)
    find "$STATE_DIR" -name "tunnel-*.pid" -print
    ;;

  *)
    usage
    exit 2
    ;;
esac
