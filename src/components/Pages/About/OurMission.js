import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import glasses from "../../../images/about/ncvm-glasses-vintage.png"

const OurMissionStyled = styled.section`
  position: relative;
  z-index: 10;

  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: -10rem;
  }

  .mission__glasses {
    position: absolute;
    top: 24rem;
    right: -15rem;
    width: 30rem;
    height: 10rem;
    background-image: url(${glasses});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      top: -16rem;
      right: -15rem;
      width: 50rem;
      height: 16rem;
    }
  }

  .mission__wrapper {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
      padding: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }
  }

  .mission__container {
    position: relative;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
      height: 70rem;
      margin-right: 5rem;
      margin-left: 5rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
      height: 50rem;
    }

    &--image {
      width: 100%;

      .gatsby-image-wrapper {
        @media (min-width: ${props => props.theme.bpTablet}) {
          position: absolute !important;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }

        img {
          object-fit: cover;
          object-position: center center;
        }
      }
    }

    &--content {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;
      padding: 6rem 2rem;
      background: ${props => props.theme.kenyanCopper};

      @media (min-width: ${props => props.theme.bpTablet}) {
        position: absolute;
        right: 0;
        bottom: 0;
        max-width: 50%;
        padding: 5rem 2rem;
      }
    }

    h2 {
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
      color: ${props => props.theme.rawSienna};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;

      @media (min-width: ${props => props.theme.bpTablet}) {
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.6rem;
      }
    }

    &--paragraphs {
      p {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;
        opacity: 0.8;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }
    }
  }

  .mission__titles {
    width: 100%;
    padding: 4rem 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 0;
    }
    h2 {
      width: 100%;
      color: ${props => props.theme.neptune};
      font-family: ${props => props.theme.fontSec};
      font-size: 3rem;
      text-align: center;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3.4rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7.4rem;
      }

      span {
        display: block;
      }
    }
  }
`

class OurMission extends Component {
  render() {
    return (
      <OurMissionStyled className="mission">
        <div className="mission__wrapper">
          <div className="mission__container">
            <div className="mission__container--image">
              <Img fluid={this.props.imgFluid} alt={this.props.imgAlt} />
            </div>
            <div className="mission__container--content">
              <h2>/ Our Mission...</h2>
              <div
                className="mission__container--paragraphs"
                dangerouslySetInnerHTML={{ __html: this.props.mainContent }}
              />
            </div>
          </div>
          <div className="mission__glasses" />
          <div className="mission__titles">
            <h2>
              {this.props.titles.map((title, index) => {
                return <span key={index}>{title.line}</span>
              })}
            </h2>
          </div>
        </div>
      </OurMissionStyled>
    )
  }
}

export default OurMission
