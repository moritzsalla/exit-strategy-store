import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { Paragraph, Title, Subtitle } from "../components/type"
import { Mobile } from "../components/variables"
import styled from "styled-components"

const Large = styled(Title)`
  @media (max-width: ${Mobile}) {
    font-size: 1.5rem;
  }
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />

      <Large>
        We are EXIT STRATEGY → A collective of 40 graduating BA photography
        students, who are preparing their EXIT STRATEGIES to depart from the
        Royal Academy of Art in The Hague
      </Large>

      <Subtitle>Shipping Costs</Subtitle>

      <br />
      <Paragraph as="table">
        <tbody>
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
        </tbody>
      </Paragraph>

      <br />
      <Paragraph>
        Due to social distancing measures it is not possible to collect your
        purchase in person.
        <br />
        <br />
        Any other costs or charges such as customs or import duties, customs
        clearance and handling may also apply during the shipment of your lot
        and will be charged to you by the involved party at a later stage if
        applicable.
      </Paragraph>
    </Layout>
  )
}

export default About
