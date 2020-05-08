import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Paragraph } from "../components/type"

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Large = styled(Paragraph)`
  font-size: 4vw;
  max-width: 30ch;
  text-align: center;
  line-height: 1;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Large>
          Forgetful Number presents EXIT STRATEGY! We are a creative collective
          unforgettable 4th year photography students of the Royal Academy of
          The Hague. If you don't forget US, we don't forget YOU!
        </Large>
      </Wrapper>
    </Layout>
  )
}

export default About
