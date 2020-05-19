import styled from "styled-components"
import { Link } from "gatsby"
import { Orange, Grey, Mobile, Tablet } from "./variables"

export const Title = styled.h1`
  font-feature-settings: "kern";
  font-size: 4.5rem;
  font-style: italic;
  line-height: 1;
  color: ${Orange};
  font-weight: bold;
  letter-spacing: -0.2rem;

  @media (max-width: ${Tablet}) {
    font-size: 3rem;
    letter-spacing: -0.05rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 3rem;
    letter-spacing: -0.1rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.25;
  padding-bottom: 0.25rem;
  font-weight: bold;
  color: ${Orange};
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 0.05rem;

  @media (max-width: ${Mobile}) {
    font-size: 1rem;
    letter-spacing: 0;
    padding-bottom: 0.5rem;
  }
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
  line-height: 1.25;
  max-width: 50ch;
  font-size: ${props => (props.small ? "1rem" : "1.25rem")};

  @media (max-width: ${Tablet}) {
    max-width: 40ch;
  }

  @media (max-width: ${Mobile}) {
    max-width: 100%;
    line-height: 1.35;
    hyphens: auto;
    font-size: ${props => (props.small ? "0.95rem" : "1.2rem")};
  }
`

export const Small = styled.span`
  font-feature-settings: "kern";
  font-feature-settings: "case";
  text-transform: uppercase;
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
  color: ${Orange};

  @media (max-width: ${Mobile}) {
    font-size: 0.75rem;
  }
`
