import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { BigHeadlines } from "../../../components/styles/Commons/Titles"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"

const DesignationsStyled = styled.section`
  .designations__wrapper {
    align-items: center;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 105rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      max-width: 115rem;
    }
  }

  .designations__thanks {
    position: relative;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 33.33%;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 33.33%;
      min-height: 55rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      width: 40%;
    }

    &--message {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      padding: 2rem;
      transform: translate(-50%, -50%);
      z-index: 5;

      @media (min-width: ${props => props.theme.bpDeskmd}) {
        padding-right: 14rem;
      }
    }

    &--title {
      h2 {
        margin-bottom: 2rem;
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: 100;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
    }

    &--paragraph {
      p {
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 100;
        line-height: 1.3;
        letter-spacing: normal;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }

    &--button {
      position: absolute;
      bottom: -8rem;
      right: 0;
      width: calc(100%);
      text-align: center;

      a {
        display: block;
        padding: 2.5rem 2rem;
        background: ${props => props.theme.deco};
        color: ${props => props.theme.grape};

        &:hover {
          background: ${props => props.theme.white};
          color: ${props => props.theme.deco};
        }
      }
    }

    &--bgimg {
      position: absolute;
      top: 0;
      left: -90%;
      width: 190%;
      height: 100%;
      z-index: 1;

      .gatsby-image-wrapper {
        position: absolute !important;
        width: 90%;
        height: 100%;
        right: 0 !important;
        left: auto !important;
        z-index: 5 !important;
      }

      &--color {
        position: absolute;
        top: 0;
        right: 0;
        width: 500%;
        height: 100%;
        background: ${props => props.theme.grape};
        z-index: 1;
      }
    }

    &--background {
      position: absolute;
      top: 0;
      left: -300%;
      width: 400%;
      height: 100%;
      background: ${props => props.theme.grape};
      opacity: 0.9;
      z-index: 2;
    }
  }

  .designations__logos {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 66.66%;
      padding: 5rem 10rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 66.66%;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      width: 60%;
    }

    &--title {
      width: 100%;
    }

    &--container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    &--item {
      width: 50%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 33.33%;
        padding: 1rem;
      }
    }
  }
`

class Designations extends Component {
  render() {
    return (
      <DesignationsStyled className="designations">
        <StandardWrapper className="designations__wrapper">
          <div className="designations__thanks">
            <div className="designations__thanks--message">
              <div className="designations__thanks--title">
                <h2>/ Thank You</h2>
              </div>
              <div
                className="designations__thanks--paragraph"
                dangerouslySetInnerHTML={{ __html: this.props.thankYou }}
              />
              <TwoSpanButtons className="designations__thanks--button">
                <Link to="">
                  <span>Learn How / </span>
                  <span>Support</span>
                </Link>
              </TwoSpanButtons>
            </div>
            <div className="designations__thanks--bgimg">
              <Img
                fluid={this.props.bgImage.localFile.childImageSharp.fluid}
                alt={this.props.bgImage.alt_text}
              />
              <div className="designations__thanks--bgimg--color" />
            </div>
            <div className="designations__thanks--background" />
          </div>
          <div className="designations__logos">
            <BigHeadlines className="designations__logos--title">
              <h2>Designations</h2>
            </BigHeadlines>
            <div className="designations__logos--container">
              {this.props.logos.map((logo, index) => {
                let logoDisplay = false
                if (logo.url === "") {
                  logoDisplay = (
                    <Img
                      fluid={logo.logo.localFile.childImageSharp.fluid}
                      alt={logo.logo.alt_text}
                    />
                  )
                } else {
                  logoDisplay = (
                    <a target="_blank" href={logo.url}>
                      <Img
                        fluid={logo.logo.localFile.childImageSharp.fluid}
                        alt={logo.logo.alt_text}
                      />
                    </a>
                  )
                }
                return (
                  <div className="designations__logos--item" key={index}>
                    {logoDisplay}
                  </div>
                )
              })}
            </div>
          </div>
        </StandardWrapper>
      </DesignationsStyled>
    )
  }
}

export default Designations
