import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const product = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Page two" />
      {product.map(i => (
        <p key={i}>{i.node.vendor}</p>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query queryVendors {
    allShopifyProduct {
      edges {
        node {
          vendor
        }
      }
    }
  }
`

export default SecondPage
