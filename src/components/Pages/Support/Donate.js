import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"
import DonateAnimation from "./DonateAnimation"

const DonateStyled = styled.section`
  padding: 5rem 0;

  .donate__title {
    width: 100%;
    margin-bottom: 2rem;

    h2 {
      margin: 0;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7rem;
      }
    }
  }

  .donate__content {
    display: flex;
    align-items: center;
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

class Donate extends Component {
  render() {
    return (
      <DonateStyled className="donate">
        <StandardWrapper className="donate__wrapper">
          <div className="donate__title">
            <h2>Donate to NCVM</h2>
          </div>
          <div className="donate__content">
            <div className="donate__content--icon">
              <DonateAnimation />
              <TwoSpanButtons className="donate__content--link">
                <a href={this.props.link}>
                  <span>Donate / </span>
                  <span>Today</span>
                </a>
              </TwoSpanButtons>
            </div>
            <div
              className="donate__content--paragraph"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          </div>
        </StandardWrapper>
      </DonateStyled>
    )
  }
}

export default Donate
