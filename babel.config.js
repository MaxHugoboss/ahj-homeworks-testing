module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
        browsers: 'last 2 versions'
      },
      useBuiltIns: 'entry',
      corejs: 3
    }]
  ],
  plugins: [
    '@babel/plugin-syntax-nullish-coalescing-operator',
    '@babel/plugin-syntax-optional-chaining'
  ]
};
