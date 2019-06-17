import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const ThenNowStyled = styled.section`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  }

  .thennow__collection {
    width: 100%;
    margin-top: 7.5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      margin-top: 0;
      width: 25%;
    }

    &--title {
      padding: 7.5rem 2rem;
      p {
        margin: 0;
        color: ${props => props.theme.neptune};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      h2 {
        margin: 0;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 600;
        text-align: center;
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.6rem;
        }
      }
    }
  }

  .thennow__title {
    position: absolute;
    bottom: 5rem;
    left: 32.5%;
    z-index: 100;

    h2 {
      color: ${props => props.theme.white};

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.6rem;
      }
    }
  }

  .thennow__slider {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      display: flex;
      width: 75%;
    }

    .slick-dots {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center;
      position: absolute;
      top: 0%;
      right: 2rem;
      width: auto;
      height: 100%;
      z-index: 100;

      li {
        display: block;
        margin-bottom: 1rem;
        border-radius: 50%;
        overflow: hidden;

        button {
          &::before {
            background-color: ${props => props.theme.deco};
            color: ${props => props.theme.deco};
            opacity: 1;
          }
        }
      }

      li.slick-active {
        button {
          &::before {
            background-color: ${props => props.theme.rawSienna};
            color: ${props => props.theme.rawSienna};
          }
        }
      }
    }

    &--item {
      display: flex !important;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      height: 60rem;
      min-height: 60rem;
      max-height: 60rem;

      &:focus {
        outline: none !important;
      }

      &--image {
        position: relative;
        width: 100%;
        height: 100%;

        .gatsby-image-wrapper {
          position: absolute !important;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          overflow: visible;

          img {
            object-fit: cover;
          }
        }
      }
    }
  }
`

class ThenNow extends Component {
  render() {
    return (
      <ThenNowStyled className="thennow">
        <div className="thennow__collection">
          <div className="thennow__collection--image">
            <Img fluid={this.props.collImg} alt={this.props.collAlt} />
          </div>
          <div className="thennow__collection--title">
            <p>{this.props.collCat}</p>
            <h2>{this.props.collTitle}</h2>
          </div>
        </div>
        <div className="thennow__title">
          <h2>Then & Now</h2>
        </div>
        <Slider
          className="thennow__slider"
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={10000}
          speed={750}
          arrows={false}
          vertical={true}
          adaptiveHeight={false}
          centerPadding={`0px`}
          centerMode={false}
          dots={true}
        >
          {this.props.images.map((img, index) => {
            return (
              <div key={index} className="thennow__slider--item">
                <div className="thennow__slider--item--image">
                  <Img
                    fluid={img.image.localFile.childImageSharp.fluid}
                    alt={img.alt_text}
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </ThenNowStyled>
    )
  }
}

export default ThenNow
