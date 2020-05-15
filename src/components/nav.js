import React from "react"
import styled from "styled-components"
import { StyledLink } from "./type"
import { White, Orange, StrokeWeight, BorderRadius } from "./variables"

const Header = styled.header`
  z-index: 100;
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  background: ${White};
  padding: 1rem;
  margin: 1rem;
  border: ${StrokeWeight} solid ${Orange};
  border-radius: ${BorderRadius};
  font-size: 2rem;
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

const NavLink = styled(StyledLink)`
  color: ${Orange};

  margin-right: 1.5rem;
  font-size: 1rem;

  /* border-bottom: 0.1rem solid ${Orange}; */
`

const Logo = styled.h1`
  color: ${Orange};
  font-style: italic;
  letter-spacing: 0.25rem;

  span {
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    letter-spacing: 0.1rem;
  }
`

const TagLine = styled.span`
  color: ${Orange};
  font-style: italic;
  letter-spacing: 0.25rem;
`

const Nav = () => (
  <Wrapper>
    <Header>
      <Logo as={StyledLink} to="/">
        Exit Strategy
        <br />
        <span>How to Graduate in an Emergency</span>
      </Logo>

      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/gallery/">Gallery</NavLink>
        <NavLink to="/grid/">Departure Board</NavLink>
        <NavLink to="/shipping/">Shipping</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
        <NavLink to="/cart/">Cart</NavLink>
      </NavBar>

      <TagLine as={StyledLink} to="/about/">
        Online Print Sale
      </TagLine>
    </Header>
  </Wrapper>
)

export default Nav
