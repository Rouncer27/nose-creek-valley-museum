import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import { StoryCardSmall } from "../../../components/styles/Commons/StoryCard"

const RowSixStyled = styled.section`
  .rsix__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 20rem;
  }
`

class RowSix extends Component {
  render() {
    return (
      <RowSixStyled className="rsix">
        <div className="rsix__container">
          {this.props.remainingPosts.map((post, index) => {
            return (
              <StoryCardSmall key={index} className="rsix__atricle">
                <div className="rsix__atricle--image storyCardImage">
                  <Img
                    fluid={
                      post.node.acf._ncvm_featured_image.localFile
                        .childImageSharp.fluid
                    }
                    alt={post.node.acf._ncvm_featured_image.alt_text}
                  />
                </div>
                <div className="rsix__atricle--title storyCardTitle">
                  <h2>{post.node.title}</h2>
                </div>
              </StoryCardSmall>
            )
          })}
        </div>
      </RowSixStyled>
    )
  }
}

export default RowSix
