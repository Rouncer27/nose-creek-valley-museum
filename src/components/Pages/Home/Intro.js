import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import { BigHeadlines } from "../../../components/styles/Commons/Titles"

const IntroStyled = styled.section`
  position: relative;
  width: 100%;

  .intro__background {
    position: absolute;
    top: 0;
    left: 60%;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.grape};
    opacity: 0.95;
    z-index: 1;
  }

  .intro__content {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(60% - 6rem);
      margin: 0 3rem;
      padding: 5rem 2.5rem;
    }

    &--title {
      h2 {
        font-family: ${props => props.theme.fontSec};
        line-height: 1.25;
      }

      h2:first-of-type {
        margin-bottom: 2rem;
        color: ${props => props.theme.deco};
        font-style: italic;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }

      h2:last-of-type {
        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 5rem;
        }
      }
    }

    &--paragraphs {
      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }
  }

  .intro__hours {
    position: relative;
    width: 100%;
    z-index: 5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(40% - 6rem);
      margin: 0 3rem;
      padding: 10rem 5rem;
    }

    h3 {
      margin-bottom: 2rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
      }
    }

    &--details {
      p {
        margin-bottom: 2rem;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 100;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
    }

    &--location {
      p {
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: 100;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
    }
  }
`

class Intro extends Component {
  render() {
    return (
      <IntroStyled className="intro">
        <FullScreenWrapper className="intro__wrapper">
          <div className="intro__content">
            <div className="intro__content--title">
              <h2>{this.props.topTitle}</h2>
              <h2>{this.props.mainTitle}</h2>
            </div>
            <div
              className="intro__content--paragraphs"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          </div>

          <div className="intro__hours">
            <div className="intro__hours--title">
              <h3>/ Museum Hours </h3>
            </div>
            <div
              className="intro__hours--details"
              dangerouslySetInnerHTML={{ __html: this.props.hours }}
            />
            <div
              className="intro__hours--location"
              dangerouslySetInnerHTML={{ __html: this.props.location }}
            />
          </div>
        </FullScreenWrapper>
        <div className="intro__background" />
      </IntroStyled>
    )
  }
}

export default Intro
