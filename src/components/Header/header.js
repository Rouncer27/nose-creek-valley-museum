import React, { Component } from "react"
import styled from "styled-components"

import NavTop from "./NavTop"
import NavBottom from "./NavBottom"
import NavMobile from "./NavMobile"
import SocialFollowButtons from "../Templates/SocialFollowButtons"

const MainHeader = styled.header`
  display: block;
  position: relative;
  width: 100%;
  z-index: 99999999999;

  @media (min-width: ${props => props.theme.bpTablet}) {
    position: relative;
  }

  .mainheader__overlay {
    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        ${props => props.theme.grape} 0%,
        ${props => props.theme.grape} 25%,
        ${props => props.theme.deepSea} 25%,
        ${props => props.theme.deepSea} 100%
      );
      opacity: 0.9;
      z-index: 9999;
    }
  }

  &.hero-header-page {
    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      .mainheader__overlay {
        opacity: 0;
      }
    }
  }
`

const MainNavigation = styled.nav`
  display: none;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 4rem;
  z-index: 99999;

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 110rem;
  }

  @media (min-width: ${props => props.theme.bpDeskmd}) {
    max-width: 150rem;
  }
`

class Header extends Component {
  render() {
    let heroPage = false
    const splitURL = this.props.location.split("/")
    const slug =
      splitURL.slice(1, 2).join("") === "" ? "/" : splitURL.slice(1, 2).join("")
    if (
      slug === "/" ||
      slug === "experience" ||
      slug === "special-exhibits" ||
      slug === "past-exhibits" ||
      slug === "programs" ||
      slug === "support" ||
      slug === "about" ||
      slug === "stories" ||
      slug === "connect"
    ) {
      heroPage = " hero-header-page"
    }

    return (
      <MainHeader className={`mainheader${heroPage}`}>
        <div className="mainheader__wrapper">
          <MainNavigation>
            <NavTop location={this.props.location} />
            <NavBottom location={this.props.location} />
            <SocialFollowButtons />
          </MainNavigation>
          <NavMobile location={this.props.location} />
          <div className="mainheader__overlay" />
        </div>
      </MainHeader>
    )
  }
}

export default Header
