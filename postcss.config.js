module.exports = {
  plugins: [
    ['autoprefixer'],
    [
      'postcss-preset-env',
      {
        // Options
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
    ],
  ],
};
