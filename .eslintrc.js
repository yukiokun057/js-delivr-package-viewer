module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'prettier',
    'prettier/vue',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    'no-cond-assign': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'warn',
  },
};
