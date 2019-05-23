import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavMobileItem = styled.li`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-bottom: 0.1rem solid ${props => props.theme.white};

  a {
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    color: ${props => props.theme.greyLight};
    font-size: 1.8rem;
    text-align: center;

    &:hover {
      color: ${props => props.theme.rawSienna};
    }

    &:last-of-type {
      border-bottom: 0 solid transparent !important;
    }
  }
`

class NavMobileItem extends Component {
  render() {
    return (
      <StyledNavMobileItem>
        <Link to={this.props.object_slug}>{this.props.title}</Link>
      </StyledNavMobileItem>
    )
  }
}

export default NavMobileItem
