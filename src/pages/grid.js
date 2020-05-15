import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Paragraph } from "../components/type"
import { White, Orange, StrokeWeight } from "../components/variables"

const List = styled.ul`
  display: grid;
`

const Item = styled(Paragraph)`
  border-top: ${StrokeWeight} solid ${Orange};
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${White};
  color: ${Orange};
  font-weight: normal;

  &:last-of-type {
    border-bottom: ${StrokeWeight} solid ${Orange};
  }

  &:hover {
    background: ${Orange};
    color: ${White};
  }
`

const Left = styled.span`
  text-align: left;
`

const Grid = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Departure Board" />
      <List>
        {products.map(product => (
          <Item
            as={StyledLink}
            to={`/${product.node.handle}`}
            key={product.node.id}
          >
            <Left>{product.node.vendor}</Left>
            <Left>{product.node.title}</Left>
            <Left>{product.node.productType}</Left>
            <Left>€{product.node.priceRange.maxVariantPrice.amount}</Left>
          </Item>
        ))}
      </List>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct(sort: { order: ASC, fields: vendor }) {
      edges {
        node {
          handle
          id
          title
          vendor
          productType
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

export default Grid
