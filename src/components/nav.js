import React from "react"
import styled from "styled-components"
import { StyledLink } from "./type"
import { Black, White, Orange, StrokeWeight, BorderRadius } from "./variables"

const Header = styled.header`
  z-index: 100;
  display: flex;
  font-weight: 900;
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

const NavBar = styled.nav``

const NavLink = styled(StyledLink)`
  color: ${Orange};
  margin-right: 1rem;
`

const Logo = styled.h1`
  color: ${Orange};
`

const Nav = () => (
  <Wrapper>
    <Header>
      <Logo as={StyledLink} to="/">
        Exit Strategy
      </Logo>

      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/gallery/">Gallery</NavLink>
        <NavLink to="/grid/">Departure Board</NavLink>
        <NavLink to="/shipping/">Shipping</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </NavBar>
    </Header>
  </Wrapper>
)

export default Nav
