module.exports = {
  extends : 'airbnb',
  parser : 'babel-eslint',
  env : {
    browser : true,
    es6 : true,
    node : true,
    jest : true
  },
  parserOptions : {
    ecmaVersion : 6,
    sourceType : 'module',
    allowImportExportEverywhere : true
  },
  plugins : [
    'react'
  ],
  rules : {
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'object-curly-newline': [0],
    'no-unused-expressions': [2, { allowShortCircuit : true }],
    'no-return-await': [0],
    'react/jsx-filename-extension': [0],
    'import/no-named-as-default': [0],
    'import/no-named-as-default-member': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'react/require-default-props': [0],
    'react/forbid-prop-object': [0],
    'react/forbid-prop-types': [0],
    'react/no-danger': [0]
  }
};