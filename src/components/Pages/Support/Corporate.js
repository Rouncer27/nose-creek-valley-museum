import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"

import benefactor from "../../../images/support/ncvm-icons_benefactor.png"
import friend from "../../../images/support/ncvm-icons_Friend.png"
import patron from "../../../images/support/ncvm-icons_Patron.png"
import contributor from "../../../images/support/ncvm-icons-17.png"

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
    a {
      color: ${props => props.theme.deepSea};

      &:hover {
        color: ${props => props.theme.rawSienna};
      }
    }
  }
`

class Corporate extends Component {
  render() {
    return (
      <CorporateStyled className="corpspon">
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
            <a target="_blank" href={this.props.link}>
              <span>Sponsor / </span>
              today
            </a>
          </TwoSpanButtons>
        </StandardWrapper>
      </CorporateStyled>
    )
  }
}

export default Corporate
