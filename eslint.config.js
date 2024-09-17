import globals from 'globals';
import javascript from '@eslint/js';
import typescript from 'typescript-eslint';
import vue from 'eslint-plugin-vue';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  ...vue.configs['flat/essential'],
  ...tailwindcss.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
