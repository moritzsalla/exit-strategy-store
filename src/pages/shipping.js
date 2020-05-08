import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Paragraph, Title, Subtitle } from "../components/type"

const Wrapper = styled.section`
  margin: 1rem;
`

const Shipping = () => {
  return (
    <Layout>
      <SEO title="Shipping" />
      <Wrapper>
        <Title>Shipping Costs</Title>
        <Subtitle>Find information about potential orders here.</Subtitle>
        <Paragraph>
          Shipping to The Netherlands: € 8.45
          <br />
          <br />
          <ul>
            <li>Austria € 18.00</li>
            <li>Belgium € 18.00</li>
            <li>Germany € 18.00</li>
            <li>Denmark € 18.00</li>
            <li>Spain € 18.00</li>
            <li>France € 18.00</li>
            <li>United Kingdom € 18.00</li>
            <li>Italy € 18.00</li>
            <li>Luxembourg € 18.00</li>
            <li>Sweden € 18.00</li>
            <li>Rest of Europe € 23.50</li>
            <li>Anywhere else € 29.30</li>
          </ul>
          <br />
          Shipping costs are for mainland destinations only.
          <br />
          <br />
          Due to social distancing measures it is not possible to collect your
          purchase in person.
          <br />
          <br />
          Any other costs or charges such as customs or import duties, customs
          clearance and handling may also apply during the shipment of your lot
          and will be charged to you by the involved party at a later stage if
          applicable.
        </Paragraph>
      </Wrapper>
    </Layout>
  )
}

export default Shipping
