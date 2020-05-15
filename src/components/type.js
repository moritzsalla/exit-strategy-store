import styled from "styled-components"
import { Link } from "gatsby"
import { Orange, Grey } from "./variables"

export const Title = styled.h1`
  font-feature-settings: "kern";
  font-size: 5rem;
  font-style: italic;
  line-height: 1;
  color: ${Orange};
  font-weight: bold;
  padding-bottom: 2rem;
  letter-spacing: -0.2rem;
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: bold;
  color: ${Orange};
  text-transform: uppercase;
  font-style: normal;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Orange};

  &:hover {
    text-decoration: none;
    color: ${Grey};
  }
`

export const Paragraph = styled.p`
  color: ${Orange};
  font-feature-settings: "kern";
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.25;
  max-width: 50ch;
`

export const Small = styled.span`
  font-feature-settings: "kern";
  font-feature-settings: "case";
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
  color: ${Orange};
`
