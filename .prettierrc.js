module.exports = {
  printWidth: 140,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.html', '*.svg'],
      options: {
        parser:'html'
      }
    }
  ]
};
