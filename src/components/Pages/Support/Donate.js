import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"
import DonateAnimation from "./DonateAnimation"

import LearnMoreForm from "./LearnMoreForm"

const DonateStyled = styled.section`
  padding: 5rem 0;

  .donate__title {
    width: 100%;
    margin-bottom: 2rem;

    h2 {
      margin: 0;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-size: 4rem;
      text-align: center;
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 5rem;
        text-align: left;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 8rem;
      }
    }
  }

  .donate__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &--icon {
      width: 100%;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(35% - 5rem);
        margin: 0 2.5rem;
      }
    }

    &--paragraph {
      width: 100%;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(65% - 5rem);
        margin: 0 2.5rem;
      }

      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: normal;
        font-size: 2rem;
        line-height: 1.2;
        opacity: 0.85;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }
      }
    }

    &--link {
      width: 100%;
      margin-top: 4rem;
      margin-bottom: 4rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin-bottom: 0;
      }

      button,
      a {
        display: block;
        position: relative;
        padding: 1rem 5rem 1rem 1rem;
        transition: all 0.3s ease-in-out;
        background: transparent;
        border: none;
        color: ${props => props.theme.deepSea};
        font-weight: 700;
        font-size: 2.2rem;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.8rem;
        }

        .btn-circle {
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          width: 3.2rem;
          height: 3.2rem;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          color: ${props => props.theme.deepSea};
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
            border: 0.2rem solid ${props => props.theme.deepSea};
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
          color: ${props => props.theme.rawSienna};
          cursor: pointer;
          .btn-circle {
            color: ${props => props.theme.rawSienna};
            &::before {
              border-color: ${props => props.theme.rawSienna};
            }
            &::after {
              color: ${props => props.theme.rawSienna};
            }
          }
        }
      }
    }
  }
`

class Donate extends Component {
  constructor(props) {
    super(props)

    this.toggleLearnMoreForm = this.toggleLearnMoreForm.bind(this)

    this.state = {
      formActive: false,
    }
  }

  toggleLearnMoreForm() {
    this.setState(prevState => {
      return {
        ...prevState,
        formActive: !this.state.formActive,
      }
    })
  }

  render() {
    return (
      <DonateStyled id="donateInfo" className="donate">
        <StandardWrapper className="donate__wrapper">
          <div className="donate__title">
            <h2>Donate to the NCVM</h2>
          </div>
          <div className="donate__content">
            <div className="donate__content--icon">
              <DonateAnimation />
              <TwoSpanButtons className="donate__content--link">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.zeffy.com/en-CA/donation-form/donate-to-nose-creek-valley-museum"
                >
                  <span>Donate / </span>
                  <span className="italic-btn">Today</span>
                  <span className="btn-circle" />
                </a>
                {/* <button onClick={this.toggleLearnMoreForm}>
                  <span>Donate / </span>
                  <span className="italic-btn">Today</span>
                  <span className="btn-circle" />
                </button> */}
              </TwoSpanButtons>
            </div>
            <div
              className="donate__content--paragraph"
              dangerouslySetInnerHTML={{ __html: this.props.content }}
            />
          </div>
        </StandardWrapper>
        {this.state.formActive && (
          <LearnMoreForm
            toggleLearnMoreForm={this.toggleLearnMoreForm}
            subject="Learn How To Donate"
          />
        )}
      </DonateStyled>
    )
  }
}

export default Donate
