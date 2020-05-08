import React from "react"
import styled from "styled-components"
import { StyledLink, Subtitle, Title } from "./type"
import { Black, White } from "./variables"

const Header = styled.header`
  background: ${Black};
  color: ${Black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavBar = styled.nav`
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  user-select: none;
`

const NavLink = styled(StyledLink)`
  color: ${White};
  margin: 1rem;
  // outline: 1px solid red;
  font-size: 1.5rem;

  &:hover {
    color: ${White};
  }
`

const Logo = styled.h1`
  padding: 0;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${White};
  margin: 1rem;
  color: ${White};
  font-size: 2rem;

  &:hover {
    text-decoration: none;
    color: ${White};
  }
`

const Nav = () => (
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
)

export default Nav
