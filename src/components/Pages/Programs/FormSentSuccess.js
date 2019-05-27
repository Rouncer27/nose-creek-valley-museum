import React from "react"
import styled from "styled-components"

const FormSentSuccessStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;

  .form-send-modal__message {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 50rem;
    padding: 7.5rem;
    transform: translate(-50%, -50%);
    background: ${props => props.theme.white};
    text-align: center;
    z-index: 5;

    p {
      font-weight: bold;
    }

    &--button {
      display: block;
      margin-top: 4rem;
      margin-right: auto;
      margin-left: auto;
    }
  }

  .form-send-modal__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.grape};
    opacity: 0.75;
    z-index: 1;
  }
`

const FormSentSuccess = ({ resetTheForm }) => {
  return (
    <FormSentSuccessStyle onClick={resetTheForm} className="form-send-modal">
      <div className="form-send-modal__message">
        <p>Success! Your Form Have Been Sent.</p>
        <button
          onClick={resetTheForm}
          className="form-send-modal__message--button"
        >
          Close
        </button>
      </div>
      <div className="form-send-modal__background" />
    </FormSentSuccessStyle>
  )
}

export default FormSentSuccess
