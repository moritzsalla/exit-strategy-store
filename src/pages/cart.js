import React, { useContext } from "react"
import styled from "styled-components"
import { Title, Paragraph } from "../components/type"
import { StrokeWeight, Orange, Mobile } from "../components/variables"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { ShopifyContext } from "../components/shopifyProvider"
import { Button } from "../components/buttons"

const StyledTitle = styled(Title)`
  padding-bottom: 2rem;
`

const Table = styled.div`
  display: block;
  width: 100%;
`

const Entity = styled(Paragraph)`
  @media (max-width: ${Mobile}) {
    font-size: 1rem;
  }
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
    position: relative;
    padding: 0.5rem 0rem;
    display: flex;
    flex-direction: column;

    img {
      height: 120px;
      margin-bottom: 0.5rem;
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

const ProductQuantity = styled(Entity)`
  font-variant-numeric: lining-nums;
  @media (max-width: ${Mobile}) {
    &::before {
      content: "Quantity: ";
    }
  }
`

const ProductTitle = styled(Entity)`
  font-weight: bold;
`

const ProductOptions = styled(Entity)``

const ExitButton = styled(Button)`
  @media (max-width: ${Mobile}) {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
  }
`

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />

      <StyledTitle>Shopping Cart</StyledTitle>
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
          <ProductTitle>
            {data.title}
            {data.variant.title === !"Default Title" ? data.variant.title : ""}
          </ProductTitle>
        </Row>
        <Row>
          <ProductQuantity>{data.quantity}</ProductQuantity>
        </Row>
        <Row>
          <ProductOptions>{selectedOptions}</ProductOptions>
        </Row>
        <Row>
          <ExitButton onClick={handleRemove}>&times;</ExitButton>
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

      <RedirectButton onClick={handleCheckout}>Check Out</RedirectButton>
    </>
  )
}

export default Cart
