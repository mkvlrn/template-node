#!/bin/bash
set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT="$(basename "$ROOT")"
CONTAINER="devcontainer-$PROJECT"
RECREATE=false
DEVCONTAINER_ARGS=()
WORKSPACE_FOLDER="$(
    devcontainer read-configuration --workspace-folder "$ROOT" |
        grep '"workspaceFolder"' |
        sed 's/.*"workspaceFolder"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/'
)"

for arg in "$@"; do
    case "$arg" in
    --recreate) RECREATE=true ;;
    esac
done

if [[ "$RECREATE" == true ]]; then
    DEVCONTAINER_ARGS+=(--remove-existing-container)
    echo "🔄 Recreating dev container..."
elif docker container inspect "$CONTAINER" >/dev/null 2>&1; then
    echo "▶️ Starting existing dev container..."
else
    echo "🚀 Creating dev container..."
fi

devcontainer up \
    --workspace-folder "$ROOT" \
    "${DEVCONTAINER_ARGS[@]}" 2>/dev/null

exec docker exec -it \
    --user dev \
    -w "$WORKSPACE_FOLDER" \
    "$CONTAINER" \
    fish
