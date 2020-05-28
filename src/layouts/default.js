import React from "react"
import PropTypes from "prop-types"
import "reset-css"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import {
  White,
  Orange,
  StrokeWeight,
  Mobile,
  BorderRadius,
} from "../components/variables"

import "./default.css"

const GlobalStyle = createGlobalStyle`
* {
  user-select: none;
  box-sizing: border-box;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "kern";
}

::selection {
  background: ${Orange};
  color: ${White};
}

html {
  background: ${White};
  font-family:  Suisse, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
}
`

const Layout = ({ children, footerProps }) => {
  return (
    <>
      <main>{children}</main>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
