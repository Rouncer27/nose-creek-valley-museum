import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import {
  StoryCardSmall,
  StoryCardLarge,
} from "../../../components/styles/Commons/StoryCard"

const RowFourStyled = styled.section`
  .rfour__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .rfour__atricleeight {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 75%;
    }
  }
`

class RowFour extends Component {
  render() {
    return (
      <RowFourStyled>
        <div className="rfour__container">
          <StoryCardSmall className="rfour__atricleseven">
            <div className="rfour__atricleseven--image storyCardImage">
              <Img
                fluid={
                  this.props.postSeven.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={
                  this.props.postSeven.node.acf._ncvm_featured_image.alt_text
                }
              />
            </div>
            <div className="rfour__atricleseven--title storyCardTitle">
              <h2>{this.props.postSeven.node.title}</h2>
            </div>
          </StoryCardSmall>

          <StoryCardLarge className="rfour__atricleeight">
            <div className="rfour__atricleeight--image storyCardImage">
              <Img
                fluid={
                  this.props.postEight.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={
                  this.props.postEight.node.acf._ncvm_featured_image.alt_text
                }
              />
            </div>
            <div className="rfour__atricleeight--title storyCardTitle">
              <h2>{this.props.postEight.node.title}</h2>
            </div>
          </StoryCardLarge>
        </div>
      </RowFourStyled>
    )
  }
}

export default RowFour
