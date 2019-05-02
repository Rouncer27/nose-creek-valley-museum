import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const FormsStyled = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 10rem;

  .forms__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: row-reverse;
    }
  }

  .forms__background {
    position: absolute;
    top: 0;
    left: 0%;
    width: 30%;
    height: 100%;
    background: ${props => props.theme.grape};
    opacity: 0.95;
    z-index: 1;
  }

  .forms__story {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(70% - 10rem);
      margin-right: 6rem;
      margin-left: 4rem;
      padding: 5rem;
    }

    &--title {
      h2 {
        font-family: ${props => props.theme.fontSec};
        line-height: 1.25;
      }

      h2 {
        margin-bottom: 2rem;
        color: ${props => props.theme.deepSea};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 5rem;
        }
      }
    }

    &--paragraphs {
      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
    }
  }

  .forms__curator {
    position: relative;
    width: 100%;
    z-index: 5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(30% - 8rem);
      margin-right: 2rem;
      margin-left: 6rem;
      padding: 10rem 4rem;
    }

    h2 {
      margin-bottom: 2rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      text-align: center;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4rem;
      }
    }

    &--details {
      p {
        margin-bottom: 2rem;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 100;
        opacity: 0.8;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }
      }
    }

    &--location {
      p {
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        font-weight: 100;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }
      }
    }
  }
`

class Forms extends Component {
  render() {
    return (
      <FormsStyled className="forms">
        <FullScreenWrapper className="forms__wrapper">
          <div className="forms__story">
            <div className="forms__story--title">
              <h2>Send a Story</h2>
            </div>
            <div
              className="forms__story--paragraphs"
              dangerouslySetInnerHTML={{ __html: this.props.story }}
            />
            <div className="forms__story--fields">
              <form>
                {this.props.storyForm.map((field, index) => {
                  return (
                    <div key={index}>
                      <label>{field.label}</label>
                    </div>
                  )
                })}
                <div
                  dangerouslySetInnerHTML={{ __html: this.props.storySmall }}
                />
              </form>
            </div>
          </div>

          <div className="forms__curator">
            <div className="forms__curator--title">
              <h2>Ask the Curator</h2>
            </div>
            <div
              className="forms__curator--details"
              dangerouslySetInnerHTML={{ __html: this.props.curator }}
            />
            <div className="forms__curator--fields">
              <form>
                {this.props.curatorForm.map((field, index) => {
                  return (
                    <div key={index}>
                      <label>{field.label}</label>
                    </div>
                  )
                })}
              </form>
            </div>
          </div>
        </FullScreenWrapper>
        <div className="forms__background" />
      </FormsStyled>
    )
  }
}

export default Forms
