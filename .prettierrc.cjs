// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  // `require.resolve` is needed for e.g. `pnpm`
  plugins: [require.resolve('@prettier/plugin-pug')],

  arrowParens: 'avoid',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 120,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  singleAttributePerLine: true,

  pugSingleQuote: false,
  // ... more pug* options
};
