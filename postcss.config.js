const purgecssPlugin = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

// Handle default export
const purgecss = purgecssPlugin.default || purgecssPlugin;

module.exports = {
  plugins: [
    purgecss({
      content: [
        './_site/**/*.html',
        './src/**/*.njk',
        './src/**/*.html',
        './src/**/*.js'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [
        /^swiper-/,
        /^swiper/,
        /^col-/,
        /^row/,
        /^container/,
        /^btn/,
        /^card/,
        /^nav/,
        /^navbar/,
        /^d-flex/,
        /^justify-content/,
        /^align-items/,
        /^mb-/,
        /^mt-/,
        /^p-/,
        /^px-/,
        /^py-/,
        /^text-/,
        /^bg-/,
        /^g-/,
        /^h-/,
        /^w-/,
        /^me-/,
        /^ms-/,
        /^fa/,
        /^fab/,
        /^fas/,
        /^far/,
        /^fal/,
        /active/,
        /hover/,
        /focus/,
        /^category-/,
        /^furn-/,
        /^custom-/,
        /^md-/,
        /^hero-/,
        /^contact-/,
        /^product-/,
        /^package-/,
        /^project-/,
        /^review-/,
        /^showcase-/,
        /^info-/,
        /^stats-/,
        /^grid-/,
        /^item-/,
        /^bg-layer/,
        /^bg1/,
        /^bg2/,
        /^arrow-btn/,
        /^social-/,
        /^learn-more/,
        /^circle/,
        /^brand/,
        /^top-row/,
        /^left-section/,
        /^right-section/,
        /^touch-section/,
        /^services-hero/,
        /^process-sections/,
        /^contact-hero/,
        /^section-form/,
        /^section-location/
      ]
    }),
    cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    })
  ]
};
