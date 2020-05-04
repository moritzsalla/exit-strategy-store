import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../layouts/default"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{ marginBottom: "1rem" }}
        alt="logo"
      />
      <h1>Exit Strategies</h1>
      <br />
      <p>
        There's nothing here yet.
        <br />
        Check back soon!
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "favicon.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default IndexPage
