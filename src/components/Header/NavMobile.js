import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import NavMobileItem from "./NavMobileItem"

const NavMobileStyled = styled.div`
  display: none;
`

class NavMobile extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: { eq: "Mobile Menu" }) {
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
            <NavMobileStyled>
              <ul>
                {menuItems.map(item => {
                  return <NavMobileItem key={item.wordpress_id} {...item} />
                })}
              </ul>
            </NavMobileStyled>
          )
        }}
      />
    )
  }
}

export default NavMobile
