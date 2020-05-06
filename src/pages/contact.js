import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink } from "../components/type"

const LinkSection = styled.section`
  margin: 1rem;
`

const ContactLink = styled(StyledLink)`
  margin: 1rem;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <LinkSection>
        <ContactLink href="#">Instagram</ContactLink>
        <ContactLink href="mailto:info@forgetfulnumber.com">E–Mail</ContactLink>
      </LinkSection>
    </Layout>
  )
}

export default Contact
