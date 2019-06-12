/* eslint-disable */
import React, { Component } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"
import SocialShareButtons from "../components/Templates/SocialShareButtons"

import { StandardWrapper } from "../components/styles/Commons/Wrappers"

const SpecialExhibitStyled = styled.article`
  .specialExhibit__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      flex-direction: row-reverse;
    }
  }

  .specialExhibit__header {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    h1 {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
    }

    p {
      color: ${props => props.theme.neptune};
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
      }
    }

    .gatsby-image-wrapper {
      width: 100%;
    }
  }

  .specialExhibit__mainContent {
    width: 100%;
    padding-top: 2.5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(60% - 4rem);
      margin: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
    }

    &--wysiwyg {
      p {
        color: ${props => props.theme.paraGrey};
        font-family: ${props => props.theme.fontTer};
        font-weight: 300;
      }
    }

    &--buyTickets {
      text-align: center;
      padding-top: 4rem;
      padding-bottom: 4rem;

      p {
        margin-bottom: 2rem;
        color: ${props => props.theme.neptune};
        font-family: ${props => props.theme.fontTer};
        text-transform: uppercase;
      }

      a {
        display: block;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontPrim};
        font-weight: 700;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2.6rem;
        }
      }
    }
  }

  .specialExhibit__sideContent {
    width: 100%;
    padding-top: 2.5rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(40% - 4rem);
      margin: 2rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
    }

    &--date {
      p {
        margin-bottom: 1rem;
        color: ${props => props.theme.deco};
        font-family: ${props => props.theme.fontSec};
        font-weight: 300;
        line-height: 1.13;
        hyphens: auto;

        @media (min-width: ${props => props.theme.bpTablet}) {
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 5.5rem;
        }

        span {
          display: block;
        }
      }
    }

    &--details {
      margin-top: 2rem;
      p {
        margin-bottom: 1rem;
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontTer};
        font-weight: 500;
        line-height: 1.13;
        hyphens: auto;

        @media (min-width: ${props => props.theme.bpTablet}) {
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 2rem;
        }
      }
    }
  }
`

const OtherSpecialExhibits = styled.section`
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

class SpecialExhibit extends Component {
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

    const otherSpecialExhibits = this.props.data.allWordpressWpSpecialExhibit
      .edges
    console.log(this.props.location.href)
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <SpecialExhibitStyled className="specialExhibit">
          <StandardWrapper className="specialExhibit__wrapper">
            <header className="specialExhibit__header">
              <h1>
                {this.props.data.wordpressWpSpecialExhibit.acf._ncvm_title}
              </h1>
              <p>
                {this.props.data.wordpressWpSpecialExhibit.acf._ncvm_author}
              </p>
              <Img
                fluid={
                  this.props.data.wordpressWpSpecialExhibit.acf
                    ._ncvm_featured_image.localFile.childImageSharp.fluid
                }
                alt={
                  this.props.data.wordpressWpSpecialExhibit.acf
                    ._ncvm_featured_image.alt_text
                }
              />
            </header>
            <section className="specialExhibit__mainContent">
              <div
                className="specialExhibit__mainContent--wysiwyg"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.wordpressWpSpecialExhibit.acf
                    ._ncvm_main_content,
                }}
              />
              {this.props.data.wordpressWpSpecialExhibit.acf
                ._ncvm_tickets_url && (
                <div className="specialExhibit__mainContent--buyTickets">
                  <p>Interested?</p>
                  <a
                    href={
                      this.props.data.wordpressWpSpecialExhibit.acf
                        ._ncvm_tickets_url
                    }
                  >
                    Buy Tickets
                  </a>
                </div>
              )}
            </section>
            <aside className="specialExhibit__sideContent">
              <div
                className="specialExhibit__sideContent--details"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.wordpressWpSpecialExhibit.acf
                    ._ncvm_details,
                }}
              />
              <div>
                <p>Share</p>
                <SocialShareButtons
                  url={this.props.location.href}
                  title={
                    this.props.data.wordpressWpSpecialExhibit.acf._ncvm_title
                  }
                />
              </div>
            </aside>
          </StandardWrapper>
        </SpecialExhibitStyled>
        <OtherSpecialExhibits className="otherExhibits">
          <StandardWrapper className="otherExhibits__wrapper">
            <div className="otherExhibits__title">
              <h3>Other Featured Exhibits</h3>
            </div>
          </StandardWrapper>
          <div className="otherExhibits__container">
            {otherSpecialExhibits.map((exhibit, index) => {
              if (
                this.props.data.wordpressWpSpecialExhibit.slug !==
                exhibit.node.slug
              ) {
                return (
                  <Link
                    to={`/special-exhibits/${exhibit.node.slug}`}
                    key={index}
                    className="otherExhibits__item"
                  >
                    <div className="otherExhibits__item--featuredImg">
                      <Img
                        fluid={
                          exhibit.node.acf._ncvm_featured_image.localFile
                            .childImageSharp.fluid
                        }
                        alt={exhibit.node.acf._ncvm_featured_image.alt_text}
                      />
                    </div>
                    <div className="otherExhibits__item--title">
                      <h2>{exhibit.node.acf._ncvm_title}</h2>
                      <p>{exhibit.node.acf._ncvm_author}</p>
                    </div>
                    <div
                      className="otherExhibits__item--excerpt"
                      dangerouslySetInnerHTML={{
                        __html: exhibit.node.acf._ncvm_excerpt,
                      }}
                    />
                  </Link>
                )
              }
            })}
          </div>
        </OtherSpecialExhibits>
      </Layout>
    )
  }
}

export const query = graphql`
  query SpecialExhibit($slug: String!) {
    wordpressWpSpecialExhibit(slug: { eq: $slug }) {
      title
      slug
      acf {
        _ncvm_title
        _ncvm_exhibit_opening
        _ncvm_details
        _ncvm_main_content
        _ncvm_tickets_url
        _ncvm_author
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

    wordpressPage(wordpress_id: { eq: 10 }) {
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

    allWordpressWpSpecialExhibit {
      edges {
        node {
          slug
          acf {
            _ncvm_title
            _ncvm_author
            _ncvm_excerpt
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

export default SpecialExhibit
