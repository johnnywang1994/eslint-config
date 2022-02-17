const config = require('./config')

module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', config],
  },
}
