import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import { StoryCardSmall } from "../../../components/styles/Commons/StoryCard"
import { StoryCardMedium } from "../../../components/styles/Commons/StoryCard"

const RowFiveStyled = styled.section`
  .rfive__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .rfive__atricleeleven {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
    }
  }
`

class RowFive extends Component {
  render() {
    return (
      <RowFiveStyled>
        <div className="rfive__container">
          <StoryCardSmall
            to={`/stories/${this.props.postnine.node.slug}`}
            className="rfive__atriclenine"
          >
            <div className="rfive__atriclenine--image storyCardImage">
              <Img
                fluid={
                  this.props.postnine.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={this.props.postnine.node.acf._ncvm_featured_image.alt_text}
              />
            </div>
            <div className="rfive__atriclenine--title storyCardTitle">
              <p>Written By {this.props.postnine.node.acf._ncvm_post_author}</p>
              <h2>{this.props.postnine.node.title}</h2>
            </div>
          </StoryCardSmall>

          <StoryCardSmall
            to={`/stories/${this.props.postTen.node.slug}`}
            className="rfive__atricleten"
          >
            <div className="rfive__atricleten--image storyCardImage">
              <Img
                fluid={
                  this.props.postTen.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={this.props.postTen.node.acf._ncvm_featured_image.alt_text}
              />
            </div>
            <div className="rfive__atricleten--title storyCardTitle">
              <p>Written By {this.props.postTen.node.acf._ncvm_post_author}</p>
              <h2>{this.props.postTen.node.title}</h2>
            </div>
          </StoryCardSmall>

          <StoryCardMedium
            to={`/stories/${this.props.postEleven.node.slug}`}
            className="rfive__atricleeleven"
          >
            <div className="rfive__atricleeleven--image storyCardImage">
              <Img
                fluid={
                  this.props.postEleven.node.acf._ncvm_featured_image.localFile
                    .childImageSharp.fluid
                }
                alt={
                  this.props.postEleven.node.acf._ncvm_featured_image.alt_text
                }
              />
            </div>
            <div className="rfive__atricleeleven--title storyCardTitle">
              <p>
                Written By {this.props.postEleven.node.acf._ncvm_post_author}
              </p>
              <h2>{this.props.postEleven.node.title}</h2>
            </div>
          </StoryCardMedium>
        </div>
      </RowFiveStyled>
    )
  }
}

export default RowFive
