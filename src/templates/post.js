import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layouts/default"
import Img from "gatsby-image"
import TextPannel from "../components/post/textPannel"

const Wrapper = styled.section``

const ImageWrapper = styled.div``

export default function Template({ data }) {
  const product = data.shopifyProduct

  return (
    <Layout>
      <SEO title={product.vendor} />
      <Wrapper>
        <ImageWrapper>
          {product.images.map((image, i) => (
            <Img
              fixed={image.localFile.childImageSharp.fixed}
              key={i}
              alt={product.title}
              draggable={false}
            />
          ))}
        </ImageWrapper>

        <TextPannel product={product} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      vendor
      handle
      descriptionHtml
      productType
      variants {
        title
        shopifyId
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }

      images {
        localFile {
          childImageSharp {
            fixed(width: 1000) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`
