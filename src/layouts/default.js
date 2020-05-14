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
  font-display: swap;
  font-weight: 500;
}

@font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-Black-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Black-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: bold;
}

@font-face {
  font-family: "Suisse";
  src: url("/fonts/SuisseIntl-BlackItalic-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-BlackItalic-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: bold;
  font-style: italic, oblique;
}

::selection {
  background: ${Orange};
  color: ${Black};
}

* {
  /* user-select: none; */
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

th {
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
}

td {
  padding-right: 2rem;
}
`

const Spacer = styled.div`
  position: relative;
  padding-top: 6rem;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <Spacer>
        <Nav />
        <main>{children}</main>

        <Footer />
      </Spacer>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
