import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"
import MainContent from "../components/Pages/Privacy/MainContent"

class Programs extends Component {
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

    const intro = {}
    intro.mainTitle = acf ? acf._ncvm_intro_sec_title_main : false
    intro.mainContent = acf ? acf._ncvm_intro_sec_main_content : false

    console.log("intro", intro)

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Programs - Nose Creek Valley Museum"
          description="Nose Creek Valley Museum: A new way to look at old things. Explore the Past."
          keywords={[
            `tourist information`,
            `programs`,
            `guided tours`,
            `education tours`,
            `education programs`,
            `travelling trunk`,
            `school tours`,
            `museum tours`,
            `nose creek valley history tour`,
          ]}
        />
        <Hero {...heroData} location={this.props.location} />
        <MainContent data={intro} />
      </Layout>
    )
  }
}

export const query = graphql`
  query privacyPage($id: Int!) {
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
        _ncvm_intro_sec_title_main
        _ncvm_intro_sec_main_content
      }
    }
  }
`

export default Programs
