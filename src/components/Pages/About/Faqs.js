import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"

const FaqsStyled = styled.section`
  padding: 5rem 0;
  background-color: #eaeaea;

  .faqs__title {
    width: 100%;
    text-align: left;
    h2 {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7.5rem;
      }
    }
  }

  .faqs__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .faqs__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &--question {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 4rem);
        margin: 2rem;
      }

      &--title {
        width: 15%;
        margin: 0;
        color: ${props => props.theme.neptune};
        font-family: ${props => props.theme.fontSec};
        font-size: 3rem;
        line-height: 1;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 4rem;
        }
      }

      &--content {
        width: 85%;
        margin: 0;
      }
    }

    &--answer {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 4rem);
        margin: 2rem;
      }

      &--title {
        width: 100%;
        margin: 0;
        color: ${props => props.theme.neptune};
        font-family: ${props => props.theme.fontSec};
        font-size: 3rem;
        line-height: 1;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 4rem;
        }
      }

      &--content {
        width: 100%;

        p {
          margin: 0;
        }
      }
    }
  }
`

class Faqs extends Component {
  render() {
    return (
      <FaqsStyled className="faqs">
        <StandardWrapper className="faqs__wrapper">
          <div className="faqs__title">
            <h2>Faqs</h2>
          </div>
          <div className="faqs__container">
            {this.props.faqs.map((faq, index) => {
              return (
                <div key={index} className="faqs__item">
                  <div className="faqs__item--question">
                    <p className="faqs__item--question--title">Q</p>
                    <p className="faqs__item--question--content">
                      {faq.question}
                    </p>
                  </div>
                  <div className="faqs__item--answer">
                    <p className="faqs__item--answer--title">Answer</p>
                    <div
                      className="faqs__item--answer--content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </StandardWrapper>
      </FaqsStyled>
    )
  }
}

export default Faqs
