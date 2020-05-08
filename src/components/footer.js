import React from "react"
import styled from "styled-components"
import { Small, StyledLink } from "./type"
import { Black, White, Orange } from "./variables"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  user-select: none;

  a::after {
    content: "↗";
  }
`

const FooterElement = styled(Small)`
  padding: 1rem;
  color: ${Black};
  text-decoration: none;

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
