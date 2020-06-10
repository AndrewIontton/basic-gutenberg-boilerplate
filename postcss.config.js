/* eslint-disable */
module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 0 }),
    require('cssnano'),
    require('postcss-focus'),
    require('postcss-pxtorem')({
      mediaQuery: true,
    }),
  ],
};
