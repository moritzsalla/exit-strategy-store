import React from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Home" />

      {products.map((product, j) => (
        <Link key={j} to={product.node.handle}>
          {product.node.images.map((image, i) => (
            <Image key={i} fixed={image.localFile.childImageSharp.fixed} />
          ))}
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          handle
          images {
            localFile {
              id
              childImageSharp {
                fixed(width: 1000) {
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
