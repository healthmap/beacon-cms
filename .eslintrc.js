module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'google',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:json/recommended',
      'react-app',
      'prettier',
    ],
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['prettier', 'react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-new-object': 'error',
      'object-shorthand': 'error',
      'quote-props': ['error', 'as-needed'],
      'prefer-object-spread': 'error',
      'no-array-constructor': 'error',
      'require-jsdoc': 'off',
      'array-callback-return': 'error',
      'import/no-anonymous-default-export': ['error', { allowObject: true }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        alias: [
          ['~', './src'],
          ['utils', './utils'],
        ],
      },
      react: {
        version: 'detect',
      },
    },
    ignorePatterns: ['.cache', 'public', 'node_modules'],
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: 2018,
          sourceType: 'module',
          project: './tsconfig.json',
        },
        plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
        settings: {
          'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
          },
        },
      },
    ],
  };