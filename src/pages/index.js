import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import styled from "styled-components"
import { Mobile, Black } from "../components/variables"
import gsap, { TweenLite } from "gsap"
import scrollTo from "gsap/ScrollToPlugin"
import macro from "styled-components/macro"

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

const Img = styled.img`
  height: 100vh;
  width: auto;
`

const IndexPage = ({ data }) => {
  const products = data.allShopifyProduct.edges

  useEffect(() => {
    const gallery = document.getElementById("gallery")

    console.log(gallery.scrollWidth)

    TweenLite.to(gallery, 150, {
      scrollTo: {
        x: gallery.scrollWidth,
        autoKill: true,
      },
    })
  })

  return (
    <Layout footerProps={{ white: false }}>
      <SEO title="Home" />

      <Wrapper id="gallery">
        {products.map((product, j) => (
          <Link key={j} to={`/${product.node.handle}`}>
            <Img
              src={product.node.images[1].localFile.childImageSharp.resize.src}
              loading="lazy"
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
    allShopifyProduct(sort: { order: ASC, fields: vendor }) {
      edges {
        node {
          handle
          images {
            localFile {
              id
              childImageSharp {
                resize(height: 1000, quality: 60) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

// ENTROPY ATTENTIONs
