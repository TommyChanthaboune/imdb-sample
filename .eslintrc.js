module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    // I would turn this on if this was a library that could be used in other non-typescript applications to validate props at run time
    // Since this is self-contained app, I trust the compilier to validate props at compile time
    'react/prop-types': 'off'
  },
  ignorePatterns: ['/*.*'],
  parserOptions: {
    project: './tsconfig.json'
  }
};
