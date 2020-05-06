import styled from "styled-components"
import { Link } from "gatsby"
import { Black, Orange } from "./variables"

export const StyledLink = styled(Link)`
  font-family: suisse;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  color: ${Black};

  &:hover {
    color: ${Orange};
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: Suisse;
  font-weight: 900;
  text-transform: uppercase;
  color: ${Black};
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: suisse;
  font-weight: 900;
  text-transform: uppercase;
  color: ${Black};
`

export const Paragraph = styled.p`
  font-family: suisse;
  color: ${Black};
`

export const Small = styled.p`
  font-weight: 400;
  text-transform: uppercase;
  size: 0.5rem;
  font-family: Suisse Mono, Suisse, monospace;
  color: ${Black};
`
