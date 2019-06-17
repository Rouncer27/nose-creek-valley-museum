import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StoryCardMedium } from "../../../components/styles/Commons/StoryCard"

const RowTwoStyled = styled.section`
  .rtwo__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .rtwo__testimoinals {
    width: 100%;
    padding: 5rem 2rem;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
      padding: 5rem 10rem;
    }

    &--item {
      &--content {
        text-align: center;

        p {
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontSec};
          font-style: italic;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.8rem;
          }
        }
      }

      &--author {
        text-align: center;
        p {
          margin: 0;
          color: ${props => props.theme.deepSea};
          font-weight: 700;
          text-transform: uppercase;
        }
      }
    }
  }
`

class RowTwo extends Component {
  render() {
    return (
      <RowTwoStyled>
        <div className="rtwo__container">
          <div className="rtwo__testimoinals">
            {this.props.testimonials.map((test, index) => {
              return (
                <div key={index} className="rtwo__testimoinals--item">
                  <div
                    className="rtwo__testimoinals--item--content"
                    dangerouslySetInnerHTML={{ __html: test.testimonial }}
                  />
                  <div className="rtwo__testimoinals--item--author">
                    <p>{test.name}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <StoryCardMedium
            to={`/stories/${this.props.postThree.node.slug}`}
            className="rtwo__atriclethree"
          >
            <div className="rtwo__atriclethree--image storyCardImage">
              <Img
                fluid={
                  this.props.postThree.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={
                  this.props.postThree.node.acf._ncvm_featured_image.alt_text
                }
              />
            </div>
            <div className="rtwo__atriclethree--title storyCardTitle">
              <p>
                Written By {this.props.postThree.node.acf._ncvm_post_author}
              </p>
              <h2>{this.props.postThree.node.title}</h2>
            </div>
          </StoryCardMedium>
        </div>
      </RowTwoStyled>
    )
  }
}

export default RowTwo
