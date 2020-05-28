import React from "react"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Title, StyledLink, Paragraph } from "../components/type"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />
    <Title>There's Nothing Here</Title>
    <Paragraph>Woops, you have hit an empty page.</Paragraph>
  </Layout>
)

export default NotFoundPage
