import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"
import moment from "moment"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import SubmittingModal from "../Programs/SubmittingModal"
import FormSentSuccess from "../Programs/FormSentSuccess"
import FormErrorsModal from "../Programs/FormErrorsModal"

const StyledMeetingRoomsForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.deco};
  z-index: 9999999999;
  overflow-y: scroll;

  .meetingsForm__wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 60rem;
    padding: 2rem;
    transform: translate(-50%, -50%);

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
      padding: 0;
    }
  }

  button.close-modal {
    position: absolute;
    top: 5rem;
    right: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};

    @media (min-width: ${props => props.theme.bpTablet}) {
      right: 0rem;
    }

    &:hover {
      cursor: pointer;
      background: ${props => props.theme.deepSea};
      color: ${props => props.theme.kenyanCopper};
    }

    &:focus {
      outline: none;
    }
  }

  .meetingsForm__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .meetingsForm__field {
    position: relative;
    width: 60%;
    margin-right: 20%;
    margin-left: 20%;
    padding-top: 1rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 0 2rem;
    }

    &--select,
    &--textarea {
      width: 100%;
    }

    &--date,
    &--time {
      .react-datepicker-wrapper {
        width: 100%;

        .react-datepicker__input-container {
          width: 100%;

          input {
            width: 100%;
          }
        }
      }

      .react-datepicker-popper {
        width: 20rem;
        .react-datepicker__time-container {
          width: 20rem;
        }
        .react-datepicker-time__header {
          font-family: ${props => props.theme.fontTer};
          font-size: 2rem;
        }
        .react-datepicker__time-box {
          width: 20rem;
          .react-datepicker__time-list-item {
            font-family: ${props => props.theme.fontTer};
          }
        }

        .react-datepicker {
          width: 20rem;

          .react-datepicker__month-container {
            width: 20rem;

            .react-datepicker__header {
              width: 20rem;

              .react-datepicker__current-month {
                font-size: 2rem;
                font-family: ${props => props.theme.fontTer};
              }

              .react-datepicker__day-names {
                width: 20rem;

                .react-datepicker__day-name {
                  width: 2.4rem;
                  height: 2.4rem;
                }
              }

              .react-datepicker__header__dropdown {
                width: 20rem;
                font-size: 1.4rem;
                font-family: ${props => props.theme.fontTer};
              }
            }

            .react-datepicker__month {
              width: 20rem;

              .react-datepicker__week {
                width: 20rem;

                .react-datepicker__day {
                  width: 2.4rem;
                  height: 2.4rem;
                }
              }
            }
          }
        }
      }
    }

    label {
      display: block;
      width: 100%;
      margin-top: 2rem;
      color: ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.4rem;
      }
    }

    .form-error-message {
      position: absolute;
      top: 1rem;
      left: 0;
      width: 100%;
      margin: 0;
      color: red;
      font-size: 1.2rem;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      padding: 1rem;
      border-radius: 0.1rem;
      border: none;
      color: ${props => props.theme.grey};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 0.5rem;
        font-size: 1.6rem;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem ${props => props.theme.neptune};
      }
    }
  }

  .meetingsForm__button {
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
`

class MeetingRoomsForm extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.submitTheForm = this.submitTheForm.bind(this)
    this.formSentSuccess = this.formSentSuccess.bind(this)
    this.formHaveErrors = this.formHaveErrors.bind(this)
    this.resetTheForm = this.resetTheForm.bind(this)
    this.dismissError = this.dismissError.bind(this)

    this.onChangeDateOne = this.onChangeDateOne.bind(this)
    this.onChangeTimeOne = this.onChangeTimeOne.bind(this)
    this.onChangeDateTwo = this.onChangeDateTwo.bind(this)
    this.onChangeTimeTwo = this.onChangeTimeTwo.bind(this)

    this.state = {
      submitting: false,
      formHasErrors: false,
      formSent: false,
      errors: [],
      roomName: "",
      firstName: "",
      lastName: "",
      yourEmail: "",
      phoneNumber: "",
      dateOne: "",
      timeOne: "",
      dateTwo: "",
      timeTwo: "",
      notes: "",
      dateOnePicker: "",
      timeOnePicker: "",
      dateTwoPicker: "",
      timeTwoPicker: "",
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        roomName:
          this.props.formRoom === "Symons Valley Meeting Room"
            ? "symonsValley"
            : "yankeeValley",
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
    bodyFormData.append("roomName", this.state.roomName)
    bodyFormData.append("firstName", this.state.firstName)
    bodyFormData.append("lastName", this.state.lastName)
    bodyFormData.append("yourEmail", this.state.yourEmail)
    bodyFormData.append("phoneNumber", this.state.phoneNumber)
    bodyFormData.append("dateOne", this.state.dateOne)
    bodyFormData.append("timeOne", this.state.timeOne)
    bodyFormData.append("dateTwo", this.state.dateTwo)
    bodyFormData.append("timeTwo", this.state.timeTwo)
    bodyFormData.append("notes", this.state.notes)

    const baseURL = "https://database.nosecreekvalleymuseum.com"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/549/feedback`,
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
    this.props.closeBookItForm()
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        formHasErrors: false,
        formSent: false,
        errors: [],
        roomName: "",
        firstName: "",
        lastName: "",
        yourEmail: "",
        phoneNumber: "",
        dateOne: "",
        timeOne: "",
        dateTwo: "",
        timeTwo: "",
        notes: "",
        dateOnePicker: "",
        timeOnePicker: "",
        dateTwoPicker: "",
        timeTwoPicker: "",
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

  onChangeDateOne(date) {
    const newDate = moment(date).format("MMMM Do YYYY")
    this.setState(prevState => {
      return {
        ...prevState,
        dateOne: newDate,
        dateOnePicker: date,
      }
    })
  }

  onChangeTimeOne(date) {
    const newDate = moment(date).format("h:mm a")
    this.setState(prevState => {
      return {
        ...prevState,
        timeOne: newDate,
        timeOnePicker: date,
      }
    })
  }

  onChangeDateTwo(date) {
    const newDate = moment(date).format("MMMM Do YYYY")
    this.setState(prevState => {
      return {
        ...prevState,
        dateTwo: newDate,
        dateTwoPicker: date,
      }
    })
  }

  onChangeTimeTwo(date) {
    const newDate = moment(date).format("h:mm a")
    this.setState(prevState => {
      return {
        ...prevState,
        timeTwo: newDate,
        timeTwoPicker: date,
      }
    })
  }

  render() {
    let roomNameError = false
    let firstNameError = false
    let lastNameError = false
    let yourEmailError = false
    let phoneNumberError = false
    let dateOneError = false
    let timeOneError = false
    let dateTwoError = false
    let timeTwoError = false
    let notesError = false

    this?.state?.errors?.forEach(error => {
      if (error.idref === "roomName") {
        roomNameError = "Room is required"
      } else if (error.idref === "firstName") {
        firstNameError = "First Name is required"
      } else if (error.idref === "lastName") {
        lastNameError = "Last Name is required"
      } else if (error.idref === "yourEmail") {
        yourEmailError = "Your Email is required"
      } else if (error.idref === "phoneNumber") {
        phoneNumberError = "Your phone number is required"
      } else if (error.idref === "dateOne") {
        dateOneError = "Your Perferred date is Required"
      } else if (error.idref === "timeOne") {
        timeOneError = "Your Perferred time is Required"
      } else if (error.idref === "dateTwo") {
        dateTwoError = "Your Alternate date is Required"
      } else if (error.idref === "timeTwo") {
        timeTwoError = "Your Alternate time is Required"
      } else if (error.idref === "notes") {
        notesError = "Your notes are Required"
      }
    })
    return (
      <StyledMeetingRoomsForm>
        <div className="meetingsForm__wrapper">
          <h3>Book a Meeting Room</h3>
          <form className="meetingsForm__form" onSubmit={this.submitTheForm}>
            <div className="meetingsForm__field meetingsForm__field--select">
              <label htmlFor="firstName">Select a room to book</label>
              {roomNameError && (
                <p className="form-error-message">{roomNameError}</p>
              )}
              <select
                name="roomName"
                onChange={this.onChange}
                value={this.state.roomName}
                required={true}
              >
                <option value=""> -- select a room -- </option>
                <option title="symonsValley" value="symonsValley">
                  Symons Valley Meeting Room
                </option>
                <option title="yankeeValley" value="yankeeValley">
                  Yankee Valley Meeting Room
                </option>
              </select>
            </div>

            <div className="meetingsForm__field">
              <label htmlFor="firstName">First Name</label>
              {firstNameError && (
                <p className="form-error-message">{firstNameError}</p>
              )}
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  required={false}
                />
              </div>
            </div>

            <div className="meetingsForm__field">
              <label htmlFor="lastName">Last Name</label>
              {lastNameError && (
                <p className="form-error-message">{lastNameError}</p>
              )}
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  required={false}
                />
              </div>
            </div>

            <div className="meetingsForm__field">
              <label htmlFor="yourEmail">Email</label>
              {yourEmailError && (
                <p className="form-error-message">{yourEmailError}</p>
              )}
              <div>
                <input
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  value={this.state.yourEmail}
                  onChange={this.onChange}
                  required={false}
                />
              </div>
            </div>

            <div className="meetingsForm__field">
              <label htmlFor="phoneNumber">Phone Number</label>
              {phoneNumberError && (
                <p className="form-error-message">{phoneNumberError}</p>
              )}
              <input
                type="phone"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.onChange}
                required={false}
              />
            </div>

            <div className="meetingsForm__field meetingsForm__field--date">
              <label htmlFor="dateOne">Preferred Date</label>
              {dateOneError && (
                <p className="form-error-message">{dateOneError}</p>
              )}
              <DatePicker
                name="dateOne"
                id="dateOne"
                onChange={this.onChangeDateOne}
                selected={this.state.dateOnePicker}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
              />
            </div>
            <div className="meetingsForm__field meetingsForm__field--time">
              <label htmlFor="timeOne">Preferred Time</label>
              {timeOneError && (
                <p className="form-error-message">{timeOneError}</p>
              )}
              <DatePicker
                selected={this.state.timeOnePicker}
                onChange={this.onChangeTimeOne}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
            </div>

            <div className="meetingsForm__field meetingsForm__field--date">
              <label htmlFor="dateTwo">Alternate Date</label>
              {dateTwoError && (
                <p className="form-error-message">{dateTwoError}</p>
              )}
              <DatePicker
                name="dateTwo"
                id="dateTwo"
                onChange={this.onChangeDateTwo}
                selected={this.state.dateTwoPicker}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
              />
            </div>

            <div className="meetingsForm__field meetingsForm__field--time">
              <label htmlFor="timeTwo">Alternate Time</label>
              {timeTwoError && (
                <p className="form-error-message">{timeTwoError}</p>
              )}
              <DatePicker
                selected={this.state.timeTwoPicker}
                onChange={this.onChangeTimeTwo}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
            </div>

            <div className="meetingsForm__field meetingsForm__field--textarea">
              <label htmlFor="notes">Notes</label>
              {notesError && <p className="form-error-message">{notesError}</p>}
              <textarea
                cols="40"
                rows="8"
                id="notes"
                name="notes"
                value={this.state.notes}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="meetingsForm__button">
              <button className="book-it-submit">
                <span className="italic-btn">Submit</span>
                <span className="btn-circle" />
              </button>
            </div>
          </form>
          <div>
            <button className="close-modal" onClick={this.resetTheForm}>
              &#x2715;
            </button>
          </div>
        </div>
        {this.state.submitting && <SubmittingModal />}
        {this.state.formSent && (
          <FormSentSuccess resetTheForm={this.resetTheForm} />
        )}
        {this.state.formHasErrors && (
          <FormErrorsModal dismissError={this.dismissError} />
        )}
      </StyledMeetingRoomsForm>
    )
  }
}

export default MeetingRoomsForm
