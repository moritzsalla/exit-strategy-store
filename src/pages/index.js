import React from "react"
import styles from "styled-components"
import { createGlobalStyle } from "styled-components"
import Countdown from "react-countdown"
import Scene from "./Scene"
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

const TitleWrapper = styles.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styles.span`
  font-family: "Suisse", sans-serif;
  font-size: 4rem;
  margin: 2rem;
  font-weight: 900;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: #F87D00;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <GlobalStyle />
      <Scene />
      <TitleWrapper>
        <Countdown
          date="2020-05-21"
          intervalDelay={0}
          renderer={props => (
            <Title>
              {props.days}:{props.minutes}:{props.seconds}
            </Title>
          )}
        />
      </TitleWrapper>
    </Layout>
  )
}

export default IndexPage
