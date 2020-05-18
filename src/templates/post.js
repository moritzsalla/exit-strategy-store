import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../layouts/default"
import Img from "gatsby-image"
import TextPannel from "../components/post/textPannel"
import BuySection from "../components/post/buySection"
import { Mobile, Tablet } from "../components/variables"
import Lightbox from "../components/post/lightbox"

const Wrapper = styled.section`
  display: flex;

  @media (max-width: ${Mobile}) {
    flex-direction: column;
  }
`

const ImageTile = styled.div`
  width: 40%;
  cursor: pointer;

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
        <ImageTile>
          {product.images[0] && (
            <Lightbox>
              <Img
                fluid={product.images[0].localFile.childImageSharp.fluid}
                alt={product.title}
                draggable={false}
              />
            </Lightbox>
          )}
          <BuySection product={product} />
        </ImageTile>
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
            }
          }
        }
      }
    }
  }
`
