import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import { Black, White, Orange } from "../components/variables"

import "./default.css"

const GlobalStyle = createGlobalStyle`
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
