import React, { useContext } from "react"
import styled from "styled-components"
import { Title } from "../components/type"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { ShopifyContext } from "../components/shopifyProvider"

const Wrapper = styled.div`
  padding: 4rem;
`

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Checkout />
      </Wrapper>
    </Layout>
  )
}

const Item = props => {
  const { data } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(ShopifyContext)

  const variantImage = data.variant.image ? (
    <img
      src={data.variant.image.src}
      alt={`${data.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = data.variant.selectedOptions
    ? data.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, data.id)
  }

  return (
    <div>
      {variantImage}
      <p>
        {data.title}
        {data.variant.title === !"Default Title" ? data.variant.title : ""}
      </p>
      options: {selectedOptions}
      quantity: {data.quantity}
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

const Checkout = () => {
  const {
    store: { checkout },
  } = useContext(ShopifyContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <div>
      {checkout.lineItems.map(item => (
        <Item key={item.id} data={item} />
      ))}
      <button onClick={handleCheckout}>check out</button>
    </div>
  )
}

export default Cart
