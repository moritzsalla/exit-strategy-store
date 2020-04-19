const dotenv = require("dotenv").config()

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }

module.exports = {
  siteMetadata: {
    title: `Exit Strategy`,
    description: `We are Forgetful Number, a collective of 38 photography students of the Royal Academy of Art, The Hague.`,
    author: `@exitstrategy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-04",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop", "content"],
      },
    },
  ],
}
