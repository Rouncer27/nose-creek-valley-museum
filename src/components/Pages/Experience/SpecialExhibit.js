import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const SpecialExhibitStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .specialex__slider {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

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
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      width: 100%;
      height: 60rem;
      min-height: 70rem;
      z-index: 100;

      @media (min-width: ${props => props.theme.bpTablet}) {
        justify-content: center;
        flex-direction: row;
        min-height: 60rem;
        max-height: 60rem;
      }

      &:focus {
        outline: none !important;
      }

      &--image {
        position: relative;
        width: 100%;
        height: 40%;

        @media (min-width: ${props => props.theme.bpTablet}) {
          width: 50%;
          height: 100%;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
        }

        .gatsby-image-wrapper {
          position: absolute !important;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          overflow: visible;

          @media (min-width: ${props => props.theme.bpTablet}) {
            height: 100% !important;
          }
        }

        &--title {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          z-index: 10;

          p {
            margin: 0;
            color: ${props => props.theme.white};
            font-family: ${props => props.theme.fontTer};
            text-transform: uppercase;
          }

          h2 {
            margin: 0;
            color: ${props => props.theme.white};
            font-family: ${props => props.theme.fontPrim};
            font-weight: 700;

            @media (min-width: ${props => props.theme.bpDesksm}) {
              font-size: 2.8rem;
            }
          }
        }
      }

      &--info {
        width: 100%;
        padding: 2rem 4rem 6rem;
        text-align: center;

        @media (min-width: ${props => props.theme.bpTablet}) {
          padding: 4rem;
          width: 50%;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
        }

        .special-category {
          margin: 0;
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontSec};
          font-size: 3rem;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 4rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 4rem;
          }
        }

        h2 {
          margin: 0;
          margin-top: 1.5rem;
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 700;
          font-size: 1.8rem;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.8rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }

        .special-opening {
          margin: 0;
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 700;
          font-size: 1.4rem;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.8rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }

        .special-excerpt {
          width: 100%;
          max-width: 35rem;
          margin: 1rem auto 0;

          @media (min-width: ${props => props.theme.bpTablet}) {
            margin: 2rem auto 0;
          }

          p {
            color: ${props => props.theme.paraGrey};
            font-family: ${props => props.theme.fontTer};
            font-weight: 100;
            font-size: 1.4rem;

            @media (min-width: ${props => props.theme.bpTablet}) {
              font-size: 1.6rem;
            }
          }
        }

        .special-details {
          width: 100%;
          max-width: 35rem;
          margin: 1rem auto 0;

          @media (min-width: ${props => props.theme.bpTablet}) {
            display: block;
          }

          p {
            color: ${props => props.theme.deepSea};
            font-family: ${props => props.theme.fontTer};
            font-weight: 500;
            line-height: 1.25;

            @media (min-width: ${props => props.theme.bpDesksm}) {
              font-size: 2rem;
            }
          }
        }

        .special-learnmore {
          a {
            position: relative;
            transition: all 0.3s ease-in;
            color: ${props => props.theme.deepSea};
            font-family: ${props => props.theme.fontPrim};
            font-weight: 700;
            line-height: 1.18;

            @media (min-width: ${props => props.theme.bpDesksm}) {
              font-size: 3rem;
            }

            .btn-circle {
              display: block;
              position: absolute;
              bottom: -5rem;
              right: 0%;
              left: 0%;
              width: 3.2rem;
              height: 3.2rem;
              margin: auto;
              transform: translate(0%, -50%);
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
                font-size: 2.2rem;
                font-weight: 100;
                content: "\f178";
              }
            }

            &:hover {
              color: ${props => props.theme.deco};
              .btn-circle {
                color: ${props => props.theme.deco};
                &::before {
                  border-color: ${props => props.theme.deco};
                }
                &::after {
                  color: ${props => props.theme.deco};
                }
              }
            }
          }
        }
      }
    }
  }
`

class SpecialExhibit extends Component {
  render() {
    return (
      <SpecialExhibitStyled className="specialex">
        <Slider
          className="specialex__slider"
          slidesToShow={1}
          autoplay={false}
          autoplaySpeed={10000}
          speed={750}
          arrows={false}
          vertical={true}
          adaptiveHeight={false}
          centerPadding={`0px`}
          centerMode={false}
          dots={true}
        >
          {this.props.speicalExhibits.map((exhibit, index) => {
            console.log(exhibit)
            return (
              <div key={index} className="specialex__slider--item">
                <div className="specialex__slider--item--image">
                  <Img
                    fluid={
                      exhibit.node.acf._ncvm_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={exhibit.node.acf._ncvm_featured_image.alt_text}
                  />
                  <div className="specialex__slider--item--image--title">
                    <p>Special Exhibit</p>
                    <h2>{exhibit.node.acf._ncvm_title}</h2>
                  </div>
                </div>
                <div className="specialex__slider--item--info">
                  <p className="special-category">Special Exhibit</p>
                  <h2>{exhibit.node.acf._ncvm_title}</h2>
                  <p className="special-opening">Exhibit Opening - </p>
                  <div
                    className="special-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: exhibit.node.acf._ncvm_excerpt,
                    }}
                  />
                  <div
                    className="special-details"
                    dangerouslySetInnerHTML={{
                      __html: exhibit.node.acf._ncvm_details,
                    }}
                  />

                  <div className="special-learnmore">
                    <Link to={`/special-exhibits/${exhibit.node.slug}`}>
                      Learn More <span className="btn-circle" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </SpecialExhibitStyled>
    )
  }
}

export default SpecialExhibit
