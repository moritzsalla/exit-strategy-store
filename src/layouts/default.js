import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"

import { createGlobalStyle } from "styled-components"
import {
  Black,
  White,
  Orange,
  StrokeWeight,
  BorderRadius,
} from "../components/variables"

import { ShopifyProvider } from "../components/shopifyProvider"

import "./default.css"

const GlobalStyle = createGlobalStyle`
* {
  /* user-select: none; */
  box-sizing: border-box;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "kern";
}

::selection {
  background: ${Orange};
  color: ${Black};
}

html {
  background: ${Orange};
    font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
   position: relative;
   min-height: 100vh;
  background: ${White};
}

th {
  text-align: left;
  text-transform: uppercase;
}

td {
  padding-right: 2rem;
}


input {
  color: ${Orange};
  border: ${StrokeWeight} solid ${Orange};
  border-radius: ${BorderRadius};
  padding: 0.5rem;
  text-align: center;
  outline: none;
  font-size: 1rem;
  background: none;
  font-weight: bold;
}
`

const Wrapper = styled.div`
  padding: 10rem 4rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <ShopifyProvider>
        <Nav />
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
        <Footer />
      </ShopifyProvider>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
