import React from "react"
import styled from "styled-components"
import { Title, Subtitle } from "../type"
import { Orange, Mobile, Tablet } from "../variables"

const Artist = styled(Subtitle)`
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  max-width: 80ch;
  padding-left: 4rem;

  @media (max-width: ${Tablet}) {
    padding: 0 0 0 0.75rem;
  }

  @media (max-width: ${Mobile}) {
    max-width: 100%;
    padding: 0;
  }
`

const Markup = styled.div`
  * {
    font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.25rem;
    max-width: 55ch;
    line-height: 1.25;
    font-weight: normal;
    color: ${Orange};
  }

  p:not(:last-of-type) {
    padding-bottom: 1rem;
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const TextPannel = ({ product }) => {
  return (
    <Wrapper>
      <Artist>{product.vendor}</Artist>
      <Title>{product.title}</Title>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </Wrapper>
  )
}

export default TextPannel
