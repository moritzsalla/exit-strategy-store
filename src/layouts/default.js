import React from "react"
import PropTypes from "prop-types"

import "reset-css"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styled from "styled-components"
import GlobalStyle from "../components/globalStyle"

const FooterGoDown = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <FooterGoDown>
        <Nav />
        <main>{children}</main>
      </FooterGoDown>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
