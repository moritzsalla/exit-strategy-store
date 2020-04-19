import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
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
      <SEO title="Page two" />{" "}
      <List>
        {product.map(i => (
          <Vendor key={i}>{i.node.vendor}</Vendor>
        ))}
      </List>
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
