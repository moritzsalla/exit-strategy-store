import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Paragraph } from "../components/type"

const Description = styled(Paragraph)`
  margin: 1rem;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Description>
        Forgetful Number presents Exit Strategies: a photography collective
        composed of the 40 photography graduates at the Royal Academy of Art in
        The Hague.
      </Description>
    </Layout>
  )
}

export default About
