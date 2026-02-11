import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

import buyMembership from "../../../images/support/ncvm-icons_buymember.png"
import giftMembership from "../../../images/support/ncvm-icons_gift.png"
import { Link } from "gatsby"

const MembershipStyled = styled.section`
  @media (min-width: ${props => props.theme.bpTablet}) {
    background: linear-gradient(
      to right,
      ${props => props.theme.deepSea} 0%,
      ${props => props.theme.deepSea} 50%,
      #ebecec 50%,
      #ebecec 100%
    );
  }

  .membership__wrapper {
    align-items: center;
    padding: 0;

    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 35vw;
      padding: 2rem;
    }
  }

  .membership__content {
    width: 100%;
    padding: 2rem;
    text-align: center;
    background: ${props => props.theme.deepSea};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      padding: 5rem;
      background: transparent;
    }

    &--title {
      margin-bottom: 2rem;
      padding-top: 10rem;
      background-image: url(${buyMembership});
      background-size: 10rem;
      background-position: top center;
      background-repeat: no-repeat;

      h2 {
        margin: 0;
        color: ${props => props.theme.white};

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 3rem;
        }
      }

      h3 {
        margin: 0;
        color: ${props => props.theme.neptune};
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2rem;
        }
      }
    }

    &--points {
      ul {
        li {
          display: block;
          position: relative;
          color: ${props => props.theme.white};
          font-family: ${props => props.theme.fontTer};
          font-weight: normal;
          line-height: 1.25;
          opacity: 0.75;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 2rem;
          }

          span {
            display: inline-block;
            padding-right: 1rem;
            color: ${props => props.theme.white};
            font-size: 1em;
            line-height: 0;
          }
        }
      }

      p {
        margin-top: 2rem;
        margin-bottom: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
      }
    }
  }

  .membership__gift {
    width: 100%;
    padding-top: 20rem;
    padding-right: 2rem;
    padding-bottom: 20rem;
    padding-left: 2rem;
    background-color: #ebecec;
    background-image: url(${giftMembership});
    background-size: 7rem;
    background-position: 50% 12rem;
    background-repeat: no-repeat;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      padding-top: 7rem;
      padding-right: 0;
      padding-bottom: 0;
      padding-left: 0;
      background-color: transparent;
      background-position: top center;
    }

    h2 {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-weight: 700;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3rem;
      }
    }

    a {
      display: inline-block;
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
`

class Membership extends Component {
  render() {
    return (
      <MembershipStyled id="membershipInfo" className="membership">
        <FullScreenWrapper className="membership__wrapper">
          <div className="membership__content">
            <div className="membership__content--title">
              <h2>{this.props.titleTop}</h2>
              <h3>{this.props.titleBot}</h3>
            </div>
            <div className="membership__content--points">
              <ul>
                {this.props.points.map((point, index) => {
                  return (
                    <li key={index}>
                      <span>&bull;</span>
                      {point.point}
                    </li>
                  )
                })}
              </ul>
              <p>Visit us at Museum Shop to purchase membership.</p>
            </div>
          </div>
          <div className="membership__gift">
            <h2>Donate to Museum</h2>
            <p>Use the link below to donate to the museum.</p>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.zeffy.com/en-CA/donation-form/donate-to-nose-creek-valley-museum"
            >
              <span>Donate</span>
              <span className="btn-circle" />
            </a>
          </div>
        </FullScreenWrapper>
      </MembershipStyled>
    )
  }
}

export default Membership
