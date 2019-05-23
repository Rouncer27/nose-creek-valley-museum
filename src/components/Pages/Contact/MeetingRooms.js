import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const MeetingRoomsStyled = styled.section`
  width: 100%;
  padding-bottom: 10rem;
  background: linear-gradient(
    to top,
    rgba(206, 206, 208, 0.5) 0%,
    rgba(206, 206, 208, 0.5) 80%,
    ${props => props.theme.white} 80%,
    ${props => props.theme.white} 100%
  );

  .rooms__wrapper {
    flex-direction: row-reverse;

    @media (min-width: ${props => props.theme.bpTablet}) {
      justify-content: space-between;
      justify-content: space-evenly;
      padding: 2rem 0;
    }
  }

  .rooms__container {
    width: 100%;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${props => props.theme.white};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 6rem);
      margin: 2rem 3rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(23%);
      margin: 2rem 0;
    }

    &--image {
      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-height: 23vw;
        overflow: hidden;
      }
    }

    &--mainintro {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2rem 4rem;
      background-color: transparent;
      box-shadow: 0 3px 6px 0 transparent;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(35%);
        margin: 2rem 0;
      }

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

      p {
        color: #696969;
        font-family: ${props => props.theme.fontTer};
        text-align: center;
        opacity: 0.8;
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

class MeetingRooms extends Component {
  render() {
    return (
      <MeetingRoomsStyled id="factRentals" className="rooms">
        <FullScreenWrapper className="rooms__wrapper">
          <div className="rooms__container rooms__container--mainintro">
            <div className="">
              <h2>
                <span>Room Rentals </span>Meeting Rooms
              </h2>
              <div dangerouslySetInnerHTML={{ __html: this.props.intro }} />
            </div>
          </div>
          {this.props.rooms.map((room, index) => {
            return (
              <div key={index} className="rooms__container">
                <div className="rooms__container--image">
                  <Img
                    fluid={room.image.localFile.childImageSharp.fluid}
                    alt={room.image.alt_text}
                  />
                </div>
                <div className="rooms__container--content">
                  <div className="rooms__container--content--title">
                    <h3>{room.room_name}</h3>
                  </div>
                  <div className="rooms__container--content--sub">
                    <h4>Capacity</h4>
                  </div>
                  <div
                    className="rooms__container--content--fav"
                    dangerouslySetInnerHTML={{ __html: room.capacity }}
                  />
                </div>
              </div>
            )
          })}
        </FullScreenWrapper>
      </MeetingRoomsStyled>
    )
  }
}

export default MeetingRooms
