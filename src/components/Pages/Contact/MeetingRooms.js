import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import MeetingRoomsForm from "./MeetingRoomsForm"
import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

import gallery from "../../../images/icons/gallery.png"
import pillars from "../../../images/icons/pillars.png"

const MeetingRoomsStyled = styled.section`
  position: relative;
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
    position: relative;
    width: 100%;
    margin: 2rem 3rem;
    padding-bottom: 4rem;
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
      position: relative;
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

      &--button {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;

        button {
          display: inline-block;
          position: relative;
          padding: 1rem 0;
          padding-right: 5rem;
          transition: all 0.3s ease-in-out;
          background: transparent;
          color: ${props => props.theme.deepSea};
          border: none;
          font-family: ${props => props.theme.fontSec};
          font-style: italic;

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
            color: ${props => props.theme.deco};
            cursor: pointer;

            .btn-circle {
              color: ${props => props.theme.deco};
              &::before {
                border-color: ${props => props.theme.deco};
              }
              &::after {
                color: ${props => props.theme.deco};
              }
            }
          }
        }
      }

      &--icon {
        position: absolute;
        top: -3.5rem;
        right: 0;
        left: 0;
        margin: 0 auto;
        width: 7rem;
        height: 7rem;
        background-color: ${props => props.theme.deepSea};
        border-radius: 50%;
        overflow: hidden;

        &::after {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4rem;
          height: 4rem;
          transform: translate(-50%, -50%);
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 100%;
          content: "";
          z-index: 1;
        }
      }
    }
  }

  .rooms__container:nth-of-type(2) {
    .rooms__container--content--icon {
      &::after {
        background-image: url(${pillars});
      }
    }
  }

  .rooms__container:nth-of-type(3) {
    .rooms__container--content--icon {
      &::after {
        background-image: url(${gallery});
      }
    }
  }
`

class MeetingRooms extends Component {
  constructor(props) {
    super(props)

    this.openBookItForm = this.openBookItForm.bind(this)
    this.closeBookItForm = this.closeBookItForm.bind(this)

    this.state = {
      formOpen: false,
      formRoom: "",
    }
  }

  openBookItForm(roomName) {
    this.setState(prevState => {
      return {
        ...prevState,
        formOpen: true,
        formRoom: roomName,
      }
    })
  }

  closeBookItForm() {
    this.setState(prevState => {
      return {
        ...prevState,
        formOpen: false,
        formRoom: "",
      }
    })
  }

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
                  <div className="rooms__container--content--icon" />
                </div>
                <div className="rooms__container--content--button">
                  <button onClick={() => this.openBookItForm(room.room_name)}>
                    Book it <span className="btn-circle" />
                  </button>
                </div>
              </div>
            )
          })}
        </FullScreenWrapper>
        {this.state.formOpen && (
          <MeetingRoomsForm
            closeBookItForm={this.closeBookItForm}
            formRoom={this.state.formRoom}
          />
        )}
      </MeetingRoomsStyled>
    )
  }
}

export default MeetingRooms
