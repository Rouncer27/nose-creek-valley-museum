import React from "react"
import styled from "styled-components"

const TextAreaStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 0.5rem;

  p.error-warning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    color: red;
    font-size: 1.2rem;
  }

  textarea {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.1rem;
    border: none;
    color: ${props => props.theme.black};
    font-weight: bold;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.black};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem ${props => props.theme.deco};
    }
  }
`

const TextArea = props => {
  let errorMessage = false
  props.errors.forEach(error => {
    if (error.idref === props.name) {
      errorMessage = `${error.message} -- ${props.label}`
    }
  })
  return (
    <TextAreaStyled>
      {errorMessage && <p className="error-warning">{errorMessage}</p>}
      <textarea
        cols="40"
        rows="8"
        name={props.field.field_id}
        id={props.field.field_id}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      />
    </TextAreaStyled>
  )
}

export default TextArea
