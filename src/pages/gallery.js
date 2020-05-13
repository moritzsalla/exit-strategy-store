import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Small, Paragraph } from "../components/type"
import { Orange } from "../components/variables"
import BuyButton from "../components/buyButton"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 4rem;
`

const Item = styled.li`
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1.5rem;
  /* border: 1px solid black; */
`

const Artist = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  color: ${Orange};
  padding: 1rem 0 0;
`

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
              <Paragraph>€{product.node.priceRange.maxVariantPrice.amount}</Paragraph>
            </StyledLink>
            <BuyButton product={product} />
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
