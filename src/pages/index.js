import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { Title } from "../components/type"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Title>Home</Title>
    </Layout>
  )
}

export default IndexPage
