import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import gsap, { TweenLite } from "gsap"
import scrollTo from "gsap/ScrollToPlugin"
import { Mobile } from "../components/variables"

gsap.registerPlugin(scrollTo)

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;

  @media (max-width: ${Mobile}) {
    z-index: 10;
  }
`

const Img = styled.img`
  height: 100vh;
  width: auto;
  user-select: none;
`

class ImageScroller extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const container = document.getElementById("container")
    console.log(container.scrollWidth)

    TweenLite.to("#container", 30, {
      scrollTo: {
        x: container.scrollWidth,
        autoKill: true,
      },
      ease: "Linear.easeNone",
    })
  }

  render() {
    return (
      <Wrapper id="container">
        {this.props.products.map((product, j) => (
          <Link key={j} to={`/${product.node.handle}`}>
            {product.node.images[1] && (
              <Img
                src={
                  product.node.images[1].localFile.childImageSharp.resize.src
                }
                loading="lazy"
                alt={product.node.title}
              />
            )}
          </Link>
        ))}
      </Wrapper>
    )
  }
}

export default ImageScroller
