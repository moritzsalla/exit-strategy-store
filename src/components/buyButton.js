import React from "react"
import styled from "styled-components"
import { White, Orange, BorderRadius, StrokeWeight } from "./variables"

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
  transition: 0.5s all ease;

  &:hover {
    color: ${White};
    background: ${Orange};
  }
`

const BuyButton = props => <Button {...props}>Add to Cart</Button>

export default BuyButton
