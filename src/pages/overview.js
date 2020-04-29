import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const List = styled.ul``

const Item = styled.li``

const SecondPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Overview" />

      <hr />

      <h1>Overview</h1>

      <hr />

      <List>
        {products.map(product => (
          <Item key={product.node.vendor}>
            {product.node.vendor}&emsp;
            {product.node.title}&emsp; €
            {product.node.priceRange.maxVariantPrice.amount}
          </Item>
        ))}
      </List>

      <hr />
    </Layout>
  )
}

export const query = graphql`
  query queryVendors {
    allShopifyProduct {
      edges {
        node {
          vendor
          title
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`

export default SecondPage
