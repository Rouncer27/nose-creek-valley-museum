import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import SingleFaq from "./SingleFaq"

const FaqsStyled = styled.section`
  padding: 0 0 2rem;
  background-color: #eaeaea;

  @media (min-width: ${props => props.theme.bpTablet}) {
    padding: 5rem 0;
  }

  .faqs__title {
    width: 100%;
    text-align: left;
    h2 {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
      font-size: 5rem;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 7.5rem;
      }

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
    overflow: hidden;

    &--question {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 3rem;
      padding: 3rem 7.5rem 3rem 1rem;
      background: rgba(139, 192, 186, 0.75);

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(100% - 4rem);
        margin: 1rem 2rem;
      }

      &--title {
        width: 15%;
        margin: 0;
        color: ${props => props.theme.deepSea};
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

      &--button {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);

        button {
          position: relative;
          width: 4rem;
          height: 4rem;
          font-size: 3rem;
          transition: all 0.3s ease;
          background: transparent;
          border-radius: 50%;
          border: 0.3rem solid ${props => props.theme.deepSea};

          &::after {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transition: all 0.3s ease;
            transform: translate(-50%, -50%);
            color: ${props => props.theme.deepSea};
            font-family: ${props => props.theme.fontAwesome};
            content: "\f078";
          }

          &:hover {
            cursor: pointer;
            border: 0.3rem solid ${props => props.theme.rawSienna};

            &::after {
              color: ${props => props.theme.rawSienna};
            }
          }
        }
      }
    }

    &--answer {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(100% - 4rem);
        margin: 0 2rem;
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

        p {
          font-family: ${props => props.theme.fontSec};

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.6rem;
          }
        }

        p:last-of-type {
          margin: 0;
        }
      }
    }
  }
`

class Faqs extends Component {
  render() {
    return (
      <FaqsStyled id="faqsInfo" className="faqs">
        <StandardWrapper className="faqs__wrapper">
          <div className="faqs__title">
            <h2>Faq</h2>
          </div>
          <div className="faqs__container">
            {this.props.faqs.map((faq, index) => {
              return <SingleFaq key={index} faq={faq} />
            })}
          </div>
        </StandardWrapper>
      </FaqsStyled>
    )
  }
}

export default Faqs
