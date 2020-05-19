import React from "react"
import styled from "styled-components"
import {
  White,
  Orange,
  Grey,
  BorderRadius,
  StrokeWeight,
  Mobile,
} from "./variables"

export const Button = styled.button`
  color: ${White};
  background: ${Orange};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: ${BorderRadius};
  outline: none;
  border: ${StrokeWeight} solid ${Orange};
  font-weight: bold;

  &:disabled {
    color: ${Orange};
    border-color: ${Orange};
    background: none;
  }

  &:hover:not([disabled]) {
    /* box-shadow: 0px 0px 53px 0px rgba(0, 0, 0, 0.1); */
    cursor: pointer;
    color: ${White};
    background: ${Grey};
    border-color: ${Grey};
  }

  @media (max-width: ${Mobile}) {
    padding: 0.25rem 0.5rem;
  }
`

const BuyButton = props => <Button {...props} />

export default BuyButton
