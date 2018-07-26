const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const loader = require('./loader');
const plugin = require('./plugin');

const adminBrowserFilePath = path.resolve(__dirname, '../client/bootstrap/browser/startup');
const browserBuildPath = path.resolve(__dirname, '../../dist/');

const config = (() => {
  if (baseConfig.mode === 'development') {
    return webpackMerge(baseConfig, {
      entry: {
        app: ['react-hot-loader/patch', adminBrowserFilePath],
      },
      output: {
        filename: '[name].[hash:5].js',
        chunkFilename: '[name].[chunkhash:8].js',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, '../client'), 'node_modules'],
      },
      devtool: '#cheap-module-eval-source-map',
      devServer: {
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.resolve(__dirname, '../../dist'),
        hot: true,
        overlay: {
          errors: true,
        },
        publicPath: '/',
        historyApiFallback: {
          index: '/index.html',
        },
        proxy: {
          '/api': 'http://47.100.253.64/',
        },
      },
      module: {
        rules: [
          loader.eslint(),
          loader.jsx(),
          loader.file(),
        ],
      },
      plugins: [
        plugin.contextRep(),
        plugin.html(),
        plugin.hmr(),
        plugin.nameModules(),
      ],
    });
  }
  return webpackMerge(baseConfig, {
    mode: process.env.NODE_ENV,
    name: 'browser',
    entry: {
      admin: adminBrowserFilePath,
      vendor: ['react', 'react-dom'],
    },
    optimization: {
      minimizer: [
        plugin.uglify(),
      ],
    },
    output: {
      path: browserBuildPath,
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].js',
      publicPath: '/',
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: [path.resolve(__dirname, '../client'), 'node_modules'],
    },
    module: {
      rules: [
        loader.eslint(),
        loader.jsx(),
        loader.file(),
      ],
    },
    plugins: [
      plugin.contextRep(),
      plugin.html({
        template: `!!ejs-compiled-loader!${path.resolve(__dirname, '../client/server.template.ejs')}`,
        filename: 'server.ejs',
      }),
      plugin.inlineManifest(),
      plugin.nameModules(),
      plugin.nameAllModules(),
      plugin.namedChunks(),
      plugin.clean(['dist/'], {
        root: path.resolve(__dirname, '../../'),
        verbose: true,
        dry: false,
      }),
    ],
  });
})();


module.exports = config;
