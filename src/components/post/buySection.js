import React, { useContext, useState } from "react"
import BuyButton from "../buttons"
import { StyledLink } from "../type"
import { ShopifyContext } from "../shopifyProvider"
import { White, StrokeWeight, Orange, BorderRadius, Mobile } from "../variables"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  * {
    margin-right: auto;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${Mobile}) {
    margin-top: 1rem;
  }
`

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const BuySection = ({ product }) => {
  const context = useContext(ShopifyContext)
  const [variant, setVariant] = useState(product.variants[0].shopifyId)
  const [quantity, setQuantity] = useState(1)

  if (!context) return null
  const {
    store: { adding, checkout },
    addVariantToCart,
  } = context

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
      <StyledLink to="/info/#frames">See Frame Options</StyledLink>

      <select
        value={variant}
        onChange={handleVariantChange}
        css={`
          background: ${White};
          border: ${StrokeWeight} solid ${Orange};
          outline: none;
          font-size: 1rem;
          color: ${Orange};
          border-radius: ${BorderRadius};
          padding: 0.5rem;
        `}
      >
        {product.variants.map(({ title, shopifyId, priceV2 }) => (
          <option key={shopifyId} value={shopifyId}>
            {title} &euro;{priceV2.amount}
          </option>
        ))}
      </select>

      <div>
        <input
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={handleQuantityChange}
          css="margin-right: 0.5rem;"
        />
        <BuyButton onClick={purchase} disabled={adding | isInCart}>
          {isInCart ? "added \u2713" : "Add Print to Cart"}
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
      </div>
    </Wrapper>
  )
}

export default BuySection
