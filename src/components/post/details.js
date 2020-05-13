import React from "react"
import styled from "styled-components"

import { Small } from "../type"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 2rem 0;
`

const Details = props => {
  const { product } = props

  return (
    <Wrapper>
      <Small>
        Price: €{product.priceRange.maxVariantPrice.amount || `Not Specified`}
      </Small>

      <Small>Size: {product.variants[0].title || `Not Specified`}</Small>

      <Small>Type: {product.productType || `Not Specified`}</Small>
    </Wrapper>
  )
}

export default Details
