const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Exit Strategies`,
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
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-transition-link`,
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
        name: `exit-strategies-print-sale`,
        short_name: `exitstrategies`,
        start_url: `/`,
        background_color: `#F5F6F7`,
        theme_color: `#e86228`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-04",
        includeCollections: ["shop", "content"],
        verbose: true,
      },
    },
  ],
}
