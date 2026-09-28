#!/usr/bin/env bash
#MISE description="Run vitest in ci mode"
mise exec -- vitest --bail=1 --reporter=github-actions
