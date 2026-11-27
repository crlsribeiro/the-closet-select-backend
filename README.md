# The Closet Select · Backend

> AWS backend for [The Closet Select iOS](https://github.com/crlsribeiro/the-closet-select-ios), defined as code with **Amplify Gen 2**.

![AWS](https://img.shields.io/badge/AWS-Amplify%20Gen%202-FF9900?logo=amazonaws&logoColor=white)
![GraphQL](https://img.shields.io/badge/API-GraphQL%20(AppSync)-E10098?logo=graphql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-Sprint%200-D4AF37)

## Architecture

```
iPhone ── Apollo iOS (GraphQL) ──▶ AppSync ──▶ DynamoDB (owner-scoped)
   │                                  └──▶ Lambda (daily color, look descriptions, account deletion/export)
   ├── Amplify Auth ───────────────▶ Cognito (e-mail, Apple, Google)
   └── Amplify Storage ────────────▶ S3 (private, pre-signed URLs)
EventBridge Scheduler ──▶ Lambda ──▶ DailyColor (12 signs per day)
```

| Concern | Service |
|---|---|
| Authentication | Amazon Cognito: e-mail/password, Sign in with Apple, Google |
| API | AWS AppSync: a single GraphQL API |
| Data | Amazon DynamoDB, every record owned by one user |
| Photos | Amazon S3, private bucket, per-user prefix |
| Daily job | Amazon EventBridge Scheduler → AWS Lambda |
| Secrets | SSM Parameter Store via Amplify `secret()` |
| Region | `us-east-1` (Brazil, United States and Europe) |

The look engine, the 30-day report and the morning notification run **on the iPhone**. The backend stores data, keeps third-party keys away from the app and runs scheduled jobs.

Architecture decisions live in the iOS repository: [ADRs 0006–0009](https://github.com/crlsribeiro/the-closet-select-ios/tree/develop/docs/adr). Backend-only decisions live in [`docs/adr`](docs/adr).

## Environments

| Environment | Branch | Deployed by |
|---|---|---|
| Personal sandbox | your machine | `npx ampx sandbox` |
| Dev | `develop` | CI |
| QA | `qa` | CI, with approval |
| Production | `main` | CI, with approval |

No one deploys shared environments from a laptop. CI reaches AWS through GitHub OIDC, with no long-lived keys.

## Getting started

```bash
./scripts/bootstrap.sh
```

The script installs the tools from the `Brewfile`, the Node version from `mise.toml` / `.nvmrc`, and the npm dependencies.

## Quality

Every pull request runs: Conventional PR title, secrets scan and repository regression tests. It also runs type check, lint and unit tests; authorization tests (user B can never read user A's data) arrive with the data model.

## License

© 2026 Carlos Ribeiro. **All rights reserved.** The source code is public for portfolio purposes; no license is granted to copy, modify or distribute it.
