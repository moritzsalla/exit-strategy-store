import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import { Black, White, Orange } from "../components/variables"

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-Regular-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Regular-WebXL.woff") format("woff");
  font-display: block;
  font-weight: 500;
}

@font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-Black-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Black-WebXL.woff") format("woff");
  font-display: block;
  font-weight: bold;
}

@font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-BlackItalic-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-BlackItalic-WebXL.woff") format("woff");
  font-display: block;
  font-weight: bold;
  font-style: italic, oblique;
}

::selection {
  background: ${Orange};
  color: ${Black};
}

* {
  user-select: none;
  box-sizing: border-box;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "kern";
}

html {
  font-family: Suisse, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${Orange};
}

body {
  background: ${White};
}
`

const Spacer = styled.div`
  height: 10rem;
`

const FooterGoDown = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <FooterGoDown>
        <Spacer />
        <Nav />
        <main>{children}</main>
      </FooterGoDown>
      <Footer />
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
