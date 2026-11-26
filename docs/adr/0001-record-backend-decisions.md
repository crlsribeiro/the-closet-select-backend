# 1. Record backend architecture decisions

- Status: Accepted
- Date: 2026-11-26

## Context
The product-wide decisions (AWS, region, GraphQL client, on-device look engine) are recorded in the iOS repository, ADRs 0006–0009.

## Decision
Backend-only decisions (data model, authorization rules, Lambda design, deployment) are recorded here as ADRs, numbered from 0001. Cross-cutting decisions stay in the iOS repository and are linked from this README.

## Consequences
Every PR that changes the backend architecture adds or updates an ADR in this repository.
