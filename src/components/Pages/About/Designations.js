import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"

const DesignationsStyled = styled.section`
  .designations__title {
    width: 100%;

    h2 {
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-size: 4rem;
      text-align: center;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        text-align: left;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 6rem;
      }
    }
  }

  .designations__logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .designations__item {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
    }

    &--logo {
      width: calc(100% - 10rem);
      margin: 0 5rem 2rem;
      padding: 0 4rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(30% - 4rem);
        margin: 0 2rem;
        padding: 0;
      }
    }

    &--content {
      width: 100%;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(70% - 4rem);
        margin: 0 2rem;
      }

      h3,
      p {
        display: inline;
        margin: 0;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontTer};
        font-weight: 700;
        line-height: 1.2;
      }

      div {
        display: inline;
      }

      h3 {
        font-size: 2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }
      }

      p {
        display: inline;
        color: ${props => props.theme.paraGrey};
        font-weight: normal;
        font-size: 2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }
      }
    }
  }
`

class Designations extends Component {
  render() {
    return (
      <DesignationsStyled className="designations">
        <StandardWrapper className="designations__wrapper">
          <div className="designations__title">
            <h2>Designations</h2>
          </div>
          <div className="designations__logos">
            {this.props.designations.map((des, index) => {
              return (
                <div key={index} className="designations__item">
                  <div className="designations__item--logo">
                    <Img
                      fluid={des.logo.localFile.childImageSharp.fluid}
                      alt={des.logo.alt_text}
                    />
                  </div>
                  <div className="designations__item--content">
                    <h3>{des.name} : </h3>
                    <div dangerouslySetInnerHTML={{ __html: des.content }} />
                  </div>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
      </DesignationsStyled>
    )
  }
}

export default Designations
