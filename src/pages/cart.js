import React, { useContext } from "react"
import styled from "styled-components"
import { Title, Paragraph } from "../components/type"
import { StrokeWeight, Orange, Mobile } from "../components/variables"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { ShopifyContext } from "../components/shopifyProvider"
import { Button } from "../components/buttons"

const Table = styled.div`
  font-variant-numeric: lining-nums;
  display: block;
  width: 100%;
`

const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0.5rem 1rem;
  border-top: ${StrokeWeight} solid ${Orange};

  &:last-of-type {
    border-bottom: ${StrokeWeight} solid ${Orange};
  }

  @media (max-width: ${Mobile}) {
    padding: 0.2rem 0rem;

    img {
      max-height: 40px;
    }
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  &:last-child {
    justify-content: flex-end;
  }
`

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />

      <Title>Shopping Cart</Title>
      <Table>
        <Checkout />
      </Table>
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
      height="80px"
      loading="lazy"
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
    <>
      <Column>
        <Row>{variantImage}</Row>
        <Row>
          <Paragraph>
            {data.title}
            {data.variant.title === !"Default Title" ? data.variant.title : ""}
          </Paragraph>
        </Row>
        <Row>
          <Paragraph>{data.quantity}</Paragraph>
        </Row>
        <Row>
          <Paragraph>{selectedOptions}</Paragraph>
        </Row>
        <Row>
          <Button onClick={handleRemove}>Remove</Button>
        </Row>
      </Column>
    </>
  )
}

const RedirectButton = styled(Button)`
  margin-top: 2rem;
`

const Checkout = () => {
  const context = useContext(ShopifyContext)
  if (!context) return null

  const {
    store: { checkout },
  } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <>
      {checkout.lineItems.map(item => (
        <Item key={item.id} data={item} />
      ))}

      <RedirectButton onClick={handleCheckout}>Check Out ↗</RedirectButton>
    </>
  )
}

export default Cart
