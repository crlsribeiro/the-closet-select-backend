## What
<!-- One or two sentences: what does this PR change? -->

## Why
<!-- Link the issue. Use "Fixes #123" for bugs or "Closes #123" for stories. -->
Fixes #

## How to test
1. `npm ci && npm test`
2. `npx ampx sandbox` (personal environment)

## Tests
- Unit tests written first (TDD):
- Authorization tests (user B cannot access user A's data):
- Regression test (bug fixes only):

## Definition of Done
- [ ] All checks are green
- [ ] Business rules written with TDD (`test:` commit before `feat:`)
- [ ] Bug fix: regression test that failed before the fix
- [ ] Schema change: iOS impact described (GraphQL contract)
- [ ] No secrets, no personal data in logs
- [ ] ADR added if the architecture changed
