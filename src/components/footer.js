import React from "react"
import styled from "styled-components"
import { Small } from "./type"
import { Grey, Mobile } from "./variables"

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a::after {
    content: "↗";
  }

  @media (max-width: ${Mobile}) {
    display: none;
    flex-direction: column-reverse;
  }
`

const FooterElement = styled(Small)`
  padding: 1rem;

  @media (max-width: ${Mobile}) {
    padding: 0.5rem;
  }
`

const FooterLink = styled(FooterElement)`
  text-decoration: none;

  &:hover {
    color: ${Grey};
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

        <FooterLink as="a" href="https://www.instagram.com/forgetfulnumber/">
          Instagram
        </FooterLink>

        <FooterLink as="a" href="https://www.facebook.com/forgetfulnumber/">
          Facebook
        </FooterLink>

        <FooterLink as="a" href="mailto:info@forgetfulnumber.com">
          Mail
        </FooterLink>
      </StyledFooter>
    )
  }
}

export default Footer
