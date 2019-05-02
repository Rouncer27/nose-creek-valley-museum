import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import { StoryCardSmall } from "../../../components/styles/Commons/StoryCard"
import { StoryCardMedium } from "../../../components/styles/Commons/StoryCard"

const RowThreeStyled = styled.section`
  .rthree__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }
`

class RowThree extends Component {
  render() {
    return (
      <RowThreeStyled>
        <div className="rthree__container">
          <StoryCardMedium className="rthree__atriclefour">
            <div className="rthree__atriclefour--image storyCardImage">
              <Img
                fluid={
                  this.props.postFour.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={this.props.postFour.node.acf._ncvm_featured_image.alt_text}
              />
            </div>
            <div className="rthree__atriclefour--title storyCardTitle">
              <p>Written By</p>
              <h2>{this.props.postFour.node.title}</h2>
            </div>
          </StoryCardMedium>

          <StoryCardSmall className="rthree__atriclefive">
            <div className="rthree__atriclefive--image storyCardImage">
              <Img
                fluid={
                  this.props.postFive.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={this.props.postFive.node.acf._ncvm_featured_image.alt_text}
              />
            </div>
            <div className="rthree__atriclefive--title storyCardTitle">
              <h2>{this.props.postFive.node.title}</h2>
            </div>
          </StoryCardSmall>

          <StoryCardSmall className="rthree__atriclesix">
            <div className="rthree__atriclesix--image storyCardImage">
              <Img
                fluid={
                  this.props.postSix.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={this.props.postSix.node.acf._ncvm_featured_image.alt_text}
              />
            </div>
            <div className="rthree__atriclesix--title storyCardTitle">
              <h2>{this.props.postSix.node.title}</h2>
            </div>
          </StoryCardSmall>
        </div>
      </RowThreeStyled>
    )
  }
}

export default RowThree
