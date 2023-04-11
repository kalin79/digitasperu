const path = require('path')
const { mergeWithRules } = require('webpack-merge')
const common = require('./webpack.common')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'replace'
      }
    }
  }
})(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
      chunkFilename: 'assets/styles/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'static/') },
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              implementation: require('postcss')
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ifdef-loader',
            options: {
              DEVELOPMENT: process.env.NODE_ENV === 'development',
              'ifdef-fill-with-blanks': true
            }
          }
        ]
      },
      {
        test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        exclude: path.resolve(__dirname, 'src/assets/svg/icons'),
        loader: 'file-loader',
        options: {
          esModule: false,
          // name: '[name].[ext]',
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath)
            if (/^src\/assets/.test(relativePath)) {
              return relativePath.replace(/^src\//, '')
            }

            return url
          }
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: '[name].[ext]',
          outputPath: (url, resourcePath, context) => {
            const relativePath = path.relative(context, resourcePath)
            if (/^src\/assets/.test(relativePath)) {
              return relativePath.replace(/^src\//, '')
            }

            return url
          }
        }
      },
    ]
  }
})
