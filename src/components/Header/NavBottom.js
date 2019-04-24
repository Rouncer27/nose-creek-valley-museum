import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import NavBottomItem from "./NavBottomItem"

const NavBottomStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`

class NavBottom extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: { eq: "Menu Menu Bottom" }) {
              items {
                wordpress_id
                title
                object_slug
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.wordpressWpApiMenusMenusItems.items
          return (
            <NavBottomStyled>
              {menuItems.map(item => {
                return (
                  <NavBottomItem
                    key={item.wordpress_id}
                    location={this.props.location}
                    {...item}
                  />
                )
              })}
            </NavBottomStyled>
          )
        }}
      />
    )
  }
}

export default NavBottom
