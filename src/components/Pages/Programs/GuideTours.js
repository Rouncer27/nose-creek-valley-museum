import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import GuideTour from "./GuideTour"

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
            return <GuideTour key={index} tour={tour} />
          })}
        </FullScreenWrapper>
      </GuideToursStyled>
    )
  }
}

export default GuideTours
