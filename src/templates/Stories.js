import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

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
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
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
      }
    }
  }
`

export default Stories
