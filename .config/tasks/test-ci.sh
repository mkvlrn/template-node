#!/usr/bin/env bash
#MISE description="Run vitest in ci mode"

set -euo pipefail

mise exec -- vitest --bail=1 --reporter=github-actions
