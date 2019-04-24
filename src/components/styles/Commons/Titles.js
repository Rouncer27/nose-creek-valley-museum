import styled from "styled-components"

const BigHeadlines = styled.div`
  h2 {
    color: ${props => props.theme.deepSea};
    font-family: ${props => props.theme.fontSec};
    line-height: 1.25;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      font-size: 5rem;
    }
  }
`

export { BigHeadlines }
