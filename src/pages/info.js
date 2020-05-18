import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { Paragraph, Title, Subtitle, StyledLink } from "../components/type"
import { Mobile, StrokeWeight, Orange } from "../components/variables"
import styled from "styled-components"
import macro from "styled-components/macro"

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    /* border-bottom: ${StrokeWeight} solid ${Orange}; */
  }
`

const Large = styled(Title)`
  font-size: 5vw;
  letter-spacing: -0.2vw;

  @media (max-width: ${Mobile}) {
    font-size: 1.5rem;
  }
`

const Info = ({ data }) => {
  const policies = data.allShopifyShopPolicy.edges

  return (
    <Layout>
      <SEO title="Info" />

      <Section>
        <Large>
          We are EXIT STRATEGY → A collective of 40 graduating BA photography
          students, who are preparing their EXIT STRATEGIES to depart from the
          Royal Academy of Art in The Hague
        </Large>
      </Section>

      <Section>
        <Subtitle>Shipping Costs</Subtitle>
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
      </Section>

      <a
        name="frames"
        css={`
          display: block;
          position: relative;
          top: -20vh;
          visibility: hidden;
        `}
      />

      <Section>
        <Subtitle>Frame Options</Subtitle>
        <Paragraph>1. White Wood</Paragraph>
        {data.whiteFrame.edges.map(image => (
          <Img fixed={image.node.childImageSharp.fixed} />
        ))}
        <br />
        <br />
        <Paragraph>2. Black Wood</Paragraph>
        {data.blackFrame.edges.map(image => (
          <Img fixed={image.node.childImageSharp.fixed} />
        ))}
        <br />
        <br />
        <Paragraph>3. No Frame</Paragraph>
      </Section>

      <Section>
        <Subtitle>Issues</Subtitle>
        <Paragraph>
          If there is an issue with your order, please contact{" "}
          <StyledLink as="a" href="mailto:info@forgetfulnumber.com">
            info@forgetfulnumber.com
          </StyledLink>
          . We will reach out to you as soon as possible. Alternatively, send us
          a message on{" "}
          <StyledLink as="a" href="https://www.facebook.com/forgetfulnumber/">
            Facebook Messenger
          </StyledLink>
          .
        </Paragraph>
      </Section>

      {policies.map(policy => (
        <Section id={policy.node.id}>
          <Subtitle>{policy.node.title}</Subtitle>
          <Paragraph>{policy.node.body}</Paragraph>
        </Section>
      ))}

      <Section>
        <Paragraph>
          Design: Rudi van Delden, Jan Egberts & Moritz Salla
          <br />
          Code: Moritz Salla & Mark Kvetny
        </Paragraph>
      </Section>
    </Layout>
  )
}

export default Info

export const query = graphql`
  query {
    allShopifyShopPolicy {
      edges {
        node {
          title
          body
          id
        }
      }
    }
    whiteFrame: allFile(filter: { relativeDirectory: { eq: "white-frame" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    blackFrame: allFile(filter: { relativeDirectory: { eq: "black-frame" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
