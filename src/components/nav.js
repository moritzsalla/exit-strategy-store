import React, { useContext } from "react"
import styled from "styled-components"
import { StyledLink, Small } from "./type"
import {
  White,
  Orange,
  StrokeWeight,
  BorderRadius,
  Mobile,
  Tablet,
} from "./variables"
import { ShopifyContext } from "./shopifyProvider"
import { Grey } from "./variables"

const Header = styled.header`
  z-index: 100;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  background: ${White};
  padding: 1rem 1.5rem;
  margin: 1rem;
  border: ${StrokeWeight} solid ${Orange};
  border-radius: ${BorderRadius};

  @media (max-width: ${Mobile}) {
    padding: 0.5rem 0.75rem;
    margin: 0.5rem;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  z-index: 100;
`

const NavBar = styled.nav`
  display: flex;
  align-items: center;
`

const NavLink = styled(Small)`
  font-size: 2.5rem;
  letter-spacing: 0.15rem;
  margin-left: 1.5vw;

  span {
    /* -webkit-text-stroke-width: ${StrokeWeight};
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: ${Orange}; */
    color: ${Grey};
  }

  @media (max-width: ${Tablet}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 1rem;
  }
`

const Logo = styled.h1`
  font-weight: bold;
  color: ${Orange};
  font-style: italic;
  letter-spacing: 0.2rem;
  font-size: 2rem;

  span {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    letter-spacing: 0.16rem;
  }
`

const Nav = () => {
  const context = useContext(ShopifyContext)

  return (
    <Wrapper>
      <Header>
        <Logo as={StyledLink} to="/">
          Exit&nbsp;Strategies
          <br />
          <span>How to Graduate in an Emergency</span>
        </Logo>

        <NavBar>
          <NavLink as={StyledLink} to="/about/">
            About
          </NavLink>
          <NavLink as={StyledLink} to="/gallery/">
            Gallery
          </NavLink>
          <NavLink as={StyledLink} to="/cart/">
            Cart
            <span>
              {(context && context.store.checkout.lineItems.length) || null}
            </span>
          </NavLink>
        </NavBar>
      </Header>
    </Wrapper>
  )
}

export default Nav
