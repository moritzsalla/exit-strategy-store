import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../layouts/default"
import Img from "gatsby-image"

export default function Template({ data }) {
  const product = data.shopifyProduct

  return (
    <>
      <Layout>
        <SEO title={product.vendor} />

        {product.images.map(image => (
          <Img
            fluid={image.localFile.childImageSharp.fluid}
            key={image.id}
            alt={product.title}
          />
        ))}

        <h1>{product.title}</h1>

        <h2>{product.vendor}</h2>

        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ProjectPage($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      vendor
      descriptionHtml
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
`
