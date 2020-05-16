import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import styled from "styled-components"
import { Mobile } from "../components/variables"
import gsap, { TweenLite } from "gsap"
import scrollTo from "gsap/ScrollToPlugin"

gsap.registerPlugin(scrollTo)

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  @media (max-width: ${Mobile}) {
    z-index: 10;
  }
`

const JumboImg = styled(Image)`
  height: 100vh;
  width: 400px;
`

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  useEffect(() => {
    const gallery = document.getElementById("gallery")

    TweenLite.to(gallery, 150, {
      scrollTo: {
        x: gallery.scrollWidth,
        autoKill: true,
      },
    })
  })

  return (
    <Layout>
      <SEO title="Home" />

      <Wrapper id="gallery">
        {products.map((product, j) => (
          <Link key={j} to={`/${product.node.handle}`}>
            {product.node.images
              ? product.node.images.map((image, i) => (
                  <JumboImg
                    key={i}
                    fluid={image.localFile.childImageSharp.fluid}
                    draggable={false}
                    loading="eager"
                  />
                ))
              : null}
          </Link>
        ))}
      </Wrapper>
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
                fluid(maxHeight: 1000, quality: 100, cropFocus: WEST) {
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

// ENTROPY ATTENTION
