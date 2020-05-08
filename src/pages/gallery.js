import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { StyledLink, Small, Paragraph, Subtitle } from "../components/type"
import { Black, Orange, White } from "../components/variables"
import Image from "gatsby-image"

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 2rem;
`

const Item = styled.li`
  display: inline-block;
  margin: 4rem 0;
  text-align: center;
`

const Thumbnail = props => (
  <Item as={StyledLink} to={props.handle}>
    {/* {props.images.map(image => (
      <Image fixed={image.localFile.childImageSharp.fixed} />
    ))} */}
    <Subtitle>{props.title}</Subtitle>
    <Small>{props.vendor}</Small>
  </Item>
)

const Gallery = ({ data }) => {
  const products = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Gallery" />

      <List>
        {products.map((product, i) => (
          <Thumbnail
            key={i}
            handle={product.node.handle}
            title={product.node.title}
            vendor={product.node.vendor}
            // images={product.images}
          />
        ))}
      </List>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct(sort: { order: ASC, fields: title }) {
      edges {
        node {
          handle
          id
          title
          vendor
          productType

          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            localFile {
              childImageSharp {
                fixed(width: 1000, traceSVG: { color: "orange" }) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
