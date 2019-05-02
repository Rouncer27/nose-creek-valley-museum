import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { StoryCardMedium } from "../../../components/styles/Commons/StoryCard"

const RowTwoStyled = styled.section`
  .rtwo__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .rtwo__testimoinals {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 50%;
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
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: test.testimonial }} />
                  <div>
                    <p>{test.name}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <StoryCardMedium className="rtwo__atriclethree">
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
              <p>Written By</p>
              <h2>{this.props.postThree.node.title}</h2>
            </div>
          </StoryCardMedium>
        </div>
      </RowTwoStyled>
    )
  }
}

export default RowTwo
