import React, { useContext, useState } from "react"
import styled from "styled-components"
import BuyButton from "../buyButton"
import { Title, Subtitle, Small, StyledLink } from "../type"
import { ShopifyContext } from "../shopifyProvider"
import { Orange } from "../variables"

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const Series = styled(Title)`
  margin-bottom: 2rem;
`

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

const TextPannel = ({ product }) => {
  const {
    store: { adding },
    addVariantToCart,
  } = useContext(ShopifyContext)
  // const shopifyId = product.variants[0].shopifyId
  const [variant, setVariant] = useState(product.variants[0].shopifyId)
  const [quantity, setQuantity] = useState(1)

  const purchase = event => {
    addVariantToCart(variant, quantity)
    event.target.innerHTML = "Added &check;"
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
      <Title>{product.title}</Title>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      <div>
        <Small>Quantity</Small>
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
          {product.variants.map(({ title, shopifyId, priceV2 }) => (
            <option key={shopifyId} value={shopifyId}>
              {title} &euro;{priceV2.amount}
            </option>
          ))}
        </select>
      </div>
      <BuyButton onClick={purchase} disabled={adding} />
      <StyledLink to="/cart/">View Cart</StyledLink>
    </Wrapper>
  )
}

export default TextPannel
