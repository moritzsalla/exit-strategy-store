import React, { useContext, useState } from "react"
import styled from "styled-components"

import BuyButton from "../buyButton"
import { Title, Subtitle } from "../type"
import Details from "./details"
import { ShopifyContext } from "../shopifyProvider"

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

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

const TextPannel = ({ product }) => {
  const {
    store: { adding },
    addVariantToCart,
  } = useContext(ShopifyContext)
  // const shopifyId = product.variants[0].shopifyId
  const [variant, setVariant] = useState(product.variants[0].shopifyId)
  const [quantity, setQuantity] = useState(1)

  const purchase = () => {
    addVariantToCart(variant, quantity)
  }

  const handleQuantityChange = e => {
    const value = +e.target.value
    setQuantity(clamp(value, 0, 10))
  }

  const handleVariantChange = e => {
    const value = e.target.value
    setVariant(value)
  }

  return (
    <Wrapper>
      <Artist>{product.vendor}</Artist>
      <Series>{product.title}</Series>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      <Details product={product} />
      <div>
        <label>quantity</label>
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <select value={variant} onChange={handleVariantChange}>
          {product.variants.map(({ title, shopifyId }) => (
            <option key={shopifyId} value={shopifyId}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <BuyButton onClick={purchase} disabled={adding} />
    </Wrapper>
  )
}

export default TextPannel
