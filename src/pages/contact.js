import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink } from "../components/type"

const Section = styled.section``

const ContactLink = styled(StyledLink)``

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section>
        <ContactLink href="#">Instagram</ContactLink>
        <ContactLink href="mailto:info@forgetfulnumber.com">E–Mail</ContactLink>
      </Section>
    </Layout>
  )
}

export default Contact
