import styled from "styled-components"
import { Orange, Mobile } from "./variables"

export const Markdown = styled.div`
  font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-width: auto;
  line-height: 1.25;
  color: ${Orange};

  p {
    font-weight: normal;
    font-size: 1.15rem;
    padding-bottom: 1.25rem;

    @media (max-width: ${Mobile}) {
      font-size: 1.2rem;
      line-height: 1.35;
      hyphens: auto;
    }
  }
`
