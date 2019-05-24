import React, { Component } from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import TextField from "../../../components/styles/Commons/FormParts/TextField"
import TextArea from "../../../components/styles/Commons/FormParts/TextArea"

const FormsStyled = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 10rem;

  .forms__wrapper {
    padding: 0;
    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 2rem;
      flex-direction: row-reverse;
    }
  }

  .forms__background {
    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      top: 0;
      left: 0%;
      width: 30%;
      height: 100%;
      background: ${props => props.theme.grape};
      opacity: 0.95;
      z-index: 1;
    }
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

    &--fields {
      padding: 4rem;
      background: ${props => props.theme.neptune};

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 4rem;
      }

      label {
        display: block;
        margin-top: 2rem;
        color: ${props => props.theme.black};

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.2rem;
        }
      }

      &--button {
        width: 100%;
        text-align: center;

        button {
          display: inline-block;
          position: relative;
          padding: 1rem 0;
          transition: all 0.3s ease-in-out;
          background: transparent;
          color: ${props => props.theme.deepSea};
          border: none;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpTablet}) {
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }

          .italic-btn {
            font-family: ${props => props.theme.fontSec};
            font-style: italic;
            text-transform: capitalize;
          }

          .btn-circle {
            display: block;
            position: absolute;
            top: 50%;
            right: -4.5rem;
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
            color: ${props => props.theme.deco};
            cursor: pointer;

            .btn-circle {
              color: ${props => props.theme.deco};
              &::before {
                border-color: ${props => props.theme.deco};
              }
              &::after {
                color: ${props => props.theme.deco};
              }
            }
          }
        }
      }

      &--smallprint {
        margin-top: 4rem;

        p {
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontTer};
          font-style: italic;
          font-weight: 300;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .forms__curator {
    position: relative;
    width: 100%;
    background: ${props => props.theme.grape};
    z-index: 5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(30% - 2rem);
      margin-right: 2rem;
      margin-left: 0;
      padding: 10rem 2rem;
      background: transparent;
    }

    h2 {
      padding: 2rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-size: 3rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        margin-bottom: 2rem;
        padding: 0;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 4rem;
      }
    }

    &--details {
      padding: 0 2rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 0;
        text-align: left;
      }

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

    &--fields {
      padding: 4rem;
      background: ${props => props.theme.grape};

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 0;
        background: transparent;
      }

      label {
        display: block;
        margin-top: 2rem;
        color: ${props => props.theme.white};

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.2rem;
        }
      }

      &--button {
        width: 100%;
        margin-top: 5rem;
        text-align: center;

        button {
          display: inline-block;
          position: relative;
          padding: 1rem 0;
          transition: all 0.3s ease-in-out;
          background: transparent;
          color: ${props => props.theme.deco};
          border: none;
          text-transform: uppercase;

          @media (min-width: ${props => props.theme.bpTablet}) {
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            margin-bottom: 1rem;
            font-size: 1.8rem;
          }

          .italic-btn {
            font-family: ${props => props.theme.fontSec};
            font-style: italic;
            text-transform: capitalize;
          }

          .btn-circle {
            display: block;
            position: absolute;
            top: 50%;
            right: -4.5rem;
            width: 3.2rem;
            height: 3.2rem;
            transform: translate(0%, -50%);
            transition: all 0.3s ease-in-out;
            color: ${props => props.theme.deco};
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
              border: 0.2rem solid ${props => props.theme.deco};
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
            color: ${props => props.theme.white};
            cursor: pointer;

            .btn-circle {
              color: ${props => props.theme.white};
              &::before {
                border-color: ${props => props.theme.white};
              }
              &::after {
                color: ${props => props.theme.white};
              }
            }
          }
        }
      }
    }
  }
`

class Forms extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      errors: [],
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

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
                  field.value = this.state[field.field_id]
                    ? this.state[field.field_id]
                    : ""
                  return (
                    <div key={index}>
                      <label htmlFor={field.field_id}>{field.label}</label>
                      {field.field_type === "input" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "email" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "phone" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "textarea" && (
                        <TextArea
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                    </div>
                  )
                })}
                <div
                  className="forms__story--fields--smallprint"
                  dangerouslySetInnerHTML={{ __html: this.props.storySmall }}
                />
                <div className="forms__story--fields--button">
                  <button>
                    Story / <span className="italic-btn">Submit</span>
                    <span className="btn-circle" />
                  </button>
                </div>
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
                  field.value = this.state[field.field_id]
                    ? this.state[field.field_id]
                    : ""
                  return (
                    <div key={index}>
                      <label htmlFor={field.field_id}>{field.label}</label>
                      {field.field_type === "input" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "email" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "phone" && (
                        <TextField
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                      {field.field_type === "textarea" && (
                        <TextArea
                          field={field}
                          onChange={this.onChange}
                          errors={[]}
                        />
                      )}
                    </div>
                  )
                })}
                <div className="forms__curator--fields--button">
                  <button>
                    Curator / <span className="italic-btn">Submit</span>
                    <span className="btn-circle" />
                  </button>
                </div>
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
