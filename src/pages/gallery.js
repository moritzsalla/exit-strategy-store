import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Small, Subtitle } from "../components/type"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 2rem;
`

const Item = styled.li`
  display: inline-block;
  margin: 4rem 0;
  text-align: center;
`

const Gallery = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Gallery" />

      <List>
        {products.map((product, i) => (
          <Item key={i}>
            <StyledLink to={product.node.handle}>
              {product.node.images.map((image, j) => (
                <Image key={j} fixed={image.localFile.childImageSharp.fixed} />
              ))}
              <Subtitle>{product.node.title}</Subtitle>
              <Small>{product.node.vendor}</Small>
            </StyledLink>
          </Item>
        ))}
      </List>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct(sort: { order: ASC, fields: title }) {
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
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
