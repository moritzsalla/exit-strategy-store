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
  Mobile,
  BorderRadius,
} from "../components/variables"

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
  background: ${White};
  font-family:  Suisse, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
}

th {
  text-align: left;
  text-transform: uppercase;
  padding-right: 4rem;
}

td {
  padding-right: 4rem;
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

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`

const Wrapper = styled.div`
  position: relative;
  background: ${White};

  @media (min-width: ${Mobile}) {
    min-height: 100vh;
  }
`

const Padding = styled.div`
  padding: 10rem 4vw;

  @media (max-width: ${Mobile}) {
    padding: 8rem 1.25rem;
  }
`

const Layout = ({ children, footerProps }) => {
  return (
    <>
      <Wrapper>
        <Nav />
        <Padding>
          <main>{children}</main>
        </Padding>
        <Footer {...footerProps} />
        <GlobalStyle />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
