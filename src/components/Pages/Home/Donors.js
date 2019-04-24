import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const DonorsStyled = styled.section`
  .donors__title {
    width: 100%;

    &--container {
      margin: 2rem auto;
      padding: 10rem 2rem 4rem;
      background: ${props => props.theme.deepSea};
      text-align: center;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: 65rem;
      }

      &--top {
        margin: 0;
        color: ${props => props.theme.deco};

        span:first-of-type {
          text-transform: uppercase;
        }

        span:last-of-type {
          font-family: ${props => props.theme.fontSec};
          font-style: italic;
        }
      }

      &--title {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontSec};
        font-weight: 700;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 6.5rem;
        }
      }

      &--bottom {
        margin: 0;
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
      }
    }
  }

  .donors__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    &--item {
      width: 75%;
      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 33.3333%;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(20% - 8rem);
        margin: 2rem 4rem;
      }
    }
  }
`

class Donors extends Component {
  render() {
    return (
      <DonorsStyled className="donors">
        <FullScreenWrapper className="donors__wrapper">
          <div className="donors__title">
            <div className="donors__title--container">
              <p className="donors__title--container--top">
                <span>Making / </span>
                <span>History</span>
              </p>
              <h2 className="donors__title--container--title">Our Donors</h2>
              <p className="donors__title--container--bottom">
                Your greatness is not what you have, but what you give.
              </p>
            </div>
          </div>
          <div className="donors__logos">
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
                <div className="donors__logos--item" key={index}>
                  {logoDisplay}
                </div>
              )
            })}
          </div>
        </FullScreenWrapper>
      </DonorsStyled>
    )
  }
}

export default Donors
