import React, { useState } from "react"
import styled from "styled-components"
import { White } from "../variables"
import macro from "styled-components/macro"

const Lightbox = ({ children }) => {
  const [active, setActive] = useState(0)

  const Wrapper = styled.div`
    ${active &&
    `
    position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: ${White};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      cursor: zoom-out;

       img {
         outline: none;
         height: auto;
         width: auto;
         max-height: 90%;
         max-width: 90%;
         box-shadow: 0px 0px 53px 0px rgba(0, 0, 0, 0.2);
        }
    `}
  `

  return (
    <Wrapper onClick={() => setActive(!active)} props={active}>
      {children}
    </Wrapper>
  )
}

export default Lightbox
