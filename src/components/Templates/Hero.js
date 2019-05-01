import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroStyled = styled.section`
  overflow: hidden;

  .pagehero__wrapper {
    position: relative;
    min-height: 45rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 65rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      min-height: 90rem;
    }
    z-index: 100;
  }

  .pagehero__tagline {
    position: absolute;
    top: 50%;
    right: 10rem;
    left: 60%;
    height: 50%;
    z-index: 99999;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 50rem;
    }

    &--top {
      margin-bottom: 1rem;

      p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-size: 4rem;
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 5rem;
        }
      }
    }

    &--bot {
      p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.deco};
        span:first-of-type {
          text-transform: uppercase;
        }
        span:last-of-type {
          font-family: ${props => props.theme.fontSec};
          font-style: italic;
          font-weight: 300;
        }
      }
    }
  }

  .pagehero__acronym {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30%;
    height: 75%;
    padding: 0 4rem;
    z-index: 500;

    h2 {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 18.25rem;
      text-align: center;
      line-height: 1;

      span {
        display: block;
      }
    }
  }

  .pagehero__action--title {
    position: absolute;
    right: -6rem;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.deco};
    z-index: 99999;

    h1 {
      display: block;
      width: 100%;
      margin: 0;
      padding: 1.5rem 2rem;
      color: ${props => props.theme.deepSea};
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3.4rem;
      }
    }
  }

  .pagehero__action {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99999;

    a {
      display: inline-block;
      padding: 2.5rem 8rem;
      background: ${props => props.theme.deco};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }

      span:first-of-type {
        text-transform: uppercase;
      }

      span:last-of-type {
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: 300;
      }
    }
  }

  .pagehero__image {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        object-position: center center !important;
      }
    }
  }

  .pagehero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${props => props.theme.grape} 0%,
      ${props => props.theme.grape} 30%,
      ${props => props.theme.deepSea} 30%,
      ${props => props.theme.deepSea} 100%
    );
    opacity: 0.9;
  }
`

class Hero extends Component {
  render() {
    let actionSection = false

    const slug =
      this.props.location.pathname.split("/").join("") === ""
        ? "/"
        : this.props.location.pathname.split("/").join("")

    if (slug === "/") {
      actionSection = (
        <div className="pagehero__action">
          <Link to="/experience">
            <span>Go To / </span>
            <span>Exhibits</span>
          </Link>
        </div>
      )
    } else if (slug === "experience") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Experience Us</h1>
        </div>
      )
    } else if (slug === "programs") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Programs</h1>
        </div>
      )
    } else if (slug === "support") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Support</h1>
        </div>
      )
    } else if (slug === "about") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>About</h1>
        </div>
      )
    } else if (slug === "stories") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Stories</h1>
        </div>
      )
    } else if (slug === "connect") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Connect</h1>
        </div>
      )
    }

    return (
      <HeroStyled className="pagehero">
        <div className="pagehero__wrapper">
          <div className="pagehero__tagline">
            <div
              className="pagehero__tagline--top"
              dangerouslySetInnerHTML={{ __html: this.props.tagline }}
            />
            <div className="pagehero__tagline--bot">
              <p>
                <span>From Arrowheads / </span>
                <span>To Anvils</span>
              </p>
            </div>
            {actionSection && actionSection}
          </div>
          <div className="pagehero__acronym">
            <h2>
              <span>N</span>
              <span>C</span>
              <span>V</span>
              <span>M</span>
            </h2>
          </div>

          <div className="pagehero__image">
            <Img fluid={this.props.imgFluid} alt={this.props.imgalt} />
          </div>
          <div className="pagehero__overlay" />
        </div>
      </HeroStyled>
    )
  }
}

Hero.propTypes = {
  tagline: PropTypes.string,
  imgFluid: PropTypes.object,
  imgalt: PropTypes.string,
}

export default Hero
