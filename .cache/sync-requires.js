const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/moritzsalla/Documents/GitHub/exitStrategyStore/src/pages/404.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/moritzsalla/Documents/GitHub/exitStrategyStore/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/moritzsalla/Documents/GitHub/exitStrategyStore/src/pages/index.js"))),
  "component---src-pages-overview-js": hot(preferDefault(require("/Users/moritzsalla/Documents/GitHub/exitStrategyStore/src/pages/overview.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/moritzsalla/Documents/GitHub/exitStrategyStore/src/templates/post.js")))
}

