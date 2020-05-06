import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink } from "../components/type"

const Product = styled.div`
  margin: 1rem;
  display: inline-block;
`

const ProductLink = styled(StyledLink)``

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Shop" />
      {products.map(product => (
        <Product>
          <ProductLink to={product.node.handle} key={product.node.id}>
            {product.node.title}

            {/* <Img
            fluid={product.node.image.localFile.childImageSharp.fluid}
            key={product.node.image.id}
            alt={product.node.title}
          /> */}
          </ProductLink>
        </Product>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          handle
          id
          images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
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

export default Shop
