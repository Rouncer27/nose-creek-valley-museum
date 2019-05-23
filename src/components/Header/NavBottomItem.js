import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavBottomItemStyled = styled.li`
  display: inline-block;
  margin: 0 1.5rem;
  padding: 1rem 2rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin: 0 0.5rem;
    padding: 1rem;
    font-size: 1.6rem;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    margin: 0 1.5rem;
    padding: 1rem 2rem;
    font-size: 1.8rem;
  }

  a {
    transition: all 0.3s ease;
    color: ${props => props.theme.white};
    text-transform: uppercase;
    opacity: 0.75;

    &:hover {
      color: ${props => props.theme.kenyanCopper};
    }
  }

  a.active-menu-item {
    color: ${props => props.theme.deco};
    font-style: italic;
    font-weight: 700;
    opacity: 1;
  }
`

class NavBottomItem extends Component {
  render() {
    const slug =
      this.props.object_slug === "home" ? "/" : this.props.object_slug
    const activePage = slug === this.props.location ? "active-menu-item" : ""
    return (
      <NavBottomItemStyled>
        <Link to={slug} className={activePage}>
          {this.props.title}
        </Link>
      </NavBottomItemStyled>
    )
  }
}

export default NavBottomItem
