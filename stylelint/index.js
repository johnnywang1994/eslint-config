const config = require('../prettier/config')

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': true,
    'function-name-case': null,
    'prettier/prettier': [true, { ...config, severity: 'warning' }],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['global', 'v-deep'],
      },
    ],
  },
};