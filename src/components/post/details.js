import React from "react"
import styled from "styled-components"
import { Small } from "../type"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 2rem 0;
`

const Details = props => (
  <Wrapper>
    <Small>Price: €{props.price || `Not Specified`}</Small>

    <Small>
      Size:
      {props.sizes.map(i => (
        <span key={i}>{i.title || `Not Specified`}</span>
      ))}
    </Small>

    <Small>Type: {props.printType || `Not Specified`}</Small>
  </Wrapper>
)

export default Details
