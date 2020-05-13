import React, { useEffect, useRef } from "react"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: red;
`

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  useEffect(() => {
    const gallery = document.getElementById("gallery")
    var scrollAmount = 0
    var slideTimer = setInterval(function () {
      gallery.scrollLeft += 5
      scrollAmount += 5
      if (scrollAmount >= gallery.offsetWidth) {
        window.clearInterval(slideTimer)
      }
    }, 25)
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
