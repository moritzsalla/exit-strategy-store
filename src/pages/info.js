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
    margin-bottom: 3rem;

    @media (max-width: ${Mobile}) {
      margin-bottom: 1.5rem;
    }
  }
`

const Large = styled(Title)`
  font-size: 5vw;
  letter-spacing: -0.2vw;
  padding-bottom: 0;

  @media (max-width: ${Mobile}) {
    letter-spacing: -0.1vw;
    line-height: 1.2;
    font-size: 1.75rem;
    hyphens: auto;
  }
`

const FrameImg = styled(Img)`
  margin: 0.5rem 0.5rem 0 0;
  outline: ${StrokeWeight} solid ${Orange};
`

const Info = ({ data }) => {
  const policies = data.allShopifyShopPolicy.edges

  return (
    <Layout>
      <SEO title="Info" />

      <Section>
        <Large>
          We are FORGETFUL NUMBER, the collective of 39 (adjust) visual artists
          who are graduating from the Photography department of the Royal
          Academy of Art, The Hague (NL). To make sure we all arrive safely at
          our final destinations, we would like to kindly ask for your support
          by purchasing one of our exclusive prints.
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
          <FrameImg fixed={image.node.childImageSharp.fixed} />
        ))}
        <br />
        <br />
        <Paragraph>2. Black Wood</Paragraph>
        {data.blackFrame.edges.map(image => (
          <FrameImg fixed={image.node.childImageSharp.fixed} />
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
        <Paragraph small>
          Design by Rudi van Delden, Jan Egbers & Moritz Salla.
          <br />
          Code by Moritz Salla & Mark Kvetny
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
