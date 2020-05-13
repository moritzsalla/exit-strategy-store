import React from "react"
import styled from "styled-components"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Paragraph, Title, Subtitle } from "../components/type"

const Wrapper = styled.section`
  padding: 4rem;
  max-width: 80ch;
`

const Shipping = () => {
  return (
    <Layout>
      <SEO title="Shipping" />

      <Wrapper>
        <Title>Shipping Costs</Title>
        <Paragraph>
          <table>
            <tr>
              <th>Country</th>
              <th>Price/€</th>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>8.45</td>
            </tr>
            <tr>
              <td>Rest of EU</td>
              <td>18.00</td>
            </tr>
            <tr>
              <td>World Shipping</td>
              <td>29.30</td>
            </tr>
          </table>
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
