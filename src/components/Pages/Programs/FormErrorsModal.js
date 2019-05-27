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
      display: inline-block;
      position: relative;
      padding: 1rem 0;
      transition: all 0.3s ease-in-out;
      background: transparent;
      color: ${props => props.theme.grape};
      border: none;
      text-transform: uppercase;

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
        right: -4.5rem;
        width: 3.2rem;
        height: 3.2rem;
        transform: translate(0%, -50%);
        transition: all 0.3s ease-in-out;
        color: ${props => props.theme.grape};
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
          border: 0.2rem solid ${props => props.theme.grape};
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
          <span className="italic-btn">Close</span>
          <span className="btn-circle" />
        </button>
      </div>
      <div className="form-error-modal__background" />
    </FormErrorsModalStyled>
  )
}

export default FormErrorsModal
