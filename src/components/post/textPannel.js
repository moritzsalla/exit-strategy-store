import React from "react"
import styled from "styled-components"
import { Title, Subtitle } from "../type"
import { Markdown } from "../MarkdownStyles"
import { Mobile, Tablet } from "../variables"

const Series = styled(Subtitle)`
  margin-bottom: 0;
  max-width: 30ch;

  @media (max-width: ${Mobile}) {
    margin-bottom: 0.5rem;
    padding: 0;
  }
`

const Artist = styled(Title)`
  margin-bottom: 2vw;

  @media (max-width: ${Mobile}) {
    margin-bottom: 1.5rem;
  }
`

const Wrapper = styled.div`
  * {
    max-width: 60ch;
    width: 100%;
  }
  padding-left: 4vw;

  @media (max-width: ${Tablet}) {
    padding: 0 0 0 0.75rem;
  }

  @media (max-width: ${Mobile}) {
    padding: 0;
  }
`

const TextPannel = ({ product }) => {
  return (
    <Wrapper>
      <Series>{product.title}</Series>
      <Artist>{product.vendor}</Artist>
      <Markdown dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </Wrapper>
  )
}

export default TextPannel
