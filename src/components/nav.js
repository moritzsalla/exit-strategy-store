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
  box-shadow: 0px 0px 53px 0px rgba(0, 0, 0, 0.1);
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
    flex-direction: column;
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

  @media (max-width: ${Mobile}) {
    border-top: ${StrokeWeight} solid ${Orange};
    padding-top: 2vw;
    margin-top: 2vw;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100%;
  }
`

const NavLink = styled(Small)`
  font-size: 2.5rem;
  letter-spacing: 0.15rem;
  margin-left: 1.5vw;

  span {
    /* -webkit-text-stroke-width: ${StrokeWeight};
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: ${Orange}; */
    font-size: 1.5rem;
    color: ${Grey};

    @media (max-width: ${Mobile}) {
    font-size: 4.5vw;
  }
  }

  @media (max-width: ${Tablet}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${Mobile}) {
    font-size: 5vw;
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
    letter-spacing: 0.19rem;
  }

  &:hover {
    color: ${Orange};
  }

  @media (max-width: ${Mobile}) {
    font-size: 8vw;
    text-align: center;

    span {
      font-size: 3.8vw;
      text-align: center;
      justify-content: center;
      letter-spacing: 0.3vw;
    }
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
          <span>How to Graduate in an Emergeny</span>
        </Logo>

        <NavBar>
          <NavLink as={StyledLink} to="/gallery/">
            Gallery
          </NavLink>
          <NavLink as={StyledLink} to="/info/">
            Info
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
