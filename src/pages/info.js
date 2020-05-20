import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts/default"
import SEO from "../components/seo"

import { Paragraph, Title, Subtitle, StyledLink } from "../components/type"
import { Mobile, StrokeWeight, Orange } from "../components/variables"
import styled from "styled-components"
import Lightbox from "../components/post/lightbox"

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
  padding-bottom: 2rem;

  @media (max-width: ${Mobile}) {
    letter-spacing: -0.1vw;
    line-height: 1.2;
    font-size: 1.75rem;
    hyphens: auto;
  }
`

const FrameImg = styled(Img)`
  width: auto;
  height: 200px;
  margin: 0.5rem 0.5rem 0 0;
  outline: ${StrokeWeight} solid ${Orange};
  cursor: zoom-in;
`

const Info = ({ data }) => {
  const policies = data.allShopifyShopPolicy.edges

  return (
    <Layout>
      <SEO title="Info" />

      <Section>
        <Large>
          Dear passenger, on behalf of the crew of Forgetful Number, we would
          like to welcome you on board of our online Exit Strategy to graduate
          from the Photography department of the Royal Academy of Art, The
          Hague. 
        </Large>
        <Paragraph css="font-weight: bold;">
          The print sale will be open from the 21st to the 28th of May 2020
          <br />
          <br />
        </Paragraph>
        <Paragraph>
          We would like to take you on a virtual journey into the process of our
          graduation projects. There was some unexpected turbulence during the
          trip, but all members of our crew have found an exit strategy to
          graduate in an emergency.
          <br />
          <br />
          To make sure we all arrive safely at our final destinations, we would
          like to kindly ask for your support by purchasing one of our exclusive
          prints. For this event only we will offer them at a special,
          affordable price and have them custom made, fitting your wishes.
          <span css="font-weight: bold;">
            The selection of prints is curated by Alessia Glaviano, Brand Visual
            Director of Vogue Italia and L’Uomo Vogue.
          </span>
          <br />
          <br />
          By purchasing a print, you will not only support our graduation
          collective and our physical exhibition in the academy in
          September 2020, you will also support the charity organization{" "}
          <StyledLink
            as="a"
            href="https://kinder.world/"
            css="font-weight: bold;"
          >
            Kinder
          </StyledLink>
          , as 10% of the profits will be donated to this good cause.
          <br />
          <br />
          Thank you for travelling with Forgetful Number and we wish you a
          pleasant and safe journey. Please fasten your seat belts, sit back,
          relax and enjoy the view! 
        </Paragraph>
      </Section>

      <Section>
        <Large>Further Information</Large>
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
        <Paragraph>All prints are available in A5 and A3.</Paragraph>
        <br />

        <Paragraph as="table">
          <tbody>
            <tr>
              <th>Size</th>
              <th>No Frame</th>
              <th>Framed</th>
            </tr>
            <tr>
              <td>A5</td>
              <td>€ 34.99</td>
              <td>€ 94.99</td>
            </tr>
            <tr>
              <td>A3</td>
              <td>€ 49.99</td>
              <td>€ 119.99</td>
            </tr>
          </tbody>
        </Paragraph>
        <br />
        <Paragraph>White Wood</Paragraph>
        <div css="display: inline-flex">
          {data.whiteFrame.edges.map(image => (
            <Lightbox>
              <FrameImg
                as="img"
                src={image.node.childImageSharp.resize.src}
                alt="frame made of white wood"
              />
            </Lightbox>
          ))}
        </div>
        <br />
        <br />
        <Paragraph>Black Wood</Paragraph>
        <div css="display: inline-flex">
          {data.blackFrame.edges.map(image => (
            <Lightbox>
              <FrameImg
                as="img"
                src={image.node.childImageSharp.resize.src}
                alt="frame made of black wood"
              />
            </Lightbox>
          ))}
        </div>
      </Section>

      <Section>
        <Subtitle>Shipping Costs</Subtitle>
        <Paragraph as="table">
          <tbody>
            <tr>
              <th>Country</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>€ 8.45</td>
            </tr>
            <tr>
              <td>Rest of EU</td>
              <td>€ 18.00</td>
            </tr>
            <tr>
              <td>World Shipping</td>
              <td>€ 29.30</td>
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
          Design by{" "}
          <StyledLink as="a" href="http://www.rudivandelden.com/">
            Rudi van Delden
          </StyledLink>
          ,{" "}
          <StyledLink as="a" href="http://janegbers.info/">
            Jan Egbers
          </StyledLink>{" "}
          &{" "}
          <StyledLink as="a" href="https://moritzsalla.info/">
            Moritz Salla
          </StyledLink>
          <br />
          Code by{" "}
          <StyledLink as="a" href="https://moritzsalla.info/">
            Moritz Salla
          </StyledLink>{" "}
          &{" "}
          <StyledLink
            as="a"
            href="https://www.linkedin.com/in/mark-kvetny-54778013a/"
          >
            Mark Kvetny
          </StyledLink>
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
            resize(height: 1000, quality: 60) {
              src
            }
          }
        }
      }
    }
    blackFrame: allFile(filter: { relativeDirectory: { eq: "black-frame" } }) {
      edges {
        node {
          childImageSharp {
            resize(height: 1000, quality: 60) {
              src
            }
          }
        }
      }
    }
  }
`
