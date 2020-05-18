import React, { useState } from "react"
import styled from "styled-components"
import { White } from "../variables"
import macro from "styled-components/macro"

const Lightbox = ({ children }) => {
  const [active, setActive] = useState(0)

  const Wrapper = styled.div`
    ${active &&
    `position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: ${White};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    `}
  `

  const InnerWrapper = styled.div`
    ${active &&
    `
      height: 100%;
      width: 50%;
    `}
  `

  return (
    <Wrapper onClick={() => setActive(!active)} props={active}>
      <InnerWrapper props={active}>{children}</InnerWrapper>
    </Wrapper>
  )
}

export default Lightbox
