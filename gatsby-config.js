const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Exit Strategy`,
    siteUrl: `https://exitstrategies.store`,
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_ID,
      },
    },
    // {
    //   resolve: "gatsby-plugin-sentry",
    //   options: {
    //     dsn: process.env.SENTRY_DSN_URL,
    //     // environment: process.env.NODE_ENV,
    //     enabled: (() =>
    //       ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "exit-strategy-print-sale",
        accessToken: "2ec6c4ead91caa561ec8cb053c9941b5",
        apiVersion: "2020-04",
        verbose: true,
        paginationSize: 250,
        includeCollections: ["shop", "content"],
      },
    },
  ],
}
