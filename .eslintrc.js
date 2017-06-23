const path = require('path')

module.exports = {
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    env: {
      browser: true,
    },
    plugins: [
        'html',
        'import'
    ],
    settings: {
      'html/report-bad-indent': 2,
      'import/resolver': {
        webpack: {
          config: path.resolve(__dirname, 'webpack.config.base.js')
        }
      },
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'semi': [2, 'never'],
        'no-return-assign': 0,
        'no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'arrow-body-style': 0,
        'no-param-reassign': 0,
        'prefer-arrow-callback': 2,
        'radix': 0,
        'func-names': 0,
        'camelcase': 0,
        'vars-on-top': 0,
        'max-len': [2, 150],
        'import/extensions': [2, {
          'js': 'never',
          'vue': 'never'
        }],
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'no-shadow': 0
    }
}
