import fs from "fs"
import path from "path"
import ExtractTextPlugin from "extract-text-webpack-plugin"

/*
 * Common configuration
 */
const webpackConfig = {

  context: __dirname,

  devtool: "source-map"

}

/*
 * Client configuration
 */
const baseCSSLoader = "css?sourceMap"
const cssModulesLoader = [
  baseCSSLoader,
  "modules",
  "importLoaders=1",
  "localIdentName=[name]__[local]___[hash:base64:5]"
].join("&")
const globalStyles = [
  path.resolve(__dirname, "src/styles/global.scss")
]
export const clientConfig = Object.assign({}, webpackConfig, {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js'
  },

  module: {

    loaders: [

      // JS loader
      {
        test: /\.jsx?$/,
        loader: "babel",
        query: {
          presets: ["es2015", "stage-2", "react"]
        }
      },

      // CSS loader
      {
        test: /\.scss$/,
        include: globalStyles,
        // Do not enable css modules on global styles
        loader: ExtractTextPlugin.extract("style", [baseCSSLoader, "sass?sourceMap"])
      },
      {
        test: /\.scss$/,
        exclude: globalStyles,
        loader: ExtractTextPlugin.extract("style", [cssModulesLoader, "sass?sourceMap"])
      },

      // Assets
      {
        test: /\.(png|xml|ico|json|svg)$/,
        include: [
          path.resolve(__dirname, "src/assets")
        ],
        loader: "file?name=[name].[ext]"
      }

    ]

  },

  plugins: [
    new ExtractTextPlugin("style.css")
  ]

})


/*
 * Server configuration
 */
const nodeModules = {}
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => nodeModules[mod] = 'commonjs ' + mod)
export const serverConfig = Object.assign({}, webpackConfig, {

  target: "node",

  entry: './server/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  module: {

    loaders: [

      // JS loader
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      }

    ]

  },

  node: {
    __dirname: true
  },

  externals: nodeModules

})

export const statOptions = {
  colors: true,
  cached: false
}

export default [serverConfig, clientConfig]
