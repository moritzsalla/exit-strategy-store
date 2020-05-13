import styled from "styled-components"
import { Link } from "gatsby"
import { offsetBlack, Black, White, Orange } from "./variables"

export const StyledLink = styled(Link)`
  font-family: suisse;
  color: black;
  text-decoration: none;
  color: ${Black};

  &:hover {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  font-style: italic;
  line-height: 1;
  font-family: Suisse;
  color: ${Orange};
  font-weight: bold;
  padding-bottom: 2rem;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 1.25;
  font-family: Suisse, sans-serif;
  font-weight: bold;
  color: ${Black};
  text-transform: uppercase;
`

export const Paragraph = styled.p`
  font-family: suisse;
  color: ${Orange};
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.25;
`

export const Small = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: Suisse Mono, Suisse, monospace;
  color: ${Black};
  font-feature-settings: "kern";
`