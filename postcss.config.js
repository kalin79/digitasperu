var sortMediaQueries = require('postcss-sort-media-queries');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-extend-rule'),
    require('postcss-simple-vars'),
    require('postcss-short-size'),
    require('postcss-short-spacing'),
    require('postcss-hexrgba'),
    require('postcss-encode-background-svgs'),
    require('postcss-plumber')({
      gridHeight: '0.5rem', // 8px
      baseline: ((1000 - 756 - -244) / (2 * 1000)), // (UnitsPerEm − hhea.Ascender − hhea.Descender) / (2 × UnitsPerEm)
      fontSize: 2, // 16px
      lineHeight: 3, // 24px
      leadingTop: 0,
      leadingBottom: 0,
    }),
    sortMediaQueries({ sort: 'desktop-first' }),
    require('autoprefixer'),
    require('cssnano')
  ]
}
