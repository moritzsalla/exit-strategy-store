import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import styled from "styled-components"
import { Subtitle } from "../components/type"
import { Mobile } from "../components/variables"
import { Markdown } from "../components/MarkdownStyles"

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 3rem;

    @media (max-width: ${Mobile}) {
      margin-bottom: 1.5rem;
    }
  }
`

const Terms = ({ data }) => {
  const policies = data.allShopifyShopPolicy.edges

  return (
    <Layout footerProps={{ white: false }}>
      <SEO title="Terms" />
      {policies.map((policy, i) => (
        <Section key={i} id={policy.node.id}>
          <Subtitle>{policy.node.title}</Subtitle>
          <Markdown dangerouslySetInnerHTML={{ __html: policy.node.body }} />
        </Section>
      ))}
    </Layout>
  )
}

export default Terms

export const query = graphql`
  query {
    allShopifyShopPolicy {
      edges {
        node {
          title
          body
          id
        }
      }
    }
  }
`
