import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HeroStyled = styled.section`
  overflow: hidden;

  .pagehero__wrapper {
    position: relative;
    min-height: 60rem;

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
    top: calc(30% + 5rem);
    right: 2rem;
    left: 2rem;
    height: 50%;
    z-index: 99999;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: 50%;
      right: 10rem;
      left: 45%;
      width: 50rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      left: 60%;
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
        text-align: center;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 5rem;
          text-align: left;
        }
      }
    }

    &--bot {
      p {
        margin: 0;
        padding: 0;
        color: ${props => props.theme.deco};
        text-align: center;

        @media (min-width: ${props => props.theme.bpTablet}) {
          text-align: left;
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
  }

  .pagehero__acronym {
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    padding: 0 4rem;
    z-index: 500;

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: flex;
      align-items: flex-end;
      top: auto;
      bottom: 0;
      width: 30%;
      height: 75%;
    }

    h2 {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontSec};
      font-size: 7rem;
      text-align: center;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 12rem;
        line-height: 1;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 18.25rem;
        line-height: 1;
      }

      span {
        display: inline;

        @media (min-width: ${props => props.theme.bpTablet}) {
          display: block;
        }
      }
    }
  }

  .pagehero__action--title {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.deco};
    z-index: 99999;

    @media (min-width: ${props => props.theme.bpTablet}) {
      right: 0;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      right: 3rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      right: -3rem;
    }

    @media (min-width: ${props => props.theme.bpDesklg}) {
      right: -6rem;
    }

    h1 {
      display: block;
      width: 100%;
      margin: 0;
      padding: 1.5rem 0.5rem;
      color: ${props => props.theme.deepSea};
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3.4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        padding: 1.5rem 1rem;
      }
    }
  }

  .pagehero__action {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 40rem;
    margin: auto;
    z-index: 99999;

    @media (min-width: ${props => props.theme.bpTablet}) {
      right: -6rem;
      max-width: calc(100% - 6rem);
      margin: 0;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 200%;
    }

    a {
      position: relative;
      display: block;
      padding: 2.5rem 8rem;
      background: ${props => props.theme.deco};
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
        text-align: left;
      }

      span:first-of-type {
        text-transform: uppercase;
      }

      span:last-of-type {
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: 300;
      }

      span.btn-circle {
        display: block;
        position: absolute;
        bottom: 2rem;
        right: 5rem;
        width: 4rem;
        height: 4rem;
        margin: auto;
        transition: all 0.3s ease-in-out;
        color: ${props => props.theme.deepSea};
        text-align: center;

        &::before {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-in-out;
          border: 0.2rem solid ${props => props.theme.deepSea};
          border-radius: 50%;
          content: "";
        }

        &::after {
          display: block;
          position: absolute;
          top: 50%;
          left: 0%;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          font-family: ${props => props.theme.fontAwesome};
          font-size: 3rem;
          font-weight: 100;
          content: "\f178";
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          right: 25rem;
        }
      }

      &:hover {
        color: ${props => props.theme.kenyanCopper};
        background: ${props => props.theme.neptune};

        span {
          color: ${props => props.theme.kenyanCopper};

          &::after,
          &::before {
            color: ${props => props.theme.kenyanCopper};
            border-color: ${props => props.theme.kenyanCopper};
          }
        }
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
      to bottom,
      ${props => props.theme.grape} 0%,
      ${props => props.theme.grape} 30%,
      ${props => props.theme.deepSea} 30%,
      ${props => props.theme.deepSea} 100%
    );
    opacity: 0.9;

    @media (min-width: ${props => props.theme.bpTablet}) {
      background: linear-gradient(
        to right,
        ${props => props.theme.grape} 0%,
        ${props => props.theme.grape} 30%,
        ${props => props.theme.deepSea} 30%,
        ${props => props.theme.deepSea} 100%
      );
    }
  }
`

class Hero extends Component {
  render() {
    let actionSection = false
    const splitURL = this.props.location.pathname.split("/")
    const slug =
      splitURL.slice(1, 2).join("") === "" ? "/" : splitURL.slice(1, 2).join("")

    if (slug === "/") {
      actionSection = (
        <div className="pagehero__action">
          <Link to="/experience">
            <span>Go To / </span>
            <span className="btn-circle" />
            <span>Exhibits</span>
          </Link>
        </div>
      )
    } else if (
      slug === "experience" ||
      slug === "special-exhibits" ||
      slug === "past-exhibits"
    ) {
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
          <h1>Donate</h1>
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
    } else if (slug === "privacy-policy") {
      actionSection = (
        <div className="pagehero__action--title">
          <h1>Privacy Policy</h1>
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
