import React, { useState } from "react"
import styled from "styled-components"
import macro from "styled-components/macro"

const Box = styled.div``

const Lightbox = ({ children }) => {
  const [active, setActive] = useState(0)

  return (
    <>
      <Box
        onClick={() => setActive(!active)}
        css={`
          border-color: ${active ? "block" : null};
          height: ${active ? "100vh" : null};
          width: ${active ? "100vw" : null};
          position: ${active ? "fixed" : null};
          top: ${active ? "0" : null};
          left: ${active ? "0" : null};
          display: ${active ? "block" : null};
          overflow: ${active ? "scroll" : null};
        `}
      >
        {children}
      </Box>
    </>
  )
}

export default Lightbox
