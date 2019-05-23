import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"
import VolunteerAnimation from "./VolunteerAnimation"

const VolunteerStyled = styled.section`
  padding: 0 0 5rem;

  .volunteer__title {
    width: 100%;
    margin-bottom: 2rem;
    text-align: right;

    h2 {
      margin: 0;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 8rem;
      }
    }

    p {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;
    }
  }

  .volunteer__content {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &--icon {
      width: 100%;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(35% - 5rem);
        margin: 0 2.5rem;
      }
    }

    &--paragraph {
      width: 100%;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(65% - 5rem);
        margin: 0 2.5rem;
        columns: 2;
        column-gap: 3.5rem;
      }

      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;
        line-height: 1.2;
        opacity: 0.85;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }
      }
    }

    &--link {
      width: 100%;
      margin-top: 4rem;
      text-align: center;

      a {
        color: ${props => props.theme.deepSea};

        &:hover {
          color: ${props => props.theme.rawSienna};
        }
      }
    }
  }
`

class Volunteer extends Component {
  render() {
    return (
      <VolunteerStyled id="volunteerInfo" className="volunteer">
        <StandardWrapper className="volunteer__wrapper">
          <div className="volunteer__title">
            <h2>Volunteer</h2>
            <p>Your greatness is not what you have, but what you give.</p>
          </div>
          <div className="volunteer__content">
            <div className="volunteer__content--icon">
              <VolunteerAnimation />
              <TwoSpanButtons className="volunteer__content--link">
                <a href={this.props.link}>
                  <span>Volunteer / </span>
                  <span>Today</span>
                </a>
              </TwoSpanButtons>
            </div>
            <div
              className="volunteer__content--paragraph"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          </div>
        </StandardWrapper>
      </VolunteerStyled>
    )
  }
}

export default Volunteer
