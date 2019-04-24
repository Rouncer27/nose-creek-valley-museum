import styled from "styled-components"

const TwoSpanButtons = styled.div`
  a {
    display: inline-block;
    color: #d67c5b;

    span:first-of-type {
      text-transform: uppercase;
    }

    span:last-of-type {
      font-family: ${props => props.theme.fontSec};
      font-style: italic;
    }

    &:hover {
      color: ${props => props.theme.white};
    }
  }
`

export { TwoSpanButtons }
