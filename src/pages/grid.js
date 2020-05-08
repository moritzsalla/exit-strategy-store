import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Small } from "../components/type"
import { Black, Orange, White } from "../components/variables"

const List = styled.ul`
  display: grid;
`

const Item = styled(Small)`
  border-bottom: 1px solid ${Black};
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${White};

  &:hover {
    background: ${Black};
    color: ${White};
  }
`

const Head = styled(Item)`
  position: sticky;
  top: 0;

  &:hover {
    background: ${White};
    color: ${Black};
  }
`

const Left = styled.span`
  text-align: left;
`

const Center = styled.span`
  text-align: center;
`

const Right = styled.span`
  text-align: right;
`

const Grid = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Departure Board" />
      <List>
        <Head>
          <Left>Artist</Left>
          <Center>Title</Center>
          <Center>Type</Center>
          <Right>Price</Right>
        </Head>

        {products.map(product => (
          <Item as={StyledLink} to={product.node.handle} key={product.node.id}>
            <Left>{product.node.vendor || `Not Specified`}</Left>
            <Center>{product.node.title || `Not Specified`}</Center>
            <Center>{product.node.productType || `Not Specified`}</Center>
            <Right>
              €
              {product.node.priceRange.maxVariantPrice.amount ||
                `Not Specified`}
            </Right>
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
