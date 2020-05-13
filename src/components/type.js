import styled from "styled-components"
import { Link } from "gatsby"
import { offsetBlack, Black, White } from "./variables"

export const StyledLink = styled(Link)`
  font-family: suisse;
  color: black;
  text-decoration: none;
  color: ${Black};
  font-feature-settings: "kern";

  &:hover {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1;
  font-family: Suisse;
  color: ${Black};
  font-weight: 900;
  font-feature-settings: "kern";
  text-transform: uppercase;
  font-feature-settings: "kern";
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 1.25;
  font-family: Suisse, sans-serif;
  font-weight: 900;
  color: ${Black};
  text-transform: uppercase;
  font-feature-settings: "kern";
`

export const Paragraph = styled.p`
  font-family: suisse;
  color: ${Black};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
  font-feature-settings: "kern";
`

export const Small = styled.span`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: Suisse Mono, Suisse, monospace;
  color: ${Black};
  font-feature-settings: "kern";
`
