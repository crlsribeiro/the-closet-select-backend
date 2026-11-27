import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules/', '.amplify/', 'dist/', 'coverage/', 'amplify_outputs*'] },
  js.configs.recommended,
  ...tseslint.configs.strict,
);
