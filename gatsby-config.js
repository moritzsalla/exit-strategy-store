const dotenv = require("dotenv").config()

// if (process.env.NODE_ENV !== "production") {
//   dotenv.config()
// }

module.exports = {
  siteMetadata: {
    title: `Exit Strategy`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOPIFY_STORE_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2019-07",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop", "content"],
      },
    },
  ],
}
