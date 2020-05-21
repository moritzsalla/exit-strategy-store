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

const Bold = styled.span`
  font-weight: bold;
`

const Info = ({ data }) => {
  return (
    <Layout>
      <SEO title="Info" />

      <Section>
        <Large css="padding-bottom: 2rem;">
          Welcome to the online print sale of the photography to-be graduates of
          the Royal Academy of Art, The Hague!
        </Large>

        <Paragraph css="font-weight: bold;">
          The print sale is open from May 21 4PM — May 28 8PM
          <br />
          <br />
        </Paragraph>

        <Paragraph>
          For this event only we would like to give you a sneak peek into our
          graduation projects with a special edition of prints, curated by{" "}
          <Bold>
            Alessia Glaviano, Brand Visual Director of Vogue Italia and L’Uomo
            Vogue
          </Bold>
          . The prints are available for affordable prices and different print
          sizes and frames. They will be custom made, fitting your wishes.
          <br />
          <br />
          By purchasing a print, you will not only support our physical
          exhibition in the academy in September 2020, you will also support{" "}
          <StyledLink
            as="a"
            href="https://kinder.world/"
            css="font-weight: bold;"
          >
            Kinder
          </StyledLink>
          , an organization that investigates the charities in the world that
          are the most in need. 10% of our profits will be donated to a selected
          group of charities in relation to COVID–19.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Who Are We?</Subtitle>
        <Paragraph>
          We are FORGETFUL NUMBER, a collective of 39 visual artists who are
          graduating from the Photography department of the Royal Academy of
          Art, The Hague. What binds us as a collective is our common task of
          challenging the medium of photography. We believe that art should be
          public and accessible to a broad variety of communities. From this
          core value, as a point of departure, we present a diverse approach to
          narration of stories that we believe deserve to have a voice. The
          videos that we show next to each print give you glimpses on every
          graduation project.
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
        <Subtitle>Frame Options, Prices & Editions</Subtitle>
        <Paragraph>
          All prints are available in A5 and A3 in an edition of 30 for each
          format.
          <br />
          <br />
          Prints and frames by{" "}
          <StyledLink as="a" href="https://www.fotolabkiekie.com/">
            Fotolab Kiekie
          </StyledLink>
          .
        </Paragraph>
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
        <div css="display: inline-flex; flex-wrap: wrap;">
          {data.whiteFrame.edges.map(image => (
            <Lightbox key={image.node.id}>
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
        <div css="display: inline-flex; flex-wrap: wrap;">
          {data.blackFrame.edges.map(image => (
            <Lightbox key={image.node.id}>
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
              <td>Included</td>
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

      <Section>
        <Subtitle>
          <StyledLink to="/terms/">
            Terms of Service, Refund Policy & Privacy Policy↗
          </StyledLink>
        </Subtitle>
      </Section>
    </Layout>
  )
}

export default Info

export const query = graphql`
  query {
    whiteFrame: allFile(filter: { relativeDirectory: { eq: "white-frame" } }) {
      edges {
        node {
          id
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
          id
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
