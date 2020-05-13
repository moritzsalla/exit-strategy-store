import React from "react"
import styled from "styled-components"
import Client from "shopify-buy"
import { Black, White, Orange, BorderRadius, StrokeWeight } from "./variables"

export const Button = styled.button`
  color: ${Orange};
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: ${BorderRadius};
  outline: none;
  background: none;
  border: ${StrokeWeight} solid ${Orange};
  cursor: pointer;

  &:hover {
    color: ${White};
    background: ${Orange};
  }
`

class BuyButton extends React.Component {
  constructor(props) {
    super(props)
    this.product = props.product
    this.client = null
    this.checkoutId = null
  }

  componentDidMount() {
    this.client = Client.buildClient(
      {
        domain: "exit-strategy-print-sale.myshopify.com",
        storefrontAccessToken: "2ec6c4ead91caa561ec8cb053c9941b5",
      },
      console.log("Created Client")
    )

    this.client.checkout
      .create()
      .then(checkout => {
        this.checkoutId = checkout.attrs.webUrl.value
      })
      .then(console.log("Created Checkout"))
  }

  purchase() {
    this.client.product
      .fetch(this.product.variants[0].shopifyId)
      .then(product => {
        console.log(product)
      })

    // console.log("Redirecting to Shopify…")
    // window.location.href = this.checkoutId
  }

  render() {
    return <Button onClick={() => this.purchase()}>Buy</Button>
  }
}

export default BuyButton
