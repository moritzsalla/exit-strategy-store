import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Subtitle } from "../components/type"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Subtitle>
        Forgetful Number presents EXIT STRATEGY! We are a creative collective
        unforgettable 4th year photography students of the Royal Academy of The
        Hague. If you don't forget US, we don't forget YOU!
      </Subtitle>
    </Layout>
  )
}

export default About
