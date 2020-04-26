import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allShopifyProduct.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <hr />
      {posts.map((post, i) => (
        <Link to={post.node.handle} key={i}>
          {/* {post.node.title} */}
          {/* <Img fluid={post.node.images.localFile.childImageSharp.fluid}></Img> */}
        </Link>
      ))}
      <hr />
      <Link to="/gallery/">Gallery</Link>
      <Link to="/overview/">Overview</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          title
          handle
          images {
            localFile {
              childImageSharp {
                fluid {
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

export default IndexPage
