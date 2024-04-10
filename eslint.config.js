import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  rules: {
    'react/display-name': 'off',
    'node/prefer-global/process': ['error', 'always'],
    'style/quote-props': ['error', 'as-needed'],
    'style/semi': ['error', 'always'],
    'style/brace-style': ['error', '1tbs'],
    'style/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
    'antfu/top-level-function': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
});
