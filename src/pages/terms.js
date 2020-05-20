import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import styled from "styled-components"
import { Subtitle } from "../components/type"
import { Mobile, Orange } from "../components/variables"
import { Markdown } from "../components/MarkdownStyles"

const StyledMarkdown = styled(Markdown)`
  color: ${Orange};
  hyphens: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h1 {
    font-size: 200%;
  }
  h2 {
    font-size: 150%;
  }
  h3 {
    font-size: 120%;
  }
  h4,
  h5,
  h6 {
    font-size: 100%;
  }
  h5,
  h6 {
    text-transform: uppercase;
  }

  p {
    margin: 1rem 0;
  }

  a,
  a:visited {
    color: ${Orange};
  }

  strong,
  time,
  b {
    font-weight: bold;
  }
  em,
  dfn,
  i {
    font-style: italic;
  }
  sub {
    font-size: 60%;
    vertical-align: ;
  }
  small {
    font-size: 80%;
  }

  blockquote,
  q {
    background: ${Orange};
    border-left: 10px solid ${Orange};
    padding: 1rem;
  }
  blockquote p:first-child {
    margin-top: 0;
  }
  cite {
    font-style: italic;
    font-weight: bold;
  }

  kbd,
  code,
  samp,
  pre,
  var {
    font-weight: bold;
  }
  code,
  pre {
    background: ${Orange};
    padding: 0.5rem 1rem;
  }
  code pre,
  pre code {
    padding: 0;
  }

  /* Elements */
  hr {
    background: ${Orange};
    border: 0;
    height: 1px;
    margin: 4rem 0;
  }

  img {
    max-width: 100%;
  }

  figure {
    border: 1px solid ${Orange};
    display: inline-block;
    padding: 1rem;
    width: auto;
  }
  figure img {
    margin: 0;
  }
  figure figcaption {
    font-size: 80%;
  }

  ul,
  ol {
    list-style-type: circle;
    margin: 2rem 0;
    padding: 0 0 0 2rem;
  }

  dl dd {
    padding-left: 1rem;
  }

  table {
    border: 1px solid ${Orange};
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
  }
  table caption {
    margin: 2rem 0;
  }
  table thead {
    text-align: center;
  }
  table tbody {
    text-align: right;
  }
  table tr {
    border-bottom: 1px solid ${Orange};
  }
  table tbody tr:nth-child(even) {
    background: ${Orange};
  }
  table th {
    background: ${Orange};
    font-weight: bold;
  }
  table th,
  table td {
    padding: 1rem;
  }
  table th:not(last-of-type),
  table td:not(last-of-type) {
    border-right: 1px solid ${Orange};
  }

  input {
    border: 1px solid ${Orange};
    padding: 0.8rem;
  }
  input:focus,
  input:active {
    background-color: ${Orange};
    border-color: ${Orange};
  }

  /* Mobile Styling */
  @media screen and (max-width: 50rem) {
    table {
      table-layout: auto;
    }
  }
`

const Terms = ({ data }) => {
  const policies = data.allShopifyShopPolicy.edges

  return (
    <Layout footerProps={{ white: false }}>
      <SEO title="Terms" />
      {policies.map((policy, i) => (
        <div key={i} id={policy.node.id}>
          <Subtitle>{policy.node.title}</Subtitle>
          <StyledMarkdown
            dangerouslySetInnerHTML={{ __html: policy.node.body }}
          />
        </div>
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
