/* eslint-disable */
import React, { Component } from "react"
import styled from "styled-components"

const StyledBookItForm = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.deco};
  opacity: 0;
  visibility: hidden;
  z-index: 2500;

  &.formActive {
    opacity: 1;
    visibility: visible;
  }

  .bookitform__title {
    text-align: center;
    color: ${props => props.theme.deepSea};

    h3 {
      font-weight: 700;
    }
  }

  .bookitform__wrapper {
    position: relative;
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;

    button.close-modal {
      position: absolute;
      top: 0rem;
      right: 0rem;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      background: ${props => props.theme.black};
      color: ${props => props.theme.white};

      &:hover {
        cursor: pointer;
        background: ${props => props.theme.deepSea};
        color: ${props => props.theme.kenyanCopper};
      }

      &:focus {
        outline: none;
      }
    }
  }

  .bookitform__form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    &--field {
      width: calc(50% - 4rem);
      margin: 2rem;
    }

    &--button {
      width: calc(100% - 4rem);
      margin: 2rem;
      text-align: center;

      .book-it-submit {
        display: block;
        position: relative;
        padding: 1rem 0;
        transition: all 0.3s ease-in-out;
        background: transparent;
        border: none;
        color: ${props => props.theme.deepSea};
        font-weight: 700;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }
        .btn-circle {
          display: block;
          position: absolute;
          top: 50%;
          right: -4.5rem;
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
          color: ${props => props.theme.kenyanCopper};
          cursor: pointer;
          .btn-circle {
            color: ${props => props.theme.kenyanCopper};
            &::before {
              border-color: ${props => props.theme.kenyanCopper};
            }
            &::after {
              color: ${props => props.theme.kenyanCopper};
            }
          }
        }
      }
    }

    label {
      display: block;
      margin-top: 2rem;
      color: ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.2rem;
      }
    }

    input {
      display: block;
      width: 100%;
      padding: 1rem;
      border-radius: 0.1rem;
      border: none;
      color: ${props => props.theme.grey};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem ${props => props.theme.deepSea};
      }
    }
  }
`

class BookItFormPrograms extends Component {
  constructor(props) {
    super(props)

    this.submitTheForm = this.submitTheForm.bind(this)
    this.state = {
      submitting: false,
    }
  }

  submitTheForm(e) {
    e.preventDefault()
    console.log("SUBMIT!!!!!!!")
  }
  render() {
    const activeClassName = this.props.isActive ? "formActive" : ""
    return (
      <StyledBookItForm className={`${activeClassName}`}>
        <div className="bookitform__wrapper">
          <div className="bookitform__title">
            <h3>Book a Tour</h3>
          </div>
          <form onSubmit={this.submitTheForm} className="bookitform__form">
            <div className="bookitform__form--field">
              <label>Name</label>
              <input />
            </div>
            <div className="bookitform__form--field">
              <label>Email</label>
              <input />
            </div>
            <div className="bookitform__form--field">
              <label>Phone Number</label>
              <input />
            </div>
            <div className="bookitform__form--field">
              <label>Tour Name</label>
              <input value={this.props.tourName} />
            </div>
            <div className="bookitform__form--field">
              <label>Group Size</label>
              <input />
            </div>
            <div className="bookitform__form--field">
              <label>Tour Requested Date</label>
              <input type="date" />
            </div>
            <div className="bookitform__form--button">
              <button className="book-it-submit" onClick={this.submitTheForm}>
                Submit
                <span className="btn-circle" />
              </button>
            </div>
          </form>

          <button
            className="close-modal"
            onClick={() => this.props.setActive(!this.props.isActive)}
          >
            &#x2715;
          </button>
        </div>
      </StyledBookItForm>
    )
  }
}

export default BookItFormPrograms
