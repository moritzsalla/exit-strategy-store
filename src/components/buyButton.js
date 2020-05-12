import React from "react"
import styled from "styled-components"
import { offsetBlack, Black, White, Orange } from "./variables"

export const Button = styled.button`
  color: ${Black};
  font-family: Suisse Mono, Suisse, monospace;
  color: ${Orange};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  outline: none;
  background: none;
  border: 0.1rem solid ${Orange};
  cursor: pointer;

  &:hover {
    color: ${White};
    background: ${Orange};
  }
`

class BuyButton extends React.Component {
  purchase() {
    alert("Thank you for your purchase")
  }

  render() {
    return <Button onClick={() => this.purchase()}>Buy</Button>
  }
}

export default BuyButton
