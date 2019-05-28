import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import SubmittingModal from "../Programs/SubmittingModal"
import FormSentSuccess from "../Programs/FormSentSuccess"
import FormErrorsModal from "../Programs/FormErrorsModal"

const StyledForm = styled.form`
  .storyForm__field {
    position: relative;
    width: 100%;
    padding-top: 1rem;

    label {
      display: block;
      margin-top: 2rem;
      color: ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
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

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem ${props => props.theme.neptune};
      }
    }
  }
`

class CuratorForm extends Component {
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
      yourNameCur: "",
      yourEmailCur: "",
      phoneNumberCur: "",
      question: "",
    }
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
    bodyFormData.append("yourNameCur", this.state.yourNameCur)
    bodyFormData.append("yourEmailCur", this.state.yourEmailCur)
    bodyFormData.append("phoneNumberCur", this.state.phoneNumberCur)
    bodyFormData.append("question", this.state.question)

    const baseURL = "https://dedi105.canspace.ca/~swbecreekvalleym/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/548/feedback`,
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
            console.log(res.data.invalidFields)
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
        yourNameCur: "",
        yourEmailCur: "",
        phoneNumberCur: "",
        question: "",
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
    let yourNameCurError = false
    let yourEmailCurError = false
    let phoneNumberCurError = false
    let questionError = false

    this.state.errors.forEach(error => {
      if (error.idref === "yourNameCur") {
        yourNameCurError = "Full Name is required"
      } else if (error.idref === "yourEmailCur") {
        yourEmailCurError = "email is required"
      } else if (error.idref === "phoneNumberCur") {
        phoneNumberCurError = "Phone number is required"
      } else if (error.idref === "question") {
        questionError = "Your Question is Required"
      }
    })
    return (
      <StyledForm className="storyForm" onSubmit={this.submitTheForm}>
        <div className="storyForm__field">
          <label htmlFor="yourNameCur">Name</label>
          {yourNameCurError && (
            <p className="form-error-message">{yourNameCurError}</p>
          )}
          <div>
            <input
              type="text"
              id="yourNameCur"
              name="yourNameCur"
              value={this.state.yourNameCur}
              onChange={this.onChange}
              required={false}
            />
          </div>
        </div>

        <div className="storyForm__field">
          <label htmlFor="yourEmailCur">Email</label>
          {yourEmailCurError && (
            <p className="form-error-message">{yourEmailCurError}</p>
          )}
          <div>
            <input
              type="email"
              id="yourEmailCur"
              name="yourEmailCur"
              value={this.state.yourEmailCur}
              onChange={this.onChange}
              required={false}
            />
          </div>
        </div>

        <div className="storyForm__field">
          <label htmlFor="phoneNumberCur">Phone Number</label>
          {phoneNumberCurError && (
            <p className="form-error-message">{phoneNumberCurError}</p>
          )}
          <input
            type="phone"
            id="phoneNumberCur"
            name="phoneNumberCur"
            value={this.state.phoneNumberCur}
            onChange={this.onChange}
            required={false}
          />
        </div>

        <div className="storyForm__field">
          <label htmlFor="question">Question</label>
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
        <div className="forms__curator--fields--button">
          <button>
            Curator / <span className="italic-btn">Submit</span>
            <span className="btn-circle" />
          </button>
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

export default CuratorForm
