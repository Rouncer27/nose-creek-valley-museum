import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"
import { BigHeadlines } from "../../../components/styles/Commons/Titles"
import { TwoSpanButtons } from "../../../components/styles/Commons/Buttons"

const TwoSpanButtonsMod = styled(TwoSpanButtons)`
  a {
    color: ${props => props.theme.deco};

    &:hover {
      color: ${props => props.theme.grape};
    }
  }
`

const LearnStyled = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;

  .learn__wrapper {
    flex-direction: row-reverse;
  }

  .learn__content {
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(60% - 6rem);
      margin-right: 3rem;
      margin-left: 3rem;
      text-align: left;
    }
  }

  .learn__image {
    width: calc(60% - 6rem);
    max-width: 30rem;
    margin-top: 3rem;
    margin-right: 3rem;
    margin-left: 3rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(40% - 6rem);
      max-width: 20rem;
      margin-top: 0;
      margin-right: 3rem;
      margin-left: 3rem;
    }
  }
`

class Learn extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            vintageCamera: file(
              relativePath: { eq: "ncvm-vintage-camera.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <LearnStyled className="learn">
              <StandardWrapper className="learn__wrapper">
                <div className="learn__content">
                  <BigHeadlines className="learn__content--title">
                    <h2>We know you are curious. Don’t wonder anymore.</h2>
                  </BigHeadlines>
                  <TwoSpanButtonsMod className="learn__content--button">
                    <Link to="/about">
                      <span>Learn / </span>
                      <span>About Us</span>
                    </Link>
                  </TwoSpanButtonsMod>
                </div>
                <div className="learn__image">
                  <Img
                    fluid={data.vintageCamera.childImageSharp.fluid}
                    alt="We know you are curious. Don’t wonder anymore."
                  />
                </div>
              </StandardWrapper>
            </LearnStyled>
          )
        }}
      />
    )
  }
}

export default Learn
