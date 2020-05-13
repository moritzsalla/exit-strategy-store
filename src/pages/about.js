import React from "react"
import styled from "styled-components"
import {Title} from "../components/type"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const Wrapper = styled.p`
  padding: 0 4rem 4rem 4rem;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Title>
          Forgetful Number presents EXIT&nbsp;STRATEGY! We are a creative collective
          unforgettable 4th year photography students of the Royal Academy of
          The Hague. If you don't forget US, we don't forget YOU!
          <br /><br />
          Support our graduation by purchasing a print or give us some love on Insta!
        </Title>
        </Wrapper>
    </Layout>
  )
}

export default About
