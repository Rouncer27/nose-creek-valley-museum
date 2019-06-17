import React, { useState } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import NavMobileItem from "./NavMobileItem"

const NavMobileStyled = styled.div`
  position: relative;

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: none;
  }

  .mobile-logo {
    position: absolute;
    width: 100%;
    max-width: 20rem !important;
    top: 4rem;
    right: 2rem;
    left: 2rem;
    margin: auto;
    z-index: 1000;

    .gatsby-image-wrapper {
      max-width: 20rem !important;

      img {
        max-width: 20rem !important;
      }
    }
  }
  .mobile-nav {
    position: relative;
    z-index: 1001;

    &__drawer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background: ${props => props.theme.grape};
      overflow-y: scroll;

      &--logo {
        width: 100%;
        max-width: 20rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }

      &--items {
        width: 100%;
      }
    }

    &__button {
      ${props => console.log(props)}
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0.25rem;
      left: 0.25rem;
      width: 5.5rem;
      height: 5.5rem;
      margin: 0 auto;
      padding: 0;
      background: ${props => props.theme.deepSea};
      border: 0.1rem solid ${props => props.theme.white};
      box-shadow: 0.25rem 0.25rem 0.25rem ${props => props.theme.black};
      color: ${props =>
        props.isOpen ? props.theme.deepSea : props.theme.white};
      text-align: center;
      z-index: 99999999;

      &::before,
      &::after {
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        width: 80%;
        height: 0.2rem;
        margin: 0 auto;
        transform: rotate(0);
        transform-origin: center center;
        transition: all 0.2s ease;
        background-color: ${props => props.theme.white};
        content: "";
      }

      &::before {
        top: ${props => (props.isOpen ? "50%" : "1rem")};
        transform: rotate(${props => (props.isOpen ? "135deg" : "0deg")});
      }

      &::after {
        bottom: ${props => (props.isOpen ? "50%" : "1rem")};
        transform: rotate(${props => (props.isOpen ? "-135deg" : "0deg")});
      }

      &:hover {
        cursor: pointer;
        &::before {
          top: ${props => (props.isOpen ? "50%" : "0.5rem")};
        }

        &::after {
          bottom: ${props => (props.isOpen ? "50%" : "0.5rem")};
        }
      }

      &:focus {
        outline: none;
      }

      @media (min-width: ${props => props.theme.bpTablet}) {
        display: none;
      }
    }
  }
`

const NavMobile = props => {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)

  const slideNavOpen = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
  })

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
        return (
          <NavMobileStyled isOpen={isOpen}>
            <div className="mobile-logo">
              <Link to="/">
                <Img
                  fluid={
                    data.wordpressAcfOptions.options._ncvm_main_logo.localFile
                      .childImageSharp.fluid
                  }
                  alt="Nose Creek Vally Museum"
                />
              </Link>
            </div>
            <div className="mobile-nav">
              <button
                className="mobile-nav__button"
                onClick={() => setOpen(!isOpen)}
              >
                Menu
              </button>
              <animated.nav className="mobile-nav__drawer" style={slideNavOpen}>
                <div className="mobile-nav__drawer--logo">
                  <Img
                    fluid={
                      data.wordpressAcfOptions.options._ncvm_main_logo.localFile
                        .childImageSharp.fluid
                    }
                    alt="Nose Creek Vally Museum"
                  />
                </div>
                <ul className="mobile-nav__drawer--items">
                  {menuItems.map(item => {
                    return <NavMobileItem key={item.wordpress_id} {...item} />
                  })}
                </ul>
              </animated.nav>
            </div>
          </NavMobileStyled>
        )
      }}
    />
  )
}

export default NavMobile
