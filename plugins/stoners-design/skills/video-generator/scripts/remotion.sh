#!/usr/bin/env bash
set -euo pipefail

CMD="${1:-help}"
if [ "$#" -gt 0 ]; then
  shift
fi

case "$CMD" in
  init)
    PROJECT_NAME="${1:?Usage: remotion.sh init <project-name>}"
    mkdir -p output
    cd output
    npx --yes create-video@latest --blank --tailwind --no-skills "$PROJECT_NAME" || {
      echo "Trying interactive Remotion scaffold fallback..."
      printf "blank\ny\nn\n" | npx --yes create-video@latest "$PROJECT_NAME"
    }
    cd "$PROJECT_NAME"
    npm install
    npm install lucide-react
    npm pkg set scripts.dev="npx remotion studio"
    npm pkg set scripts.build="npx remotion bundle"
    echo "Created Remotion project at output/$PROJECT_NAME"
    ;;

  render)
    PROJECT_DIR="${1:?Usage: remotion.sh render <project-dir> [composition] [output] [flags...]}"
    shift
    cd "$PROJECT_DIR"
    npx remotion render "$@"
    ;;

  still)
    PROJECT_DIR="${1:?Usage: remotion.sh still <project-dir> [composition] [output] [flags...]}"
    shift
    cd "$PROJECT_DIR"
    npx remotion still "$@"
    ;;

  preview)
    PROJECT_DIR="${1:?Usage: remotion.sh preview <project-dir>}"
    cd "$PROJECT_DIR"
    npm run dev
    ;;

  list)
    PROJECT_DIR="${1:?Usage: remotion.sh list <project-dir>}"
    cd "$PROJECT_DIR"
    npx remotion compositions
    ;;

  upgrade)
    PROJECT_DIR="${1:?Usage: remotion.sh upgrade <project-dir>}"
    cd "$PROJECT_DIR"
    npx remotion upgrade
    ;;

  help|*)
    echo "remotion.sh - Remotion video toolkit"
    echo
    echo "Commands:"
    echo "  init <name>                    Scaffold new project in ./output"
    echo "  render <dir> [comp] [out]      Render video"
    echo "  still <dir> [comp] [out]       Render one still frame"
    echo "  preview <dir>                  Start Remotion Studio"
    echo "  list <dir>                     List compositions"
    echo "  upgrade <dir>                  Upgrade Remotion packages"
    ;;
esac
