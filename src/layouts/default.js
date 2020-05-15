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
::selection {
  background: ${Orange};
  color: ${Black};
}

html {
  background: ${Orange};
}

body {
  background: ${White};
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
