import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Home" />

      {products.map(product => (
        <Link to={product.node.handle} key={product.node.id}>
          {product.node.title}

          {/* <Img
            fluid={product.node.image.localFile.childImageSharp.fluid}
            key={product.node.image.id}
            alt={product.node.title}
          /> */}
        </Link>
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

export default IndexPage
