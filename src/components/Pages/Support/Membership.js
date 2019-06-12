import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

import buyMembership from "../../../images/support/ncvm-icons_buymember.png"
import giftMembership from "../../../images/support/ncvm-icons_gift.png"

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
          font-weight: 300;
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
            <h2>Gift a Membership</h2>
            <p>Visit us at the Museum Shop to purchase a gift membership.</p>
          </div>
        </FullScreenWrapper>
      </MembershipStyled>
    )
  }
}

export default Membership
