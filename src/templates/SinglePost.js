/* eslint-disable */
import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import moment from "moment"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import { StandardWrapper } from "../components/styles/Commons/Wrappers"
import SocialShareButtons from "../components/Templates/SocialShareButtons"

const ArticleStyled = styled.article`
  .singleStory__header {
    position: relative;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;

    h1 {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
    }

    &--author {
      color: ${props => props.theme.neptune};
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
      }
    }

    &--date {
      position: absolute;
      top: 40rem;
      left: -2rem;
      margin: 0;
      transform-origin: center left;
      transform: rotate(-90deg);
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-style: italic;
      font-size: 2rem;
      z-index: 100;
      line-height: 1;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
      }

      span {
        font-family: ${props => props.theme.fontPrim};
        font-style: normal;
        text-transform: uppercase;
      }
    }

    .gatsby-image-wrapper {
      width: 100%;
    }
  }

  .singleStory__wysiwyg {
    p {
      color: ${props => props.theme.paraGrey};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 300;
    }
  }
`

const OtherRelatedPosts = styled.div`
  .otherExhibits__wrapper {
    justify-content: flex-start;
    padding: 0;
  }
  .otherExhibits__title {
    width: 100%;

    h3 {
      margin: 0;
      margin-bottom: 1rem;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontTer};
      font-size: 2rem;
      font-weight: 700;
      text-align: left;
    }
  }

  .otherExhibits__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      margin-bottom: 10rem;
      padding: 0;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      margin-bottom: 15rem;
      padding: 0;
    }
  }

  .otherExhibits__item {
    position: relative;
    box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.16);

    @media (min-width: ${props => props.theme.bpTablet}) {
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(33.33% - 4rem);
      margin: 2rem;
    }

    &--featuredImg {
      position: relative;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        height: 25vw;
        overflow: hidden;
      }

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }

    &--title {
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding: 1rem;

      h2 {
        margin: 0;
        margin-bottom: 1rem;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontPrim};
        font-size: 2rem;
        font-weight: 700;
        text-align: center;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.6rem;
        }
      }

      p {
        margin: 0;
        color: ${props => props.theme.neptune};
        text-align: center;
        text-transform: uppercase;
      }
    }

    &--excerpt {
      padding: 0 2rem;

      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;
        text-align: center;
      }
    }
  }
`

class SinglePost extends Component {
  render() {
    const acf = this.props.data.wordpressPage
      ? this.props.data.wordpressPage.acf
      : false
    const heroData = {}
    heroData.tagline = acf ? acf._ncvm_hero_image_tagline : false
    heroData.imgFluid = acf
      ? acf._ncvm_hero_image.localFile.childImageSharp.fluid
      : false
    heroData.imgalt = acf ? acf._ncvm_hero_image.alt_text : false

    const recommendPosts = this.props.data.allWordpressPost.edges

    let counter = 0

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <ArticleStyled className="singleStory">
          <StandardWrapper className="singleStory__wrapper">
            <header className="singleStory__header">
              <h1>{this.props.data.wordpressPost.title}</h1>
              <p className="singleStory__header--author">
                {this.props.data.wordpressPost.acf._ncvm_post_author}
              </p>
              <p className="singleStory__header--date">
                <span>Date / </span>
                {moment(this.props.data.wordpressPost.date).format("LL")}
              </p>
              <Img
                fluid={
                  this.props.data.wordpressPost.acf._ncvm_featured_image
                    .localFile.childImageSharp.fluid
                }
                alt={
                  this.props.data.wordpressPost.acf._ncvm_featured_image
                    .alt_text
                }
              />
            </header>
            <section
              className="singleStory__wysiwyg"
              dangerouslySetInnerHTML={{
                __html: this.props.data.wordpressPost.content,
              }}
            />
            <div className="singleStory__social">
              <p>Share</p>
              <SocialShareButtons
                url={this.props.location.href}
                title={this.props.data.wordpressPost.title}
              />
            </div>
          </StandardWrapper>
        </ArticleStyled>

        <OtherRelatedPosts className="otherExhibits">
          <StandardWrapper className="otherExhibits__wrapper">
            <div className="otherExhibits__title">
              <h3>Stories We Recommend</h3>
            </div>
          </StandardWrapper>
          <div className="otherExhibits__container">
            {recommendPosts.map((post, index) => {
              if (
                this.props.data.wordpressPost.slug !== post.node.slug &&
                counter < 3
              ) {
                counter++
                return (
                  <Link
                    to={`/stories/${post.node.slug}`}
                    key={index}
                    className="otherExhibits__item"
                  >
                    <div className="otherExhibits__item--featuredImg">
                      <Img
                        fluid={
                          post.node.acf._ncvm_featured_image.localFile
                            .childImageSharp.fluid
                        }
                        alt={post.node.acf._ncvm_featured_image.alt_text}
                      />
                    </div>
                    <div className="otherExhibits__item--title">
                      <h2>{post.node.title}</h2>
                      <p>Blog Written By {post.node.acf._ncvm_post_author}</p>
                    </div>
                    <div
                      className="otherExhibits__item--excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.node.excerpt,
                      }}
                    />
                  </Link>
                )
              }
            })}
          </div>
        </OtherRelatedPosts>
      </Layout>
    )
  }
}

export const query = graphql`
  query singleStory($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      date
      acf {
        _ncvm_post_author
        _ncvm_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    wordpressPage(wordpress_id: { eq: 18 }) {
      slug
      acf {
        _ncvm_hero_image_tagline
        _ncvm_hero_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    allWordpressPost(limit: 4) {
      edges {
        node {
          slug
          title
          excerpt
          acf {
            _ncvm_post_author
            _ncvm_featured_image {
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SinglePost
