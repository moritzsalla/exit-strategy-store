import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import styled from "styled-components"

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
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  useEffect(() => {
    const gallery = document.getElementById("gallery")

    TweenLite.to(gallery, 200, {
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
            {product.node.images.map((image, i) => (
              <Image
                key={i}
                fixed={image.localFile.childImageSharp.fixed}
                style={{ height: "100vh" }}
                draggable={false}
                loading="eager"
              />
            ))}
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
                fixed(height: 1000) {
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
