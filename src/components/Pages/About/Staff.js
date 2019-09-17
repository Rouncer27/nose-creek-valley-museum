import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import SingleStaff from "./SingleStaff"

const StaffStyled = styled.section`
  width: 100%;
  padding-bottom: 10rem;
  background: linear-gradient(
    to top,
    ${props => props.theme.frenchGrey} 0%,
    ${props => props.theme.frenchGrey} 80%,
    ${props => props.theme.white} 80%,
    ${props => props.theme.white} 100%
  );

  .staff__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      justify-content: space-between;
      justify-content: space-evenly;
      padding: 2rem 0;
    }
  }

  .staff__container {
    width: 100%;
    margin: 2rem 3rem;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${props => props.theme.white};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 6rem);
      margin: 2rem 3rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(28%);
      margin: 2rem 0;
    }

    &--image {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-height: 28vw;
        overflow: hidden;
      }
    }

    &--maintitle {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 3px 6px 0 transparent;

      h2 {
        width: 100%;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 700;
        text-align: center;
        line-height: 1.18;
        letter-spacing: normal;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 3rem;
        }

        span {
          display: block;
          margin-bottom: 1.6rem;
          color: ${props => props.theme.neptune};
          font-family: ${props => props.theme.fontTer};
          font-weight: normal;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }
    }

    &--content {
      padding: 7.5rem 1.5rem 1.5rem;

      &--title {
        h3 {
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 700;
          text-align: center;
          line-height: 1.18;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 3rem;
          }
        }
      }

      &--sub {
        margin-top: 2rem;
        margin-bottom: 2rem;
        h4 {
          color: ${props => props.theme.neptune};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          line-height: 1.5;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }

      &--fav {
        p {
          color: ${props => props.theme.paraGrey};
          font-family: ${props => props.theme.fontTer};
          font-weight: normal;
          text-align: center;
          line-height: 1.3;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }

      &--button {
        width: 100%;
        margin-top: 5rem;
        text-align: center;

        button {
          display: inline-block;
          position: relative;
          padding: 1rem 0;
          padding-right: 5rem;
          transition: all 0.3s ease-in-out;
          background: transparent;
          color: ${props => props.theme.deco};
          border: none;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpTablet}) {
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }

          .italic-btn {
            font-family: ${props => props.theme.fontSec};
            font-style: italic;
            text-transform: capitalize;
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
            color: ${props => props.theme.deco};
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
              border: 0.2rem solid ${props => props.theme.deco};
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
            color: ${props => props.theme.neptune};
            cursor: pointer;

            .btn-circle {
              color: ${props => props.theme.neptune};
              &::before {
                border-color: ${props => props.theme.neptune};
              }
              &::after {
                color: ${props => props.theme.neptune};
              }
            }
          }
        }
      }
    }
  }

  .staff__container:nth-child(1) {
    background: transparent;
  }
`

class Staff extends Component {
  render() {
    return (
      <StaffStyled className="staff">
        <FullScreenWrapper className="staff__wrapper">
          <div className="staff__container staff__container--maintitle">
            <div className="">
              <h2>
                <span>NCVM </span>Operations Staff
              </h2>
            </div>
          </div>
          {this.props.staff.map((member, index) => {
            return <SingleStaff key={index} member={member} />
          })}
        </FullScreenWrapper>
      </StaffStyled>
    )
  }
}

export default Staff
