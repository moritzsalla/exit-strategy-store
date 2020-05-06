import React from "react"
import styled from "styled-components"
import { Small } from "./type"
import { Black, White, Orange } from "./variables"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Black};
  color: white;
  user-select: none;
`

const FooterElement = styled(Small)`
  padding: 1rem;
  color: ${White};

  span {
    font-family: Suisse, sans-serif;
  }
`

const TopLink = styled(Small)`
  color: ${White};
  &:hover {
    cursor: pointer;
    color: ${Orange};
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

        <TopLink as={FooterElement} onClick={() => this.scrollTop()}>
          Top &uarr;
        </TopLink>
      </StyledFooter>
    )
  }
}

export default Footer
