import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import dino from "../../../images/icons/dino.png"
import fossile from "../../../images/icons/fossile.png"
import gallery from "../../../images/icons/gallery.png"
import map from "../../../images/icons/map.png"
import pillars from "../../../images/icons/pillars.png"

const GuideToursStyled = styled.section`
  margin-top: 0;
  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: -10rem;
  }

  .gtours__wrapper {
    @media (min-width: ${props => props.theme.bpDeskmd}) {
      padding-right: 10rem;
      padding-left: 10rem;
    }
  }

  .gtours__title {
    width: 100%;
    padding: 0 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      text-align: right;
    }

    h1 {
      margin: 1rem 0 3rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-weight: 700;
      font-size: 4rem;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin: 1rem 0;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7rem;
      }
    }
  }

  .gtours__tour {
    width: 100%;
    margin: 3.5rem 1.5rem;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.3333% - 3rem);
      margin: 2rem 1.5rem;
    }

    &--image {
      position: relative;

      h3 {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0;
        padding: 1rem 2rem;
        background: ${props => props.theme.neptune};
        color: ${props => props.theme.white};
        text-align: center;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }
      }
    }

    &--name {
      position: relative;
      padding: 5rem 4rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 7.5rem 4rem;
      }

      h3 {
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 700;
        font-size: 2.4rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2.8rem;
        }
      }
    }

    &--icon {
      position: absolute;
      top: -3.5rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: 7rem;
      height: 7rem;
      background-color: ${props => props.theme.neptune};
      border-radius: 50%;
      overflow: hidden;

      &::after {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4rem;
        height: 4rem;
        transform: translate(-50%, -50%);

        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        content: "";
        z-index: 1;
      }

      &--pillar {
        &::after {
          background-image: url(${pillars});
        }
      }

      &--gallery {
        &::after {
          background-image: url(${gallery});
        }
      }

      &--map {
        &::after {
          background-image: url(${map});
        }
      }

      &--fossile {
        &::after {
          background-image: url(${fossile});
        }
      }

      &--dinosaur {
        &::after {
          background-image: url(${dino});
        }
      }
    }
  }
`

class GuideTours extends Component {
  render() {
    return (
      <GuideToursStyled id="guidedTours" className="gtours">
        <FullScreenWrapper className="gtours__wrapper">
          <div className="gtours__title">
            <h1>Guide Tours</h1>
          </div>

          {this.props.tours.map((tour, index) => {
            return (
              <div key={index} className="gtours__tour">
                <div className="gtours__tour--image">
                  <Img
                    fluid={tour.featured_image.localFile.childImageSharp.fluid}
                    alt={tour.featured_image.alt_text}
                  />
                  <h3>{tour.tour_type}</h3>
                </div>
                <div className="gtours__tour--name">
                  <h3>{tour.name}</h3>
                  <div
                    className={`gtours__tour--icon gtours__tour--icon--${
                      tour.icon
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </FullScreenWrapper>
      </GuideToursStyled>
    )
  }
}

export default GuideTours
