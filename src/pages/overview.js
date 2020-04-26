import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const List = styled.ul`
  outline: 1px solid black;
  padding: 1rem;
`

const Vendor = styled.li`
  padding: 1rem;
`

const SecondPage = ({ data }) => {
  const product = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Artist" />

      <h1>Page 2</h1>

      <List>
        {product.map(i => (
          <Vendor key={i}>{i.node.vendor}</Vendor>
        ))}
      </List>
      <Link to="/">Take me home</Link>
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
