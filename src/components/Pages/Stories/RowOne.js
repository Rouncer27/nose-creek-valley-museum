import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { BigHeadlines } from "../../../components/styles/Commons/Titles"
import {
  StoryCardSmall,
  StoryCardLarge,
} from "../../../components/styles/Commons/StoryCard"

const RowOneStyled = styled.section`
  .rone__title {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 5rem;

    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 7rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 10rem;
        text-align: left;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 15rem;
      }
    }
  }

  .rone__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }
`

class RowOne extends Component {
  render() {
    return (
      <RowOneStyled className="rone">
        <div className="rone__wrapper">
          <BigHeadlines className="rone__title">
            <h2>Stories.</h2>
          </BigHeadlines>

          <div className="rone__container">
            <StoryCardLarge
              to={`/stories/${this.props.postOne.node.slug}`}
              className="rone__atricleone"
            >
              <div className="rone__atricleone--image storyCardImage">
                <Img
                  fluid={
                    this?.props?.postOne?.node?.acf?._ncvm_featured_image?.localFile?.childImageSharp?.fluid
                  }
                  alt={
                    this?.props?.postOne?.node?.acf?._ncvm_featured_image?.alt_text
                  }
                />
              </div>
              <div className="rone__atricleone--title storyCardTitle">
                <p>
                  Written By {this.props.postOne.node.acf._ncvm_post_author}
                </p>
                <h2>{this.props.postOne.node.title}</h2>
              </div>
            </StoryCardLarge>

            <StoryCardSmall
              to={`/stories/${this.props.postTwo.node.slug}`}
              className="rone__atricletwo"
            >
              <div className="rone__atricletwo--image storyCardImage">
                <Img
                  fluid={
                    this.props.postTwo.node.acf._ncvm_featured_image.localFile
                      .childImageSharp.fluid
                  }
                  alt={
                    this.props.postTwo.node.acf._ncvm_featured_image.alt_text
                  }
                />
              </div>
              <div className="rone__atricletwo--title storyCardTitle">
                <p>
                  Written By {this.props.postTwo.node.acf._ncvm_post_author}
                </p>
                <h2>{this.props.postTwo.node.title}</h2>
              </div>
            </StoryCardSmall>
          </div>
        </div>
      </RowOneStyled>
    )
  }
}

export default RowOne
