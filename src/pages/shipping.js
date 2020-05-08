import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Paragraph } from "../components/type"

const Shipping = () => {
  return (
    <Layout>
      <SEO title="Shipping" />
      <Paragraph>Information about shipping</Paragraph>
    </Layout>
  )
}

export default Shipping
