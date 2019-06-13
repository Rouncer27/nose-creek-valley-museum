import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import RowOne from "../components/Pages/Stories/RowOne"
import RowTwo from "../components/Pages/Stories/RowTwo"
import RowThree from "../components/Pages/Stories/RowThree"
import RowFour from "../components/Pages/Stories/RowFour"
import RowFive from "../components/Pages/Stories/RowFive"
import RowSix from "../components/Pages/Stories/RowSix"

class Stories extends Component {
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

    const testimonials = acf ? acf._ncvm_testimonials : []

    const allPosts =
      this.props.data.allWordpressPost.edges.length > 0
        ? this.props.data.allWordpressPost.edges
        : []
    let remainingPosts = []
    if (allPosts.length > 11) {
      remainingPosts = allPosts.slice(11, allPosts.length)
    }

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Stories - Nose Creek Valley Museum"
          description="Creating and sharing stories - Nose Creek Valley Museum"
          keywords={[
            `blogs`,
            `blog posts`,
            `stories`,
            `share your story`,
            `museum stories`,
          ]}
        />
        <Hero {...heroData} location={this.props.location} />
        {allPosts.length > 0 && (
          <RowOne postOne={allPosts[0]} postTwo={allPosts[1]} />
        )}
        {allPosts.length > 2 && (
          <RowTwo testimonials={testimonials} postThree={allPosts[2]} />
        )}
        {allPosts.length > 3 && (
          <RowThree
            postFour={allPosts[3]}
            postFive={allPosts[4]}
            postSix={allPosts[5]}
          />
        )}
        {allPosts.length > 6 && (
          <RowFour postSeven={allPosts[6]} postEight={allPosts[7]} />
        )}
        {allPosts.length > 8 && (
          <RowFive
            postnine={allPosts[8]}
            postTen={allPosts[9]}
            postEleven={allPosts[10]}
          />
        )}

        {remainingPosts.length > 0 && (
          <RowSix remainingPosts={remainingPosts} />
        )}
      </Layout>
    )
  }
}

export const query = graphql`
  query storiesPage($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
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

        _ncvm_testimonials {
          testimonial
          name
        }
      }
    }

    allWordpressPost(sort: { fields: [date], order: [DESC] }) {
      edges {
        node {
          title
          slug
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

export default Stories
