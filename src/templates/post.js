import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layouts/default"
import Img from "gatsby-image"
import BuyButton from "../components/buyButton"
import { Title, Subtitle } from "../components/type"

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
        <Title>{product.title}</Title>
        <Subtitle>{product.vendor}</Subtitle>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <BuyButton />
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
