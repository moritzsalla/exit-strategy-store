import React, { useState } from "react"
import styled from "styled-components"
import macro from "styled-components/macro"
import { Title } from "./type"
import { Mobile, White } from "./variables"

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  backdrop-filter: brightness(0.3) blur(5px);
  -webkit-backdrop-filter: brightness(0.7) blur(100px);
  backdrop-filter: brightness(0.3) blur(5px);
  color: white;
  cursor: pointer;
  padding: 8rem 1rem;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Exit = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
`

const JumboText = () => {
  const [active, setActive] = useState(1)

  return (
    <Modal
      onClick={() => setActive(!active)}
      css={`
        display: ${active ? "block" : "none"};
      `}
    >
      <Wrapper>
        <Title
          css={`
            color: ${White};
          `}
        >
          We are FORGETFUL NUMBER, the collective of 39 (adjust) visual artists
          who are graduating from the Photography department of the Royal
          Academy of Art, The Hague (NL). To make sure we all arrive safely at
          our final destinations, we would like to kindly ask for your support
          by purchasing one of our exclusive prints.
        </Title>
        <Exit>&#10005;</Exit>
      </Wrapper>
    </Modal>
  )
}

export default JumboText
