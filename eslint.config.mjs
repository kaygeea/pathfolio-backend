// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'prettier/prettier': [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      semi: "error",
      
      "prefer-promise-reject-errors": "error",
      "no-throw-literal": "error",
      "no-param-reassign": "warn",
      "no-empty-function": "warn",
      "no-unused-vars": ["off", { argsIgnorePattern: "^_" }],
      "no-else-return": "error",
      "func-names": ["error", "as-needed"],
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "func-name-matching": "warn",
      "dot-notation": ["error", { allowPattern: "^[a-z]+(_[a-z]+)+$" }],
      eqeqeq: "error",
      curly: "error",
      "no-unreachable": "error",
      "no-duplicate-imports": "error",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
);