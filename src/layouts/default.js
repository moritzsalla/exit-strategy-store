import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import { Black, White, Orange } from "../components/variables"

const FooterGoDown = styled.div`
  min-height: 100vh;
`

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
  src: url("/fonts/SuisseIntl-Bold-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntl-Bold-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 900;
}

@font-face {
  font-family: "Suisse Mono";
  src: url("/fonts/SuisseIntlMono-Thin-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntlMono-Thin-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 100;
}

@font-face {
  font-family: "Suisse Mono";
  src: url("/fonts/SuisseIntlMono-Regular-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntlMono-Regular-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 500;
}

@font-face {
  font-family: "Suisse Mono";
  src: url("/fonts/SuisseIntlMono-Bold-WebXL.woff2") format("woff2"),
    url("/fonts/SuisseIntlMono-Bold-WebXL.woff") format("woff");
  font-display: swap;
  font-weight: 900;
}

::selection {
  background: ${Orange};
  color: ${Black};
}

* {
  box-sizing: border-box;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background: ${Black};
}

body {
  background: ${White};
}
`

const Layout = ({ children }) => {
  return (
    <>
      <FooterGoDown>
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
