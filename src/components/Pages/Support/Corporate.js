import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"

import benefactor from "../../../images/support/ncvm-icons_benefactor.png"
import friend from "../../../images/support/ncvm-icons_Friend.png"
import patron from "../../../images/support/ncvm-icons_Patron.png"
import contributor from "../../../images/support/ncvm-icons-17.png"

import LearnMoreForm from "./LearnMoreForm"

const CorporateStyled = styled.section`
  .corpspon__title {
    width: 100%;
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;

    h2 {
      margin: 0;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 7rem;
      }

      span {
        display: block;
      }
    }
  }

  .corpspon__intro {
    width: 100%;
    margin: 0 auto 2rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 80rem;
    }

    p {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-weight: 700;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
      }
    }
  }

  .corpspon__levels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 2rem auto 4rem;

    &--level {
      width: 100%;
      background-size: 7.5rem;
      background-position: top center;
      background-repeat: no-repeat;
      padding-top: 7.5rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        width: calc(20% - 2rem);
        margin: 0 1rem;
      }

      &--benefactor {
        background-image: url(${benefactor});
      }

      &--contributor {
        background-image: url(${contributor});
      }

      &--patron {
        background-image: url(${patron});
      }

      &--friend {
        background-image: url(${friend});
      }

      h3 {
        margin: 0;
        color: ${props => props.theme.deepSea};
        font-weight: 700;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.6rem;
        }
      }

      p {
        margin: 0;
        color: ${props => props.theme.neptune};
        font-weight: 700;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.4rem;
        }
      }
    }
  }

  .corpspon__link {
    button {
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
`

class Corporate extends Component {
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
      <CorporateStyled id="corporateInfo" className="corpspon">
        <StandardWrapper className="corpspon__wrapper">
          <div className="corpspon__title">
            <h2>
              Corporate <span>Sponsorship</span>
            </h2>
          </div>
          <div
            className="corpspon__intro"
            dangerouslySetInnerHTML={{ __html: this.props.intro }}
          />
          <div className="corpspon__levels">
            <div className="corpspon__levels--level corpspon__levels--level--benefactor">
              <h3>Benefactor</h3>
              <p>{this.props.benefactor}</p>
            </div>
            <div className="corpspon__levels--level corpspon__levels--level--contributor">
              <h3>Contributor</h3>
              <p>{this.props.contributor}</p>
            </div>
            <div className="corpspon__levels--level corpspon__levels--level--patron">
              <h3>Patron</h3>
              <p>{this.props.patron}</p>
            </div>
            <div className="corpspon__levels--level corpspon__levels--level--friend">
              <h3>Friend</h3>
              <p>{this.props.friend}</p>
            </div>
          </div>
          <TwoSpanButtons className="corpspon__link">
            <button onClick={this.toggleLearnMoreForm}>
              <span>Sponsor / </span>
              <span className="italic-btn">today</span>
              <span className="btn-circle" />
            </button>
          </TwoSpanButtons>
        </StandardWrapper>
        {this.state.formActive && (
          <LearnMoreForm
            toggleLearnMoreForm={this.toggleLearnMoreForm}
            subject="Corporate Sponsorship"
          />
        )}
      </CorporateStyled>
    )
  }
}

export default Corporate
