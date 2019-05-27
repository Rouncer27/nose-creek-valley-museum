import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import Program from "./Program"

const ProgramsListStyled = styled.section`
  margin-top: 0rem;
  @media (min-width: ${props => props.theme.bpTablet}) {
    margin-top: 0rem;
  }

  .ptours__wrapper {
    @media (min-width: ${props => props.theme.bpDeskmd}) {
      padding-right: 10rem;
      padding-left: 10rem;
    }
  }

  .ptours__title {
    width: 100%;
    margin-bottom: 2rem;
    padding: 0 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      margin-bottom: 0;
      text-align: left;
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

class ProgramsList extends Component {
  render() {
    return (
      <ProgramsListStyled id="programsList" className="ptours">
        <FullScreenWrapper className="ptours__wrapper">
          <div className="ptours__title">
            <h1>Programs</h1>
          </div>
          {this.props.tours.map((tour, index) => {
            return <Program key={index} tour={tour} />
          })}
        </FullScreenWrapper>
      </ProgramsListStyled>
    )
  }
}

export default ProgramsList
