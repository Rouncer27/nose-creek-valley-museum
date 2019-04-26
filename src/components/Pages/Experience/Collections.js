import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CollectionsStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .collectiontop__left {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 25%;
    }
  }

  .collectiontop__left,
  .collectiontop__center {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 25%;
      padding: 0.1rem;
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

  .collectiontop__right {
    position: relative;
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      padding: 0.1rem;
    }

    &--image {
      .gatsby-image-wrapper {
        position: absolute !important;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &--title {
      position: absolute;
      bottom: 5rem;
      left: 5rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        bottom: 10rem;
        left: 2.5rem;
        width: 30rem;
        text-align: center;
      }

      p {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
        }
      }

      h2 {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 600;
        line-height: 1.25;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.6rem;
        }
      }
    }
  }

  &.reverse-collections {
    flex-direction: row-reverse;
  }
`

class Collections extends Component {
  render() {
    const reversedClass = this.props.reverse ? " reverse-collections" : ""

    return (
      <CollectionsStyled className={`collectiontop${reversedClass}`}>
        <div className="collectiontop__left">
          <div className="collectiontop__left--image">
            <Img fluid={this.props.leftImg} alt={this.props.leftAlt} />
          </div>
          <div className="collectiontop__left--title">
            <p>{this.props.leftCat}</p>
            <h2>{this.props.leftTitle}</h2>
          </div>
        </div>
        <div className="collectiontop__center">
          <div className="collectiontop__center--image">
            <Img fluid={this.props.centreImg} alt={this.props.centreAlt} />
          </div>
          <div className="collectiontop__center--title">
            <p>{this.props.centreCat}</p>
            <h2>{this.props.centreTitle}</h2>
          </div>
        </div>
        <div className="collectiontop__right">
          <div className="collectiontop__right--image">
            <Img fluid={this.props.rightImg} alt={this.props.rightAlt} />
          </div>
          <div className="collectiontop__right--title">
            <p>{this.props.rightCat}</p>
            <h2>{this.props.rightTitle}</h2>
          </div>
        </div>
      </CollectionsStyled>
    )
  }
}

export default Collections
