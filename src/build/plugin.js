
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');// eslint-disable-line
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');// eslint-disable-line
const NameAllModulesPlugin = require('name-all-modules-plugin'); // eslint-disable-line

const { resolve } = path;

// 这里将 Node 中使用的变量也传入到 Web 环境中，以方便使用
exports.define = () => new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV === 'development' ? 'development' : 'production'),
  },
});

// 启用HMR
exports.hmr = () => new webpack.HotModuleReplacementPlugin();

// hash
exports.hash = () => new webpack.HashedModuleIdsPlugin();

// Merge chunks
exports.merge = () => new webpack.optimize.AggressiveMergingPlugin();

// 将manifest内联到html中，避免多发一次请求
exports.inlineManifest = () => new InlineManifestWebpackPlugin();

// 模块依赖分析
exports.analyzer = (opt = {}) => new BundleAnalyzerPlugin({
  openAnalyzer: true,
  analyzerMode: 'static', // server, static
  reportFilename: opt.filename || 'report.html',
});

const htmlDefaults = {
  template: resolve(__dirname, '../client/template.html'),
  favicon: resolve(__dirname, '../client/assets/favicon.ico'),
};

exports.html = (opt = {}) => new HtmlWebpackPlugin(Object.assign({}, htmlDefaults, opt));

// 代码压缩插件
exports.uglify = () => new UglifyjsWebpackPlugin({
  exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
  cache: true,
  parallel: true, // 开启并行压缩，充分利用cpu
  sourceMap: false,
  extractComments: false, // 移除注释
  uglifyOptions: {
    compress: {
      unused: true,
      warnings: false,
      drop_debugger: true,
    },
    output: {
      comments: false,
    },
  },
});


exports.nameAllModules = () => new NameAllModulesPlugin();

exports.nameModules = () => new webpack.NamedModulesPlugin();

exports.contextRep = () => new webpack.ContextReplacementPlugin(
  /moment[\\/]locale$/,
  /^\.\/(zh-cn)$/,
);

exports.namedChunks = () => new webpack.NamedChunksPlugin((chunk) => {
  if (chunk.name) {
    return chunk.name;
  }
  return Array.from(m => path.relative(m.context, m.request)).join('-');
});


exports.clean = (...cleanPath) => new CleanWebpackPlugin(...cleanPath);
