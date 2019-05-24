import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { BigHeadlines } from "../../../components/styles/Commons/Titles"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"

const CurrentDonorsStyled = styled.section`
  padding: 0 0 5rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0 15rem;
  }

  .currdon__wrapper {
    align-items: center;
    padding: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 105rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      max-width: 115rem;
    }
  }

  .currdon__thanks {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: ${props => props.theme.grape};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 33.33%;
      padding: 0;
      background: transparent;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: 33.33%;
      min-height: 55rem;
    }

    @media (min-width: ${props => props.theme.bpDeskmd}) {
      width: 40%;
    }

    &--message {
      width: 100%;
      padding: 2rem;
      z-index: 5;

      @media (min-width: ${props => props.theme.bpTablet}) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

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
        font-size: 2.2rem;
        line-height: 1.3;
        letter-spacing: normal;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2.2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }

      &--bottom {
        p {
          color: ${props => props.theme.deco};
        }
      }
    }

    &--button {
      width: calc(100%);
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        position: absolute;
        bottom: -8rem;
        right: 0;
      }

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
      @media (min-width: ${props => props.theme.bpTablet}) {
        position: absolute;
        top: 0;
        left: -90%;
        width: 190%;
        height: 100%;
        z-index: 1;
      }

      .gatsby-image-wrapper {
        position: absolute !important;
        width: 90%;
        height: 100%;
        right: 0 !important;
        left: auto !important;
        z-index: 5 !important;
      }

      &--color {
        @media (min-width: ${props => props.theme.bpTablet}) {
          position: absolute;
          top: 0;
          right: 0;
          width: 500%;
          height: 100%;
          background: ${props => props.theme.grape};
          z-index: 1;
        }
      }
    }

    &--background {
      @media (min-width: ${props => props.theme.bpTablet}) {
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
  }

  .currdon__logos {
    width: 100%;
    padding: 2rem 3rem;

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

      h2 {
        font-size: 3rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 4rem;
        }
      }
    }

    &--container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    &--item {
      width: 50%;
      padding: 1.5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 33.33%;
        padding: 1rem;
      }
    }
  }
`

class CurrentDonors extends Component {
  render() {
    return (
      <CurrentDonorsStyled className="currdon">
        <StandardWrapper className="currdon__wrapper">
          <div className="currdon__thanks">
            <div className="currdon__thanks--message">
              <div className="currdon__thanks--title">
                <h2>/ Thank you</h2>
              </div>
              <div
                className="currdon__thanks--paragraph"
                dangerouslySetInnerHTML={{ __html: this.props.contentTop }}
              />
              <div
                className="currdon__thanks--paragraph currdon__thanks--paragraph--bottom"
                dangerouslySetInnerHTML={{ __html: this.props.contentBot }}
              />
              <TwoSpanButtons className="currdon__thanks--button">
                <Link to="">
                  <span>Learn How / </span>
                  <span>Support</span>
                </Link>
              </TwoSpanButtons>
            </div>
            <div className="currdon__thanks--bgimg">
              {/* <Img
                fluid={this.props.bgImage.localFile.childImageSharp.fluid}
                alt={this.props.bgImage.alt_text}
              /> */}
              <div className="currdon__thanks--bgimg--color" />
            </div>
            <div className="currdon__thanks--background" />
          </div>
          <div className="currdon__logos">
            <BigHeadlines className="currdon__logos--title">
              <h2>Donors / Sponsors</h2>
              <p>The uncommon beauty, of common things.</p>
              <p>Charles Eames</p>
            </BigHeadlines>
            <div className="currdon__logos--container">
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
                  <div className="currdon__logos--item" key={index}>
                    {logoDisplay}
                  </div>
                )
              })}
            </div>
          </div>
        </StandardWrapper>
      </CurrentDonorsStyled>
    )
  }
}

export default CurrentDonors
