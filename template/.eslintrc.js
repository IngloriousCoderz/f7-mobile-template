module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['standard', 'prettier'],
  // required to lint *.vue files
  plugins: ['prettier', 'html'],
  // add your custom rules here
  rules: {
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'space-before-function-paren': [2, 'never'],
    'no-unused-vars': 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {}
}
