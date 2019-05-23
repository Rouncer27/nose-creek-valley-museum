import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ThankYouStyled = styled.section`
  position: relative;
  margin-bottom: 15rem;
  z-index: 10;

  .thankyou__wrapper {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: ;
    padding: 2rem;
    padding-top: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }
  }

  .thankyou__container {
    position: relative;
    width: 100%;
    max-width: 45rem;
    height: 45rem;
    margin-right: 5rem;
    margin-left: 5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
      height: 70rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 90rem;
      height: 50rem;
    }

    &--image {
      width: 100%;

      .gatsby-image-wrapper {
        position: absolute !important;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

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
      position: absolute;
      right: 0;
      bottom: 0;
      max-width: 50%;
      padding: 5rem 2rem;
      background: ${props => props.theme.grape};
    }

    h2 {
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;

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
`

class ThankYou extends Component {
  render() {
    return (
      <ThankYouStyled id="thankYou" className="thankyou">
        <div className="thankyou__wrapper">
          <div className="thankyou__container">
            <div className="thankyou__container--image">
              <Img fluid={this.props.imgFluid} alt={this.props.imgAlt} />
            </div>
            <div className="thankyou__container--content">
              <h2>/ Thank you</h2>
              <div
                className="thankyou__container--paragraphs"
                dangerouslySetInnerHTML={{ __html: this.props.mainContent }}
              />
            </div>
          </div>
        </div>
      </ThankYouStyled>
    )
  }
}

export default ThankYou
