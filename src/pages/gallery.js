import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax } from "gsap"

import SEO from "../components/seo"
import Layout from "../layouts/default"

const Wrapper = styled.div`
  background: grey;
  height: 50vh;
  width: 100vw;
  overflow-x: auto;
  white-space: nowrap;
`

const Image = styled.div`
  display: inline-block;
  outline: 1px solid black;
  height: inherit;
  width: 500px;
`

class Gallery extends React.Component {
  constructor() {
    super()

    this.myElement = null
    this.myTween = null
  }

  componentDidMount() {
    // const divWidth = this.myElement.scrollWidth

    let xPos = 0

    TweenMax.to(xPos, 20, {
      xPos: 400,
    })

    console.log(xPos)

    //this.myTween.scroll(x, 0)
  }

  render() {
    return (
      <>
        <Layout>
          <SEO title="Gallery" />
          <h1>Gallery</h1>

          <Wrapper ref={div => (this.myElement = div)}>
            <Image>1</Image>
            <Image>2</Image>
            <Image>3</Image>
            <Image>3</Image>
            <Image>3</Image>
            <Image>2</Image>
            <Image>3</Image>
            <Image>3</Image>
            <Image>3</Image>
          </Wrapper>

          <Link to="/">Take me Home</Link>
        </Layout>
      </>
    )
  }
}

export default Gallery
