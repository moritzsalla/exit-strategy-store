import React, { useState } from "react"
import styled from "styled-components"

const Lightbox = ({ children }) => {
  const [active, setActive] = useState(0)
  const Box = styled.div`
    cursor: pointer;
    ${active &&
    `z-index:10;
      display: block; 
      height:100vw; 
      width:100vw;
      position:fixed;
      top:0;
      left:0;
      overflow:scroll;`}
  `

  return (
    <>
      <Box onClick={() => setActive(!active)}>{children}</Box>
    </>
  )
}

export default Lightbox
