import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Countdown, { zeroPad } from "react-countdown"
import Scene from "../components/scene"
import Layout from "../layouts/default"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Suisse";
    src: url("./fonts/SuisseIntl-Black-WebXL.woff2") format("woff2"),
        url("./fonts/SuisseIntl-Black-WebXL.woff") format("woff");
    font-display: block;
  }

  html, body {
    padding: 0;
    margin: 0;
    background: #F5F6F7;
    user-select: none;
    overflow: hidden;
  }

  canvas {
    min-height: 100vh;
    min-width: 100vw;
  }

  /* COMPENSATE FOR WEBKIT BROWSER CENTER ALIGN OFFSET
   @media (max-width: 768px) { 
   canvas {
     transform: translateY(-40px); 
   } 
  } */
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
`

const stickyLabel = styled.div`
  transition: all 1s ease;
  font-feature-settings: "kern";
  font-feature-settings: "case";
  font-family: "Suisse", sans-serif;
  font-size: 3vw;
  margin: 2.5vw;
  font-weight: 900;
  letter-spacing: 0.65vw;
  color: #f87d00;
  z-index: 100;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4.5vw;
    margin: 3vh;
    line-height: 1.25;
  }
`

const Timer = styled(stickyLabel)``

const Logo = styled(stickyLabel)`
  display: flex;
  justify-content: space-between;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Scene />

      <Wrapper>
        <Logo>
          KABK Photography
          <br />
          Graduation Print Sale
          <br />
          21—28 May
        </Logo>
        <Countdown
          date="2020-05-21T16:00:00"
          intervalDelay={0}
          precision={3}
          renderer={props => (
            <Timer>
              {zeroPad(props.days)}:{zeroPad(props.hours)}:
              {zeroPad(props.minutes)}:{zeroPad(props.seconds)}
            </Timer>
          )}
        />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
