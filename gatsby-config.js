const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Exit Strategy`,
    siteUrl: `https://exitstrategies.store`,
    description: `We are Forgetful Number, a collective of 38 photography students of the Royal Academy of Art, The Hague.`,
    author: `@forgetfulnumber`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://exitstrategies.store",
        sitemap: "https://exitstrategies.store/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116740197-2",
      },
    },
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
        // shopName: process.env.SHOP_NAME,
        // accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        shopName: "exit-strategy-print-sale",
        accessToken: "2ec6c4ead91caa561ec8cb053c9941b5",
        apiVersion: "2020-04",
        includeCollections: ["shop", "content"],
        verbose: true,
      },
    },
  ],
}
