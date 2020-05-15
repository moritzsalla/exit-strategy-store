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

  &:hover {
    color: ${White};
    background: ${Orange};
  }
`

class BuyButton extends React.Component {
  purchase() {
    console.log("buying stuff")
  }

  render() {
    return <Button onClick={() => this.purchase()}>Buy</Button>
  }
}

export default BuyButton
