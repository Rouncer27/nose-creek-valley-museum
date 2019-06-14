import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import SubmittingModal from "../Programs/SubmittingModal"
import FormSentSuccess from "../Programs/FormSentSuccess"
import FormErrorsModal from "../Programs/FormErrorsModal"

const StyledForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.deco};
  z-index: 9999999999;
  overflow-y: scroll;

  .learnForm__wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 60rem;
    transform: translate(-50%, -50%);

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 70rem;
    }
  }

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

  .learnForm__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .learnForm__field {
    position: relative;
    width: 100%;
    padding-top: 1rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50% - 4rem);
      margin: 0 2rem;
    }

    &--select,
    &--textarea {
      width: 100%;
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

  .learnForm__button {
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

export default class LearnMoreForm extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.submitTheForm = this.submitTheForm.bind(this)
    this.formSentSuccess = this.formSentSuccess.bind(this)
    this.formHaveErrors = this.formHaveErrors.bind(this)
    this.resetTheForm = this.resetTheForm.bind(this)
    this.dismissError = this.dismissError.bind(this)

    this.state = {
      submitting: false,
      formHasErrors: false,
      formSent: false,
      errors: [],
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      subject: "",
      question: "",
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        ...prevState,
        subject: this.props.subject,
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
    bodyFormData.append("yourName", this.state.yourName)
    bodyFormData.append("yourEmail", this.state.yourEmail)
    bodyFormData.append("yourPhone", this.state.yourPhone)
    bodyFormData.append("subject", this.state.subject)
    bodyFormData.append("question", this.state.question)

    const baseURL = "https://database.nosecreekvalleymuseum.com/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/575/feedback`,
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
    this.setState(prevState => {
      return {
        ...prevState,
        submitting: false,
        formHasErrors: false,
        formSent: false,
        errors: [],
        yourName: "",
        yourEmail: "",
        yourPhone: "",
        subject: "",
        question: "",
      }
    })

    this.props.toggleLearnMoreForm()
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
    let yourNameError = false
    let yourEmailError = false
    let yourPhoneError = false
    let subjectError = false
    let questionError = false

    this.state.errors.forEach(error => {
      if (error.idref === "yourName") {
        yourNameError = "Full Name is required"
      } else if (error.idref === "yourEmail") {
        yourEmailError = "email is required"
      } else if (error.idref === "yourPhone") {
        yourPhoneError = "Phone number is required"
      } else if (error.idref === "subject") {
        subjectError = "Subject is Required"
      } else if (error.idref === "question") {
        questionError = "Your question is Required"
      }
    })
    return (
      <StyledForm className="storyForm">
        <div className="learnForm__wrapper">
          <h3>More Information Form</h3>
          <form className="learnForm__form" onSubmit={this.submitTheForm}>
            <div className="learnForm__field">
              <label htmlFor="yourName">Name</label>
              {yourNameError && (
                <p className="form-error-message">{yourNameError}</p>
              )}
              <div>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={this.state.yourName}
                  onChange={this.onChange}
                  required={false}
                />
              </div>
            </div>

            <div className="learnForm__field">
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

            <div className="learnForm__field">
              <label htmlFor="yourPhone">Phone Number</label>
              {yourPhoneError && (
                <p className="form-error-message">{yourPhoneError}</p>
              )}
              <input
                type="phone"
                id="yourPhone"
                name="yourPhone"
                value={this.state.yourPhone}
                onChange={this.onChange}
                required={false}
              />
            </div>

            <div className="learnForm__field">
              <label htmlFor="subject">Subject</label>
              {subjectError && (
                <p className="form-error-message">{subjectError}</p>
              )}
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.onChange}
                  required={false}
                />
              </div>
            </div>

            <div className="learnForm__field learnForm__field--textarea">
              <label htmlFor="question">Question / Comment / Request</label>
              {questionError && (
                <p className="form-error-message">{questionError}</p>
              )}
              <textarea
                cols="40"
                rows="8"
                id="question"
                name="question"
                value={this.state.question}
                onChange={this.onChange}
                required={false}
              />
            </div>
            <div className="learnForm__button">
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
      </StyledForm>
    )
  }
}
