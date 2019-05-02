import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { BigHeadlines } from "../../../components/styles/Commons/Titles"
import {
  StoryCardSmall,
  StoryCardLarge,
} from "../../../components/styles/Commons/StoryCard"

const RowOneStyled = styled.section`
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
          <div className="rone__title">
            <h2>Stories.</h2>
          </div>

          <div className="rone__container">
            <StoryCardLarge className="rone__atricleone">
              <div className="rone__atricleone--image storyCardImage">
                <Img
                  fluid={
                    this.props.postOne.node.acf._ncvm_featured_image.localFile
                      .childImageSharp.fluid
                  }
                  alt={
                    this.props.postOne.node.acf._ncvm_featured_image.alt_text
                  }
                />
              </div>
              <div className="rone__atricleone--title storyCardTitle">
                <p>Written By</p>
                <h2>{this.props.postOne.node.title}</h2>
              </div>
            </StoryCardLarge>

            <StoryCardSmall className="rone__atricletwo">
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
