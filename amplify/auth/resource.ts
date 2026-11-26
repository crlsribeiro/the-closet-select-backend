import { defineAuth } from '@aws-amplify/backend';

/**
 * Cognito user pool.
 * Sign in with Apple and Google are added after the Sign in with Apple spike (ADR 0006 checkpoint).
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
