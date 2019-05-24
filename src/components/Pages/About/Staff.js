import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

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
          font-weight: 400;
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
          font-weight: 300;
          text-align: center;
          line-height: 1.3;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }
    }
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
            return (
              <div key={index} className="staff__container">
                <div className="staff__container--image">
                  <Img
                    fluid={member.image.localFile.childImageSharp.fluid}
                    alt={member.image.alt_text}
                  />
                </div>
                <div className="staff__container--content">
                  <div className="staff__container--content--title">
                    <h3>{member.name}</h3>
                  </div>
                  <div className="staff__container--content--sub">
                    <h4>{member.title}</h4>
                  </div>
                  <div className="staff__container--content--fav">
                    <p>{member.favourite}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </FullScreenWrapper>
      </StaffStyled>
    )
  }
}

export default Staff
