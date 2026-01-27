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
      }

      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: normal;
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
        display: block;
        position: relative;
        padding: 1rem 5rem 1rem 1rem;
        transition: all 0.3s ease-in-out;
        background: transparent;
        border: none;
        color: ${props => props.theme.deepSea};
        font-weight: 700;
        font-size: 2.2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }

        .btn-circle {
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          width: 3.2rem;
          height: 3.2rem;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          color: ${props => props.theme.deepSea};
          text-align: center;

          &::before {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;
            border: 0.2rem solid ${props => props.theme.deepSea};
            border-radius: 50%;
            content: "";
          }

          &::after {
            display: block;
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(0%, -50%);
            transition: all 0.3s ease-in-out;
            font-family: ${props => props.theme.fontAwesome};
            font-size: 2.2rem;
            font-weight: 100;
            content: "\f178";
          }
        }

        &:hover {
          color: ${props => props.theme.rawSienna};
          cursor: pointer;
          .btn-circle {
            color: ${props => props.theme.rawSienna};
            &::before {
              border-color: ${props => props.theme.rawSienna};
            }
            &::after {
              color: ${props => props.theme.rawSienna};
            }
          }
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

  .donors__wrapper {
  }

  .donors__title {
    width: 100%;
    margin-bottom: 2.5rem;
    text-align: center;

    h2 {
      font-family: "Libre Baskerville";
      color: #143042;
      font-weight: 600;
    }
  }

  .donors__list {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        width: calc(33.333333% - 2rem);
        margin: 0.5rem 1rem;
      }
    }
  }
`

class Volunteer extends Component {
  render() {
    const { content, link, positions, donorsList } = this.props
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.localFile.publicURL}
                >
                  <span>Contact Us / </span>
                  <span className="italic-btn">Today</span>
                  <span className="btn-circle" />
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
        {/* <StandardWrapper className="donors__wrapper">
          <div className="donors__title">
            <h2>Donors</h2>
          </div>
          {donorsList.length > 0 && (
            <div className="donors__list">
              <ul>
                {donorsList.map((item, index) => {
                  return <li>{item.name}</li>
                })}
              </ul>
            </div>
          )}
          <div></div>
        </StandardWrapper> */}
      </VolunteerStyled>
    )
  }
}

export default Volunteer
