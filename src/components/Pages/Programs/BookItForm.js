/* eslint-disable */
import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import SubmittingModal from "./SubmittingModal"
import FormSentSuccess from "./FormSentSuccess"
import FormErrorsModal from "./FormErrorsModal"

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
    color: ${props => props.theme.neptune};

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
        background: ${props => props.theme.neptune};
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
      position: relative;
      width: calc(50% - 4rem);
      margin: 1rem 2rem;
      padding-top: 0.5rem;
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
        color: ${props => props.theme.neptune};
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
          color: ${props => props.theme.neptune};
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
            border: 0.2rem solid ${props => props.theme.neptune};
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

    .form-error-message {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      color: red;
      font-size: 1.2rem;
    }

    label {
      display: block;
      margin-top: 2rem;
      color: ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
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
        box-shadow: 0 0 0 0.2rem ${props => props.theme.neptune};
      }
    }
  }
`

class BookItForm extends Component {
  constructor(props) {
    super(props)

    this.submitTheForm = this.submitTheForm.bind(this)
    this.onChange = this.onChange.bind(this)
    this.formSentSuccess = this.formSentSuccess.bind(this)
    this.formHaveErrors = this.formHaveErrors.bind(this)
    this.resetTheForm = this.resetTheForm.bind(this)
    this.dismissError = this.dismissError.bind(this)

    this.state = {
      submitting: false,
      formHasErrors: false,
      formSent: false,
      errors: [],
      fullName: "",
      email: "",
      phone: "",
      tourName: "",
      groupSize: "",
      requestedDate: "",
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        tourName: this.props.tourName,
      }
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTheForm(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: !prevState.submitting,
      }
    })

    const bodyFormData = new FormData()

    bodyFormData.append("fullName", this.state.fullName)
    bodyFormData.append("email", this.state.email)
    bodyFormData.append("phone", this.state.phone)
    bodyFormData.append("tourName", this.state.tourName)
    bodyFormData.append("groupSize", this.state.groupSize)
    bodyFormData.append("requestedDate", this.state.requestedDate)

    const baseURL = "https://database.nosecreekvalleymuseum.com"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/545/feedback`,
        bodyFormData,
        config
      )
      .then(res => {
        if (res.data.status === "mail_sent") {
          setTimeout(() => {
            this.formSentSuccess(res.data.message)
          }, 1000)
        } else if (res.data.status === "validation_failed") {
          setTimeout(() => {
            this.formHaveErrors(res.data.message, res.data.invalidFields)
          }, 1000)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  formSentSuccess() {
    this.setState(prevState => {
      return {
        ...prevState,
        formSent: true,
        submitting: false,
      }
    })
  }

  formHaveErrors(message, fields) {
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        formHasErrors: true,
        errors: fields,
      }
    })
  }

  resetTheForm() {
    this.props.setActive(!this.props.isActive)
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        formHasErrors: false,
        formSent: false,
        errors: [],
        fullName: "",
        email: "",
        phone: "",
        tourName: this.props.tourName,
        groupSize: "",
        requestedDate: "",
      }
    })
  }

  dismissError() {
    this.setState(prevState => {
      return {
        ...prevState,
        formHasErrors: false,
      }
    })
  }

  render() {
    const activeClassName = this.props.isActive ? "formActive" : ""

    let fullNameError = false
    let emailError = false
    let phoneError = false
    let tourNameError = false
    let groupSizeError = false
    let requestedDateError = false

    this.state.errors.forEach(error => {
      if (error.idref === "fullName") {
        fullNameError = "Full Name is required"
      } else if (error.idref === "email") {
        emailError = "email is required"
      } else if (error.idref === "phone") {
        phoneError = "Phone number is required"
      } else if (error.idref === "groupSize") {
        groupSizeError = "Your Group Size is required"
      } else if (error.idref === "requestedDate") {
        requestedDateError = "Your requested date is required"
      } else if (error.idref === "tourName") {
        tourNameError = "Name of the tour is required"
      }
    })

    return (
      <StyledBookItForm className={`${activeClassName}`}>
        <div className="bookitform__wrapper">
          <div className="bookitform__title">
            <h3>Book a Tour</h3>
          </div>
          <form onSubmit={this.submitTheForm} className="bookitform__form">
            <div className="bookitform__form--field">
              <label htmlFor="fullName">Name</label>
              {fullNameError && (
                <p className="form-error-message">{fullNameError}</p>
              )}
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                  required={true}
                />
              </div>
            </div>
            <div className="bookitform__form--field">
              <label htmlFor="email">Email</label>
              {emailError && <p className="form-error-message">{emailError}</p>}
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="bookitform__form--field">
              <label htmlFor="phone">Phone Number</label>
              {phoneError && <p className="form-error-message">{phoneError}</p>}
              <input
                type="phone"
                id="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="bookitform__form--field">
              <label htmlFor="tourName">Tour Name</label>
              {tourNameError && (
                <p className="form-error-message">{tourNameError}</p>
              )}
              <input
                type="text"
                id="tourName"
                name="tourName"
                value={this.state.tourName}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="bookitform__form--field">
              <label htmlFor="groupSize">Group Size</label>
              {groupSizeError && (
                <p className="form-error-message">{groupSizeError}</p>
              )}
              <input
                type="text"
                id="groupSize"
                name="groupSize"
                value={this.state.groupSize}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="bookitform__form--field">
              <label htmlFor="requestedDate">Tour Requested Date</label>
              {requestedDateError && (
                <p className="form-error-message">{requestedDateError}</p>
              )}
              <input
                type="date"
                id="requestedDate"
                name="requestedDate"
                value={this.state.requestedDate}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="bookitform__form--button">
              <button className="book-it-submit" onClick={this.submitTheForm}>
                Submit
                <span className="btn-circle" />
              </button>
            </div>
          </form>

          <button className="close-modal" onClick={this.resetTheForm}>
            &#x2715;
          </button>
        </div>
        {this.state.submitting && <SubmittingModal />}
        {this.state.formSent && (
          <FormSentSuccess resetTheForm={this.resetTheForm} />
        )}
        {this.state.formHasErrors && (
          <FormErrorsModal dismissError={this.dismissError} />
        )}
      </StyledBookItForm>
    )
  }
}

export default BookItForm
