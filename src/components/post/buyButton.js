import React from "react"
import styled from "styled-components"

import { Button } from "../type"

const Buy = styled(Button)`
  font-size: 1.5rem;
`

class BuyButton extends React.Component {
  purchase() {
    alert("Thank you for your purchase")
  }

  render() {
    return <Buy onClick={() => this.purchase()}>Buy</Buy>
  }
}

export default BuyButton
