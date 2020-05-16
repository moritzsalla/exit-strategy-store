import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layouts/default"
import Img from "gatsby-image"
import TextPannel from "../components/post/textPannel"
import { Mobile, Tablet } from "../components/variables"

const Wrapper = styled.section`
  display: flex;

  @media (max-width: ${Mobile}) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  width: 30%;

  @media (max-width: ${Tablet}) {
    padding: 0 0.75rem 0 0;
  }

  @media (max-width: ${Mobile}) {
    max-width: 100%;
    padding: 0;
  }
`

export default function Template({ data }) {
  const product = data.shopifyProduct

  return (
    <Layout>
      <SEO title={product.vendor} />
      <Wrapper>
        <ImageWrapper>
          {product.images[0] && (
            <Img
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt={product.title}
              draggable={false}
            />
          )}
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
        priceV2 {
          amount
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }

      images {
        localFile {
          childImageSharp {
            fluid(maxHeight: 1000, quality: 60) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`
