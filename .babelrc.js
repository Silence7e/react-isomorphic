module.exports = {
  presets: [
    [
      '@babel/preset-env',{
        useBuiltIns: 'usage',
        targets:{
          browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
          node: 'current',
        },
        // modules: false,
      }
    ],
    ['@babel/preset-react']
  ],
};