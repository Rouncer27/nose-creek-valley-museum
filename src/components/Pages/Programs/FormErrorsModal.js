import React from "react"
import styled from "styled-components"

const FormErrorsModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 501;

  .form-error-modal__message {
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

  .form-error-modal__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.rawSienna};
    opacity: 0.75;
    z-index: 1;
  }
`

const FormErrorsModal = ({ dismissError }) => {
  return (
    <FormErrorsModalStyled onClick={dismissError} className="form-error-modal">
      <div className="form-error-modal__message">
        <p>
          Your Form Has Errors. Please fix the required fields to submit form.
        </p>
        <button
          onClick={dismissError}
          className="form-error-modal__message--button"
        >
          Close
        </button>
      </div>
      <div className="form-error-modal__background" />
    </FormErrorsModalStyled>
  )
}

export default FormErrorsModal
