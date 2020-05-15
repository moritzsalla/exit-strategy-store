import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Paragraph } from "../components/type"
import { Tablet, Mobile } from "../components/variables"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${Tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Item = styled.li`
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  margin: 2vw;

  @media (max-width: ${Mobile}) {
    margin: 1vw;
  }
`

const Large = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.025rem;
  line-height: 1;
  padding-top: 1rem;

  @media (max-width: ${Tablet}) {
    font-size: 1.75rem;
    padding-top: 0.5rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 1rem;
  }
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
              <Large>{product.node.vendor}</Large>
              <Paragraph>{product.node.title}</Paragraph>
            </StyledLink>
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
