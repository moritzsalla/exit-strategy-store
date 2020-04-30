import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

const Copyright = styled.span`
  font-family: "Suisse";
  margin: 1rem;
  padding: 0;
`

const Footer = () => (
  <nav>
    <footer>
      <Copyright>&copy;</Copyright>
      {new Date().getFullYear()} Forgetful Number
    </footer>
  </nav>
)

export default Footer
