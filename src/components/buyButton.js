import React from "react"
import styled from "styled-components"
import Client from "shopify-buy"
import { Black, White, Orange, BorderRadius, StrokeWeight } from "./variables"

export const Button = styled.button`
  color: ${Black};
  font-family: Suisse Mono, Suisse, monospace;
  color: ${Orange};
  text-transform: uppercase;
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
    this.product = props.productId
    this.client = Client.buildClient({
      domain: "exit-strategy-print-sale.myshopify.com",
      storefrontAccessToken: "2ec6c4ead91caa561ec8cb053c9941b5",
    })
  }

  purchase() {
    const lineItemsToAdd = [
      {
        variantId: this.product,
        quantity: 1,
      },
    ]

    this.client.checkout.create().then(checkout => {
      console.log("Checkout created")

      this.client.checkout
        .addLineItems(checkout, lineItemsToAdd, console.log("Added line items"))
        .then(checkout => {
          console.log(checkout.lineItems)
        })
    })

    // window.location.href = '...';
  }

  render() {
    return <Button onClick={() => this.purchase()}>Buy</Button>
  }
}

export default BuyButton
