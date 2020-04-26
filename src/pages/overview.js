import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const List = styled.ul`
  outline: 1px solid black;
  padding: 1rem;
`

const Item = styled.li`
  padding: 1rem;
`

const SecondPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Artist" />

      <h1>Overview</h1>

      <List>
        {products.map(product => (
          <Item key={product.node.vendor}>
            {product.node.vendor}&emsp;
            {product.node.title}&emsp; €
            {product.node.priceRange.maxVariantPrice.amount}
          </Item>
        ))}
      </List>
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
