#!/usr/bin/env bash
# One-command setup for a new machine: tools at the versions this project uses, then dependencies.
set -euo pipefail

brew bundle --file=Brewfile
mise install
if [ -f package-lock.json ]; then
    mise exec -- ./scripts/install-locked.sh
fi

echo "Ready. Node $(mise exec -- node -v), $(aws --version)"
