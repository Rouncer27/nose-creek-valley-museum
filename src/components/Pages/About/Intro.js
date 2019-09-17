import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const IntroStyled = styled.section`
  position: relative;
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding-bottom: 10rem;
  }

  .intro__wrapper {
    padding: 0;
    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: row-reverse;
      padding: 2rem;
    }
  }

  .intro__background {
    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: 0;
      right: auto;
      bottom: auto;
      left: 0%;
      width: 30%;
      height: 100%;
      background: ${props => props.theme.grape};
      opacity: 0.95;
      z-index: 1;
    }
  }

  .intro__content {
    width: 100%;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(70% - 10rem);
      margin-right: 6rem;
      margin-left: 4rem;
      padding: 5rem;
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
        font-weight: normal;
        font-size: 2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2.2rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.2rem;
        }
      }
    }
  }

  .intro__hours {
    position: relative;
    width: 100%;
    padding: 2rem;
    z-index: 5;
    background: ${props => props.theme.grape};
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(30% - 8rem);
      margin-right: 2rem;
      margin-left: 6rem;
      padding: 10rem 4rem;
      background: transparent;
      text-align: left;
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
        font-weight: normal;
        font-size: 2rem;
        opacity: 0.8;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }
      }
    }

    &--location {
      p {
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: normal;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
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
              dangerouslySetInnerHTML={{ __html: this.props.mainContent }}
            />
          </div>

          <div className="intro__hours">
            <div className="intro__hours--title">
              <h3>/ {this.props.sideTitle} </h3>
            </div>
            <div
              className="intro__hours--details"
              dangerouslySetInnerHTML={{ __html: this.props.sideContent }}
            />
          </div>
        </FullScreenWrapper>
        <div className="intro__background" />
      </IntroStyled>
    )
  }
}

export default Intro
