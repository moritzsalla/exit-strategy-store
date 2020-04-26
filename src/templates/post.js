import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"

export default function Template({ data }) {
  const { title, vendor, description } = data.shopifyProduct

  return (
    <>
      <SEO title={title} />

      <h1>{title}</h1>

      <h2>{vendor}</h2>

      <h3>{description}</h3>

      <Link to="/"> Home</Link>
    </>
  )
}

export const query = graphql`
  query ProjectPage($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      vendor
      description
    }
  }
`
