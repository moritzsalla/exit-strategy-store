import React from "react"
import { graphql } from "gatsby"
import ImageScroller from "../components/imageScroller"
import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout footerProps={{ white: false }}>
      <SEO title="Home" />
      <ImageScroller products={products} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct(sort: { order: DESC, fields: title }) {
      edges {
        node {
          title
          handle
          images {
            localFile {
              id
              childImageSharp {
                resize(height: 1000, quality: 70) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
