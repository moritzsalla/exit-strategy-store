import React from "react"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Title, Paragraph, White, StyledLink } from "../components/type"
import { Mobile } from "../components/variables"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10vh;
  color: ${White};

  @media (max-width: ${Mobile}) {
    display: block;
    margin: 1rem;
    text-align: left;
    padding-top: 0;
  }
`

const InnerWrapper = styled.div`
  max-width: 70vw;

  @media (max-width: ${Mobile}) {
    max-width: 100vw;
  }
`

const Bold = styled.span`
  font-weight: bold;
`

const Link = styled(StyledLink)`
  text-decoration: underline;
  font-weight: ${props => (props.plain ? "normal" : "bold")};
  &:hover {
    text-decoration: underline;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Exit Strategies" />
      <Wrapper>
        <InnerWrapper>
          <Title>
            That was it!
            <br />
            Our print sale has officially ended—thank you for your support
          </Title>

          <Paragraph css="max-width: none; padding-top: 4vh; max-width: 70ch; margin: 0 auto;">
            <Bold>
              We have ramped up the production of your prints and will be
              shipping them shortly 📬
            </Bold>{" "}
            In the mean time, follow us on <Link bold>Instagram</Link> and{" "}
            <Link bold>Facebook</Link>, or come to our graduation show at the
            Royal Academy of Art The Hague in September.
          </Paragraph>
        </InnerWrapper>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
