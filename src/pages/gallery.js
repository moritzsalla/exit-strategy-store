import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import BuyButton from "../components/buyButton"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Small, Subtitle } from "../components/type"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 6rem 2rem;
`

const Item = styled.li`
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  border: 1px solid grey;
  margin: 1rem 0;
`

const Artist = styled(Subtitle)``

const Price = styled(Small)``

const Gallery = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Gallery" />

      <List>
        {products.map((product, i) => (
          <Item key={i}>
            <StyledLink to={`/${product.node.handle}`}>
              {product.node.images.map((image, j) => (
                <Image
                  key={j}
                  fixed={image.localFile.childImageSharp.fixed}
                  draggable={false}
                />
              ))}
              <Artist>{product.node.vendor}</Artist>
              <Small>€{product.node.priceRange.maxVariantPrice.amount}</Small>
            </StyledLink>
            <BuyButton />
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
