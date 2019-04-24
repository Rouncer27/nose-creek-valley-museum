import React, { Component } from "react"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const QuickLinksStyled = styled.section`
  width: 100%;

  .quicklinks__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      justify-content: space-between;
      justify-content: space-evenly;
      padding: 2rem 0;
    }
  }

  .quicklinks__container {
    width: 100%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${props => props.theme.white};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 6rem);
      margin: 2rem 3rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(28%);
      margin: 2rem 0;
    }

    &--image {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-height: 28vw;
        overflow: hidden;
      }
    }

    &--content {
      padding: 7.5rem 1.5rem 1.5rem;

      &--title {
        h2 {
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 700;
          text-align: center;
          line-height: 1.18;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 3rem;
          }
        }
      }

      &--sub {
        margin-top: 2rem;
        margin-bottom: 2rem;
        h3 {
          color: ${props => props.theme.neptune};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          line-height: 1.5;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }

      &--excerpt {
        p {
          color: ${props => props.theme.paraGrey};
          font-family: ${props => props.theme.fontTer};
          font-weight: 300;
          text-align: center;
          line-height: 1.3;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`

class QuickLinks extends Component {
  render() {
    return (
      <QuickLinksStyled className="quicklinks">
        <FullScreenWrapper className="quicklinks__wrapper">
          <div className="quicklinks__container quicklinks__exhibits">
            <div className="quicklinks__container--image">
              <Img
                fluid={this.props.exhibitsImgUrl}
                alt={this.props.exhibitsImgAlt}
              />
            </div>
            <div className="quicklinks__container--content">
              <div className="quicklinks__container--content--title">
                <h2>
                  Current & <br /> Upcoming Exhibits
                </h2>
              </div>
              <div className="quicklinks__container--content--sub">
                <h3>{this.props.exhibitsTitle}</h3>
              </div>
              <div
                className="quicklinks__container--content--excerpt"
                dangerouslySetInnerHTML={{ __html: this.props.exhibitsExcerpt }}
              />
            </div>
          </div>

          <div className="quicklinks__container quicklinks__programs">
            <div className="quicklinks__container--image">
              <Img
                fluid={this.props.programsImgUrl}
                alt={this.props.programsImgAlt}
              />
            </div>
            <div className="quicklinks__container--content">
              <div className="quicklinks__container--content--title">
                <h2>
                  NCVM <br /> Programs
                </h2>
              </div>
              <div className="quicklinks__container--content--sub">
                <h3>{this.props.programsTitle}</h3>
              </div>
              <div
                className="quicklinks__container--content--excerpt"
                dangerouslySetInnerHTML={{ __html: this.props.programsExcerpt }}
              />
            </div>
          </div>

          <div className="quicklinks__container quicklinks__tourist">
            <div className="quicklinks__container--image">
              <Img
                fluid={this.props.touristImgUrl}
                alt={this.props.touristImgAlt}
              />
            </div>
            <div className="quicklinks__container--content">
              <div className="quicklinks__container--content--title">
                <h2>
                  Tourist <br /> Information
                </h2>
              </div>
              <div className="quicklinks__container--content--sub">
                <h3>{this.props.touristTitle}</h3>
              </div>
              <div
                className="quicklinks__container--content--excerpt"
                dangerouslySetInnerHTML={{ __html: this.props.touristExcerpt }}
              />
            </div>
          </div>
        </FullScreenWrapper>
      </QuickLinksStyled>
    )
  }
}

export default QuickLinks
