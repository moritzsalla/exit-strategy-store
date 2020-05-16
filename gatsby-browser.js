const React = require("react")

const { ShopifyProvider } = require("./src/components/shopifyProvider")

exports.wrapRootElement = ({ element }) => {
  return <ShopifyProvider>{element}</ShopifyProvider>
}
