import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'triple-slash-reference': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true, // Разрешить конструкции типа `a && b()`
          allowTernary: true, // Разрешить тернарные операторы
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
]

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:prettier/recommended',
//   ],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: ['.eslintrc.{js,cjs}'],
//       parserOptions: {
//         sourceType: 'script',
//       },
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react'],
//   rules: {
//     'prettier/prettier': [
//       'warn',
//       {
//         endOfLine: 'auto',
//       },
//     ],
//   },
// }
