const path = require('path');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    ignorePatterns: ['.eslintrc.js', 'webpack.config.js', 'index.d.ts'],
    overrides: [
        {
            files: [
                'src/**/*.stories.mdx',
                'src/**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)',
            ],
            rules: {
                'import/no-anonymous-default-export': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'prettier',
        'file-extension-in-import-ts',
    ],
    rules: {
        'file-extension-in-import-ts/file-extension-in-import-ts': 'none',
        'no-extra-boolean-cast': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'no-underscore-dangle': 0,
        'react/no-unescaped-entities': 0,
        'import/no-unresolved': 0,
        camelcase: 0,
        'react/no-array-index-key': 0,
        'consistent-return': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': 0,
        'linebreak-style': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-console': 0,
        radix: 0,
        'react/function-component-definition': [
            2,
            { namedComponents: ['arrow-function', 'function-declaration'] },
        ],
        'react/prop-types': [2, { ignore: ['children'] }],
    },
    settings: {
        settings: {
            'import/resolver': {
                jsconfig: {
                    config: 'tsconfig.json',
                    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    },
};
