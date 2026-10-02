#!/usr/bin/env bash
#MISE description="Run vitest"

set -euo pipefail

mise exec -- vitest --coverage
