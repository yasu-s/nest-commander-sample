module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 120,
        'tabWidth': 2,
        'useTabs': false,
        'semi': true,
        'singleQuote': true,
        'trailingComma': 'all',
        'bracketSpacing': true,
        'arrowParens': 'always'
      }
    ],
    'eqeqeq': 'error',
    'prefer-template': 'error',
    'complexity': ['warn', 10],
    'max-depth': ['warn', 3],
    'max-statements': ['warn', 30],
    'max-lines': ['warn'],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-warning-comments': ['warn', { 'terms': ['todo', 'fixme', 'hack'], 'location': 'anywhere' }],
    'implicit-arrow-linebreak': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'func-names': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'declaration'],
    '@typescript-eslint/array-type': ['error'],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/consistent-type-imports': ['error', { 'prefer': 'no-type-imports' }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { 'accessibility': 'no-public' }],
    '@typescript-eslint/member-ordering': ['error'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-dynamic-delete': ['error'],
    '@typescript-eslint/no-empty-interface': ['error', {'allowSingleExtends': true }],
    '@typescript-eslint/no-explicit-any': ['error', { 'fixToUnknown': true, 'ignoreRestArgs': false }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-for-of': ['error'],
    '@typescript-eslint/prefer-function-type': ['error'],
    '@typescript-eslint/prefer-includes': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],
    '@typescript-eslint/prefer-optional-chain': ['error'],
    '@typescript-eslint/prefer-readonly': ['error'],
    '@typescript-eslint/naming-convention': [
      'warn',
      { 'selector': 'variableLike', 'format': ['camelCase'] },
      { 'selector': 'method', 'format': ['camelCase'] },
      { 'selector': 'typeLike', 'format': ['PascalCase'] },
      { 'selector': 'parameter', 'format': ['camelCase'] }
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': [
          {
            'pattern': '@app/**',
            'group': 'internal'
          },
        ],
        'pathGroupsExcludedImportTypes': ['@app'],
        'alphabetize': { 'order': 'asc' }
      }
    ],
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error'
  },
};
