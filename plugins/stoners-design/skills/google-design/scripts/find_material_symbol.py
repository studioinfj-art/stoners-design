#!/usr/bin/env python3
"""Search the bundled Material Symbols codepoint index."""

from __future__ import annotations

import argparse
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CODEPOINTS = ROOT / "assets" / "material-symbols" / "material-symbols.codepoints"


def load_symbols() -> list[tuple[str, str]]:
    symbols: list[tuple[str, str]] = []
    for line in CODEPOINTS.read_text(encoding="utf-8").splitlines():
        parts = line.strip().split()
        if len(parts) == 2:
            symbols.append((parts[0], parts[1]))
    return symbols


def main() -> int:
    parser = argparse.ArgumentParser(description="Find Material Symbols by name.")
    parser.add_argument("query", help="Substring to search, for example 'arrow' or 'settings'.")
    parser.add_argument("--limit", type=int, default=25, help="Maximum matches to print.")
    args = parser.parse_args()

    query = args.query.lower().replace("-", "_").replace(" ", "_")
    matches = [(name, codepoint) for name, codepoint in load_symbols() if query in name.lower()]

    for name, codepoint in matches[: args.limit]:
        print(f"{name} U+{codepoint.upper()}")

    if len(matches) > args.limit:
        print(f"... {len(matches) - args.limit} more")

    return 0 if matches else 1


if __name__ == "__main__":
    raise SystemExit(main())
