import React, { useState } from "react"
import { White, Mobile } from "../variables"
import styled from "styled-components"

const Lightbox = ({ children }) => {
  const [active, setActive] = useState(0)

  return (
    <div
      onClick={() => setActive(!active)}
      css={
        active
          ? `
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
         box-shadow: 0px 0px 53px 0px rgba(0, 0, 0, 0.7);
          cursor: zoom-out;
        }

       
      }
      `
          : null
      }
    >
      {children}
    </div>
  )
}

export default Lightbox
