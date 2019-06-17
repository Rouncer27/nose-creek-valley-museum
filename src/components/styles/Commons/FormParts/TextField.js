import React from "react"
import styled from "styled-components"

const TextFieldStyled = styled.div`
  position: relative;
  width: 60%;
  margin-right: 20%;
  margin-left: 20%;
  padding-top: 0.5rem;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 100%;
    margin-right: 0%;
    margin-left: 0%;
  }

  p.error-warning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    color: red;
    font-size: 1.2rem;
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
      box-shadow: 0 0 0 0.2rem ${props => props.theme.deco};
    }
  }
`

const TextField = props => {
  let errorMessage = false
  props.errors.forEach(error => {
    if (error.idref === props.name) {
      errorMessage = `${error.message} -- ${props.label}`
    }
  })
  return (
    <TextFieldStyled>
      {errorMessage && <p className="error-warning">{errorMessage}</p>}
      <input
        type={props.field.field_type}
        id={props.field.field_id}
        name={props.field.field_id}
        value={props.field.value}
        onChange={props.onChange}
        required={props.required}
      />
    </TextFieldStyled>
  )
}

export default TextField
