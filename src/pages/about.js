import React from "react"
import styled from "styled-components"
import {Title, Paragraph} from "../components/type"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const Wrapper = styled.p`
  padding: 4rem;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Title>
          We are EXIT&nbsp;STRATEGY<br />→ A collective of 40 graduating BA photography students, who are preparing their EXIT STRATEGIES to depart from the Royal Academy of Art in The Hague
        </Title>
        </Wrapper>
    </Layout>
  )
}

export default About
