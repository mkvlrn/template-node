#!/usr/bin/env bash
#MISE description="Sync package manager deps"

set -euo pipefail

mise install
mise prune -y
mise exec -- pnpm install --frozen-lockfile
