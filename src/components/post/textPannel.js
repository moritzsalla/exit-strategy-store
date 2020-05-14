import React from "react"
import styled from "styled-components"

import BuyButton from "../buyButton"
import { Title, Subtitle } from "../type"
import Details from "./details"

const Series = styled(Title)`
  margin-bottom: 2rem;
`

const Artist = styled(Subtitle)`
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  max-width: 50vw;
  padding: 4rem;
`

const Markup = styled.div`
  * {
    font-family: Suisse, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    line-height: 1.25;
  }

  iframe {
    margin-top: 1rem;
  }
`

const TextPannel = props => {
  const { product } = props

  return (
    <Wrapper>
      <Artist>{product.vendor}</Artist>
      <Series>{product.title}</Series>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

      <Details product={product} />
      <BuyButton product={product} />
    </Wrapper>
  )
}

export default TextPannel
