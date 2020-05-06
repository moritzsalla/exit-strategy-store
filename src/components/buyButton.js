import React from "react"
import styled from "styled-components"

const Button = styled.button``

class BuyButton extends React.Component {
  purchase() {
    alert("Thank you for your purchase")
  }

  render() {
    return <Button onClick={() => this.purchase()}>Buy</Button>
  }
}

export default BuyButton
