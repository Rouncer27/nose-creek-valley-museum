import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import NavTopItem from "./NavTopItem"

const NavTopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  border-bottom: 0.15rem solid ${props => props.theme.deco};
`

const NavTopLogo = styled.div`
  width: 100%;
  padding: 1.5rem;
  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 25%;
  }

  .main-home-title {
    font-size: 0;
  }

  .gatsby-image-wrapper {
    max-width: 20rem;
    margin: 0 auto;

    img {
    }
  }
`

const NavTopStyled = styled.ul`
  display: flex;
  align-self: flex-end;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 75%;
  }
`

class NavTop extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: { eq: "Main Menu Top" }) {
              items {
                wordpress_id
                title
                object_slug
              }
            }
            wordpressAcfOptions {
              options {
                _ncvm_main_logo {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const menuItems = data.wordpressWpApiMenusMenusItems.items
          let homePageTitle = this.props.location === "/" ? true : false

          return (
            <NavTopContainer>
              <NavTopLogo>
                {homePageTitle && (
                  <h1 className="main-home-title">
                    Nose Creek Valley Museum: Big History. Little Museum.
                  </h1>
                )}
                <Link to="/">
                  <Img
                    fluid={
                      data.wordpressAcfOptions.options._ncvm_main_logo.localFile
                        .childImageSharp.fluid
                    }
                    alt="Nose Creek Vally Museum"
                  />
                </Link>
              </NavTopLogo>

              <NavTopStyled>
                {menuItems.map(item => {
                  return (
                    <NavTopItem
                      key={item.wordpress_id}
                      location={this.props.location}
                      {...item}
                    />
                  )
                })}
              </NavTopStyled>
            </NavTopContainer>
          )
        }}
      />
    )
  }
}

export default NavTop
