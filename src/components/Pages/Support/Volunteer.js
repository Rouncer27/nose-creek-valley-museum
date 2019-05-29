import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"
import VolunteerAnimation from "./VolunteerAnimation"
import Position from "./Position"

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
      font-size: 5rem;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 8rem;
      }
    }

    p {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;
      font-size: 1.8rem;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.6rem;
      }
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
        font-size: 2rem;
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
      margin-bottom: 4rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin-bottom: 0;
      }

      a {
        color: ${props => props.theme.deepSea};
        font-size: 2.2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }

        &:hover {
          color: ${props => props.theme.rawSienna};
        }
      }
    }
  }

  .volunteer__positions {
    width: 100%;

    &--title {
      width: 100%;
      padding: 2rem;
      text-align: center;

      h2 {
        color: ${props => props.theme.neptune};
        font-family: ${props => props.theme.fontPrim};
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }
      }
    }

    &--container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      .singlePosition:nth-of-type(5n + 1) {
        .singlePosition__outside {
          background: ${props => props.theme.deco};

          h3 {
            color: ${props => props.theme.deepSea};
          }
        }
      }

      .singlePosition:nth-of-type(5n + 2) {
        .singlePosition__outside {
          background: ${props => props.theme.frenchGrey};

          h3 {
            color: ${props => props.theme.deepSea};
          }
        }
      }

      .singlePosition:nth-of-type(5n + 3) {
        .singlePosition__outside {
          background: ${props => props.theme.neptune};

          h3 {
            color: ${props => props.theme.deepSea};
          }
        }
      }

      .singlePosition:nth-of-type(5n + 4) {
        .singlePosition__outside {
          background: ${props => props.theme.deepSea};

          h3 {
            color: ${props => props.theme.deco};
          }
        }
      }

      .singlePosition:nth-of-type(5n + 5) {
        .singlePosition__outside {
          background: ${props => props.theme.kenyanCopper};

          h3 {
            color: ${props => props.theme.deepSea};
          }
        }
      }
    }
  }
`

class Volunteer extends Component {
  render() {
    const { content, link, positions } = this.props

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
                <a href={link}>
                  <span>Volunteer / </span>
                  <span>Today</span>
                </a>
              </TwoSpanButtons>
            </div>
            <div
              className="volunteer__content--paragraph"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </StandardWrapper>
        {positions.length > 0 && (
          <div className="volunteer__positions">
            <div className="volunteer__positions--title">
              <h2>
                Current volunteer opportunities at NCVM include the following:
              </h2>
            </div>
            <div className="volunteer__positions--container">
              {positions.map((position, index) => {
                return <Position key={index} position={position} />
              })}
            </div>
          </div>
        )}
      </VolunteerStyled>
    )
  }
}

export default Volunteer
