// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-gallery-js": () => import("./../src/pages/gallery.js" /* webpackChunkName: "component---src-pages-gallery-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-overview-js": () => import("./../src/pages/overview.js" /* webpackChunkName: "component---src-pages-overview-js" */),
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */)
}

