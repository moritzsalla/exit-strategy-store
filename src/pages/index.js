import React from "react"
import styles from "styled-components"
import { createGlobalStyle } from "styled-components"
import Countdown from "react-countdown"
import Scene from "../components/scene"
import Layout from "../layouts/default"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Suisse";
    src: url("./fonts/SuisseIntl-Black-WebXL.woff2") format("woff2"),
        url("./fonts/SuisseIntl-Black-WebXL.woff") format("woff");
    font-display: swap;
  }

  html, body {
    font-feature-settings: "kern";
    font-feature-settings: "case";
    padding: 0;
    margin: 0;
    background: #F5F6F7;
    user-select: none;


  }

  canvas {
    min-height: 100vh;
    min-width: 100vw;
  }
`

const Label = styles.span`
 font-family: "Suisse", sans-serif;
  font-size: 4rem;
  margin: 2rem;
  font-weight: 900;
  letter-spacing: 0.25rem;
  color: #F87D00;
`

const Countdown = styles(Label)`
 
`

const Logo = styles(Label)`
text-transform: uppercase;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Scene />
      <Logo />
      <Countdown
        date="2020-05-21"
        intervalDelay={0}
        renderer={props => (
          <Title>
            {props.days}:{props.minutes}:{props.seconds}
          </Title>
        )}
      />
    </Layout>
  )
}

export default IndexPage
