import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

import buyMembership from "../../../images/support/ncvm-icons_buymember.png"
import giftMembership from "../../../images/support/ncvm-icons_gift.png"

const MembershipStyled = styled.section`
  background: linear-gradient(
    to right,
    ${props => props.theme.deepSea} 0%,
    ${props => props.theme.deepSea} 50%,
    #ebecec 50%,
    #ebecec 100%
  );

  .membership__wrapper {
    align-items: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      min-height: 35vw;
    }
  }

  .membership__content {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      padding: 5rem;
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
    }
  }

  .membership__gift {
    width: 100%;
    padding-top: 7rem;
    background-image: url(${giftMembership});
    background-size: 7rem;
    background-position: top center;
    background-repeat: no-repeat;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
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
      <MembershipStyled className="membership">
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
            </div>
          </div>
          <div className="membership__gift">
            <h2>Gift a Membership</h2>
          </div>
        </FullScreenWrapper>
      </MembershipStyled>
    )
  }
}

export default Membership
