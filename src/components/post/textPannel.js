import React from "react"
import styled from "styled-components"

import BuyButton from "../buyButton"
import { Title, Subtitle } from "../type"
import { Orange } from "../variables"

const Artist = styled(Subtitle)`
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  max-width: 60vw;
  padding: 4rem;
`

const Markup = styled.div`
  * {
    font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.35rem;
    max-width: 50ch;
    line-height: 1.25;
    color: ${Orange};
  }

  iframe {
    margin: 3rem 0;
  }
`

const TextPannel = props => {
  const { product } = props

  return (
    <Wrapper>
      <Artist>{product.vendor}</Artist>
      <Title>{product.title}</Title>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

      <BuyButton product={product} />
    </Wrapper>
  )
}

export default TextPannel
