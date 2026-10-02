#!/usr/bin/env bash
#MISE description="Dev mode"

set -euo pipefail

mise exec -- node src/main.ts "$@"
