const path = require('path')

const webpack = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('dotenv-flow').config()

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: [
    './src/main.js'
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    filename: 'assets/scripts/[name].js',
    chunkFilename: 'assets/scripts/[name].js',
    publicPath: ASSET_PATH,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.GOOGLE_MAPS_API_KEY),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new SpriteLoaderPlugin({ plainSprite: true }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Components': path.resolve(__dirname, 'src/components'),
    },
    modules: [
      // tell webpack to look into 'scripts/vendors' folder as well
      path.resolve(__dirname, 'src/assets/scripts/vendors'),
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/svg/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: svgPath => `${path.basename(path.dirname(svgPath))}.svg`,
              outputPath: 'assets/svg/',
              publicPath: ASSET_PATH + 'assets/svg/',
            }
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.twig$/i,
        use: {
          loader: 'twigjs-loader',
          options: {}
        }
      },
      {
        test: /\.(vert|frag|glsl)$/i,
        use: 'nanogl-template/lib/compiler'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ],
                '@babel/preset-typescript',
              ],
              plugins: [
                'const-enum',
                '@babel/plugin-transform-typescript'
              ]
            }
          }
        ]
      },
    ]
  }
}
