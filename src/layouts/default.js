import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "reset-css"
import "./default.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://exitstrategies.store/" />
        <meta
          name="keywords"
          content="Forgetful, Number, KABK, Exit, Strategy, Photography"
        />
        <meta name="author" content="Exit Strategy" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        <title>Exit Strategies</title>
        <meta name="title" content="Exit Strategies" />
        <meta
          name="description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the 40 photography graduates at the Royal Academy of Art in The Hague."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://exitstrategies.store/" />
        <meta property="og:title" content="Exit Strategies" />
        <meta
          property="og:description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the 40 photography graduates at the Royal Academy of Art in The Hague."
        />
        <meta
          property="og:image"
          content="/Users/moritzsalla/Documents/GitHub/exitStrategyStore/static/images/social-media.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://exitstrategies.store/" />
        <meta property="twitter:title" content="Exit Strategies" />
        <meta
          property="twitter:description"
          content="Forgetful Number presents Exit Strategies: a photography collective composed of the 40 photography graduates at the Royal Academy of Art in The Hague."
        />
        <meta
          property="twitter:image"
          content="/Users/moritzsalla/Documents/GitHub/exitStrategyStore/static/images/social-media.jpg"
        ></meta>
      </Helmet>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
