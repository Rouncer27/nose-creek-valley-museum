import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import TextField from "../../../components/styles/Commons/FormParts/TextField"
import TextArea from "../../../components/styles/Commons/FormParts/TextArea"

import SubmittingModal from "../Programs/SubmittingModal"
import FormSentSuccess from "../Programs/FormSentSuccess"
import FormErrorsModal from "../Programs/FormErrorsModal"

const StyledForm = styled.form`
  .storyForm__field {
    width: 100%;

    label {
      display: block;
      margin-top: 2rem;
      color: ${props => props.theme.black};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }
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

class StoryForm extends Component {
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
      phoneNumber: "",
      yourStory: "",
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
    bodyFormData.append("yourName", this.state.yourName)
    bodyFormData.append("yourEmail", this.state.yourEmail)
    bodyFormData.append("phoneNumber", this.state.phoneNumber)
    bodyFormData.append("yourStory", this.state.yourStory)

    const baseURL = "http://dedi105.canspace.ca/~swbecreekvalleym/"
    const config = { headers: { "Content-Type": "multipart/form-data" } }

    axios
      .post(
        `${baseURL}/wp-json/contact-form-7/v1/contact-forms/547/feedback`,
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
        phoneNumber: "",
        yourStory: "",
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
    let yourNameError = false
    let yourEmailError = false
    let phoneNumberError = false
    let yourStoryError = false
    return (
      <StyledForm className="storyForm" onSubmit={this.submitTheForm}>
        <div className="storyForm__field">
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

        <div className="storyForm__field">
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

        <div className="storyForm__field">
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

        <div className="storyForm__field">
          <label htmlFor="yourStory">Story</label>
          {yourStoryError && (
            <p className="form-error-message">{yourStoryError}</p>
          )}
          <textarea
            cols="40"
            rows="8"
            id="yourStory"
            name="yourStory"
            value={this.state.yourStory}
            onChange={this.onChange}
            required={false}
          />
        </div>

        <div
          className="forms__story--fields--smallprint"
          dangerouslySetInnerHTML={{ __html: this.props.storySmall }}
        />
        <div className="forms__story--fields--button">
          <button>
            Story / <span className="italic-btn">Submit</span>
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

export default StoryForm
