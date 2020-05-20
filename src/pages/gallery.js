import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Paragraph } from "../components/type"
import { Tablet, Mobile } from "../components/variables"
import macro from "styled-components/macro"

const Margin = "3vw"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: -${Margin};

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
  margin: ${Margin};

  /* @media (max-width: ${Mobile}) {
    margin: 1rem;
  } */
`

const Large = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.025rem;
  line-height: 1;
  padding-top: 1rem;

  @media (max-width: ${Tablet}) {
    font-size: 1.5rem;
    padding-top: 1rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 4.5vw;
  }
`

const Small = styled(Paragraph)`
  line-height: 1;
  padding-top: 0.2rem;
  max-width: 20ch;
  margin: 0 auto;

  @media (max-width: ${Tablet}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 4vw;
    line-height: 1;
    max-width: 15ch;
    hyphens: none;
  }
`

const Gallery = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Print Sale" />

      <List>
        {products.map((product, i) => (
          <Item key={i}>
            <StyledLink css="width: 100%;" to={`/${product.node.handle}`}>
              {product.node.images[0] ? (
                <Image
                  css="width: 100%;"
                  fluid={product.node.images[0].localFile.childImageSharp.fluid}
                  draggable={false}
                />
              ) : null}

              <Large>{product.node.vendor}</Large>
              <Small>{product.node.title}</Small>
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
                fluid(maxHeight: 600, quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
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
