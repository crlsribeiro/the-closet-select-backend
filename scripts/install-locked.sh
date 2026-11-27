#!/usr/bin/env bash
# Installs dependencies exactly as recorded in package-lock.json and fails if npm wants to change it.
#
# Why not `npm ci`: with the current Amplify Gen 2 packages, npm rejects even freshly generated
# lockfiles (bundled @aws-amplify/plugin-types pulls versions npm cannot record). Verified with
# npm 10, 11 and 12 and with a project created by `npm create amplify`. Switch back to `npm ci`
# once `scripts/tests` confirms it works again.
set -euo pipefail

npm install --ignore-scripts --no-audit --no-fund
if ! git diff --quiet -- package-lock.json; then
    echo "error: package-lock.json is out of date. Run 'npm install' locally and commit the lockfile." >&2
    git --no-pager diff --stat -- package-lock.json >&2
    exit 1
fi
echo "Dependencies installed from the committed lockfile."
