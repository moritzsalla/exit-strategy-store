import React, { useContext, useState } from "react"
import styled from "styled-components"
import BuyButton from "../buttons"
import { Title, Subtitle, StyledLink } from "../type"
import { ShopifyContext } from "../shopifyProvider"
import { Orange, Mobile, Tablet } from "../variables"

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const Artist = styled(Subtitle)`
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  max-width: 60%;
  padding: 2vw;

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
    font-size: 1.5rem;
    max-width: 50ch;
    line-height: 1.25;
    font-weight: normal;
    color: ${Orange};
  }

  iframe {
    margin: 3rem 0;
  }
`

const TextPannel = ({ product }) => {
  const {
    store: { adding, checkout },
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

  const isInCart = checkout.lineItems.some(item => item.variant.id === variant)

  return (
    <Wrapper>
      <Artist>{product.vendor}</Artist>
      <Title>{product.title}</Title>
      <Markup dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      <div>
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <br />
      <div>
        <select value={variant} onChange={handleVariantChange}>
          {product.variants.map(({ title, shopifyId, priceV2 }) => (
            <option key={shopifyId} value={shopifyId}>
              {title} &euro;{priceV2.amount}
            </option>
          ))}
        </select>
        <br />
        <br />
      </div>
      <BuyButton onClick={purchase} disabled={adding | isInCart}>
        {isInCart ? "added \u2713" : "add to cart"}
      </BuyButton>
      <StyledLink
        to="/cart/"
        css={`
          margin-left: 15px;
          display: ${isInCart ? "inline" : "none"};
        `}
      >
        View Cart
      </StyledLink>
    </Wrapper>
  )
}

export default TextPannel
