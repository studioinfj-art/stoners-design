#!/usr/bin/env python3
"""
Build a local HTML preview gallery for logo image files.

Usage:
    python3 build_preview.py <logo-directory> [--output preview.html]
"""

from __future__ import annotations

import argparse
import html
import re
from pathlib import Path


IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".svg"}


def natural_key(path: Path) -> list[object]:
    parts = re.split(r"(\d+)", path.stem.lower())
    return [int(part) if part.isdigit() else part for part in parts]


def discover_images(directory: Path) -> list[Path]:
    return sorted(
        [
            path
            for path in directory.iterdir()
            if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        ],
        key=natural_key,
    )


def card_for(path: Path, index: int) -> str:
    filename = html.escape(path.name)
    label = html.escape(path.stem)
    return f"""      <button class="logo-card" data-src="{filename}" data-name="{label}" onclick="showModal(this)" type="button">
        <img src="{filename}" alt="{label}" loading="lazy">
        <span>{index:02d}</span>
        <strong>{label}</strong>
      </button>"""


def build_html(images: list[Path], title: str) -> str:
    cards = "\n".join(card_for(path, index) for index, path in enumerate(images, start=1))
    if not cards:
        cards = '      <p class="empty">No logo image files found in this folder.</p>'

    safe_title = html.escape(title)
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{safe_title} Logo Preview</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      padding: 28px;
      background: #111;
      color: #f5f5f5;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }}
    header {{
      max-width: 1200px;
      margin: 0 auto 20px;
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 16px;
    }}
    h1 {{
      margin: 0;
      font-size: 24px;
      font-weight: 650;
      letter-spacing: 0;
    }}
    .meta {{
      color: #a3a3a3;
      font-size: 14px;
    }}
    .grid {{
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(156px, 1fr));
      gap: 14px;
    }}
    .logo-card {{
      min-height: 192px;
      border: 1px solid #2d2d2d;
      border-radius: 8px;
      padding: 12px;
      background: #fff;
      color: #1d1d1d;
      cursor: pointer;
      text-align: left;
      transition: transform 150ms ease, border-color 150ms ease;
    }}
    .logo-card:hover {{
      transform: translateY(-2px);
      border-color: #55c2ff;
    }}
    .logo-card.favorite {{
      outline: 3px solid #36d399;
      outline-offset: 0;
    }}
    .logo-card img {{
      width: 100%;
      aspect-ratio: 1 / 1;
      object-fit: contain;
      display: block;
      margin-bottom: 10px;
    }}
    .logo-card span {{
      display: inline-block;
      min-width: 28px;
      color: #666;
      font-size: 12px;
      font-weight: 700;
    }}
    .logo-card strong {{
      font-size: 12px;
      font-weight: 650;
      word-break: break-word;
    }}
    .empty {{
      grid-column: 1 / -1;
      color: #aaa;
    }}
    .modal {{
      display: none;
      position: fixed;
      inset: 0;
      z-index: 10;
      place-items: center;
      padding: 32px;
      background: rgba(0, 0, 0, 0.88);
    }}
    .modal.active {{ display: grid; }}
    .modal-inner {{
      max-width: min(760px, 92vw);
      color: #fff;
      text-align: center;
    }}
    .modal img {{
      width: min(620px, 86vw);
      max-height: 70vh;
      object-fit: contain;
      border-radius: 10px;
      padding: 28px;
      background: #fff;
    }}
    .modal p {{
      margin: 14px 0 0;
      color: #d4d4d4;
      font-size: 14px;
    }}
  </style>
</head>
<body>
  <header>
    <div>
      <h1>{safe_title} Logo Preview</h1>
      <div class="meta">{len(images)} file(s). Click a logo to enlarge. Press F while enlarged to mark a favorite.</div>
    </div>
  </header>
  <main class="grid">
{cards}
  </main>
  <div class="modal" id="modal" onclick="if (event.target === this) closeModal()">
    <div class="modal-inner">
      <img id="modal-image" alt="">
      <p id="modal-name"></p>
    </div>
  </div>
  <script>
    let currentCard = null;
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");

    function showModal(card) {{
      currentCard = card;
      modalImage.src = card.dataset.src;
      modalImage.alt = card.dataset.name;
      modalName.textContent = card.dataset.name;
      modal.classList.add("active");
    }}

    function closeModal() {{
      modal.classList.remove("active");
    }}

    document.addEventListener("keydown", (event) => {{
      if (event.key === "Escape") closeModal();
      if (event.key.toLowerCase() === "f" && currentCard) {{
        currentCard.classList.toggle("favorite");
      }}
    }});
  </script>
</body>
</html>
"""


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path, help="Directory containing logo image files")
    parser.add_argument("--output", default="preview.html", help="Output HTML filename")
    args = parser.parse_args()

    directory = args.directory.expanduser().resolve()
    if not directory.exists() or not directory.is_dir():
        raise SystemExit(f"Directory not found: {directory}")

    images = discover_images(directory)
    output_path = directory / args.output
    output_path.write_text(build_html(images, directory.name), encoding="utf-8")
    print(f"Wrote {output_path} with {len(images)} image file(s).")


if __name__ == "__main__":
    main()
