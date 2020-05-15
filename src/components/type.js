import styled from "styled-components"
import { Link } from "gatsby"
import { Orange } from "./variables"

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  color: ${Orange};

  &:hover {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  font-style: italic;
  line-height: 1;
  color: ${Orange};
  font-weight: bold;
  padding-bottom: 2rem;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: bold;
  color: ${Orange};
  text-transform: uppercase;
  font-style: italic;
`

export const Paragraph = styled.p`
  color: ${Orange};
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.25;
`

export const Small = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${Orange};
  font-feature-settings: "kern";
`
