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
    flex-direction: column-reverse;
  }
`

const Element = styled(Small)`
  padding: 1rem;
  text-decoration: none;

  &:hover {
    color: ${Grey};
  }

  @media (max-width: ${Mobile}) {
    padding: 0.5rem;
  }
`

class Footer extends React.Component {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  render() {
    return (
      <StyledFooter>
        <Element>
          <span>&copy;&nbsp;</span>
          {new Date().getFullYear()} Forgetful Number
        </Element>

        <Element as="a" href="https://www.instagram.com/forgetfulnumber/">
          Instagram
        </Element>

        <Element as="a" href="https://www.facebook.com/forgetfulnumber/">
          Facebook
        </Element>

        <Element as="a" href="mailto:info@forgetfulnumber.com">
          Mail
        </Element>
      </StyledFooter>
    )
  }
}

export default Footer
