import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { Orange } from "../components/variables"
import { Title } from "../components/type"

const Link = styled.a`
  color: ${Orange};
  font-weight: bold;
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
  text-decoration: none;

  &::before {
    content: "→ ";
  }
`

const Wrapper = styled.section`
  padding: 4rem;
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <Wrapper>
        <Title>Contact</Title>
        <ul>
          <li>
            <Link as="a" href="https://www.instagram.com/forgetfulnumber/">
              Instagram
            </Link>
          </li>
          <li>
            <Link as="a" href="https://www.facebook.com/forgetfulnumber/">
              Facebook
            </Link>
          </li>
          <li>
            <Link as="a" href="mailto:info@forgetfulnumber.com">
              E–Mail
            </Link>
          </li>
        </ul>
      </Wrapper>
    </Layout>
  )
}

export default Contact
