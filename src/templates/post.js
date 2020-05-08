import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layouts/default"
import Img from "gatsby-image"
import TextPannel from "../components/post/textPannel"

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

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
            />
          ))}
        </ImageWrapper>

        <TextPannel
          product={product.title}
          vendor={product.vendor}
          markup={product.descriptionHtml}
          price={product.priceRange.maxVariantPrice.amount}
          sizes={product.variants}
          printType={product.productType}
        />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPage($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      vendor
      descriptionHtml
      productType
      variants {
        title
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
