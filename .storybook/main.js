const path = require('path')

// your app's webpack.config.js
const custom = require('../webpack.common')

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        docs: false,
        // toolbar: false,
      }
    },
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          import: false
          // importLoaders: 1
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        }
      }
    },
    "@storybook/addon-links",
    "storybook-addon-grid/preset",
  ],

  babel: async (options) => ({
    ...options,
    plugins: [
      "const-enum",
      "@babel/plugin-transform-typescript",
      ...options.plugins
    ],
  }),

  webpackFinal: async (config) => {
    // modify some Storybook Webpack rules
    config.module.rules = config.module.rules.map((rule) => {
      // remove .svg from Storybook Webpack rules
      if (rule.test && rule.test.toString().includes('svg')) {
        // const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
        return { ...rule, exclude: path.resolve(__dirname, '../src/assets/svg/icons'), }
      }

      return rule
    })


    return {
      ...config,
      entry: [
        ...config.entry,
        ...custom.entry,
      ],
      plugins: [
        ...config.plugins,
        ...custom.plugins,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...custom.resolve.alias,
        },
        modules: [
          ...custom.resolve.modules,
        ],
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...custom.module.rules,
        ]
      }
    }
  },
}
