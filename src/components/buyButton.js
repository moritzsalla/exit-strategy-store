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

const BuyButton = props => <Button {...props}>add to cart</Button>

export default BuyButton
