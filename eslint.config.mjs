// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  ...compat.extends('next/core-web-vitals', 'plugin:import/recommended'),
  {
    ignores: [
      'eslint.config.mjs',
      'next.config.mjs',
      '*.module.css.d.ts',
      'node_modules/**/*.{ts,tsx,js}',
      '.next/**/*.{ts,tsx,js}',
    ],
  },
  { files: ['**/*.ts', '**/*.tsx'] },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/components/**',
              group: 'parent',
              position: 'before',
            },
            {
              pattern: '**/**.module.css',
              group: 'type',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
  },
);
