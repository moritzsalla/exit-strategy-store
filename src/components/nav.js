import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = styled.h1`
  padding: 0;
  margin: 0;
`

const Nav = () => (
  <header>
    <Logo>Exit Strategy Store</Logo>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/overview/">Overview</Link>
    </nav>
  </header>
)

export default Nav
