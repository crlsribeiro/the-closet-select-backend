import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';

/**
 * Backend entry point. Resources are added feature by feature:
 * auth (this PR) → data (GraphQL + DynamoDB) → storage (photos) → functions (daily color, descriptions).
 */
defineBackend({
  auth,
});
