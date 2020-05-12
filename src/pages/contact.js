import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Title, Subtitle, Paragraph, StyledLink } from "../components/type"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Title>Contact</Title>
      <Subtitle>Contact or follow us here</Subtitle>

      <Paragraph>
        <ul>
          <li>
            <StyledLink
              as="a"
              href="https://www.instagram.com/forgetfulnumber/"
            >
              Instagram
            </StyledLink>
          </li>
          <li>
            <StyledLink as="a" href="https://www.facebook.com/forgetfulnumber/">
              Facebook
            </StyledLink>
          </li>
          <li>
            <StyledLink as="a" href="mailto:info@forgetfulnumber.com">
              E–Mail
            </StyledLink>
          </li>
        </ul>
        <br />
        Forgetful Number is a collective of photography graduates at the Royal
        Academy of Art (KABK) The Hague.
      </Paragraph>
    </Layout>
  )
}

export default Contact
