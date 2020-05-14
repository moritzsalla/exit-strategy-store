import React from "react"
import styled from "styled-components"
import { Orange, StrokeWeight } from "./variables"

const StyledFooter = styled.footer`
position: absolute;
bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-top: ${StrokeWeight} solid ${Orange}; */

  a::after {
    content: "↗";
  }
`

const FooterElement = styled.span`
  font-family: Suisse, sans-serif;
  font-size: 1rem;
  padding: 1rem;
  color: ${Orange};
  text-decoration: none;
  font-weight: bold;

  span {
    font-family: Suisse, sans-serif;
  }
`

const Top = styled(FooterElement)`
  &:hover {
    cursor: pointer;
  }
`

class Footer extends React.Component {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  render() {
    return (
      <StyledFooter>
        <FooterElement>
          <span>&copy;&nbsp;</span>
          {new Date().getFullYear()} Forgetful Number
        </FooterElement>

        {/* <FooterElement as={StyledLink} to="/">
          Home
        </FooterElement>
        <FooterElement as={StyledLink} to="/about/">
          About
        </FooterElement>
        <FooterElement as={StyledLink} to="/gallery/">
          Gallery
        </FooterElement>
        <FooterElement as={StyledLink} to="/shipping/">
          Shipping
        </FooterElement>
        <FooterElement as={StyledLink} to="/contact/">
          Contact
        </FooterElement> */}

        <FooterElement as="a" href="https://www.instagram.com/forgetfulnumber/">
          Instagram
        </FooterElement>

        <FooterElement as="a" href="https://www.facebook.com/forgetfulnumber/">
          Facebook
        </FooterElement>

        <FooterElement as="a" href="mailto:info@forgetfulnumber.com">
          Mail
        </FooterElement>

        <Top onClick={() => this.scrollTop()}>Top&uarr;</Top>
      </StyledFooter>
    )
  }
}

export default Footer
