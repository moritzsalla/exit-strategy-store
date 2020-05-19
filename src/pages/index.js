import React, { useLayoutEffect } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import JumboText from "../components/jumboText"

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
  width: 800px;
`

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  useLayoutEffect(() => {
    const gallery = document.getElementById("gallery")
    const frameWidth = gallery.scrollWidth

    TweenLite.to(gallery, 200, {
      scrollTo: {
        x: frameWidth,
        autoKill: true,
      },
    })
  })

  return (
    <Layout footerProps={{ white: false }}>
      <SEO title="Home" />

      <JumboText />

      <Wrapper id="gallery">
        {products.map((product, j) => (
          <Link key={j} to={`/${product.node.handle}`}>
            <JumboImg
              fluid={product.node.images[1].localFile.childImageSharp.fluid}
              draggable={false}
              // loading="eager"
              // fadeIn={false}
            />
          </Link>
        ))}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct(sort: { order: DESC, fields: title }) {
      edges {
        node {
          handle
          images {
            localFile {
              id
              childImageSharp {
                fluid(maxHeight: 500, quality: 60, cropFocus: ATTENTION) {
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
// ...GatsbyImageSharpFluid_noBase64
