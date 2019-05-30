import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import Intro from "../components/Pages/Programs/Intro"
import GuideTours from "../components/Pages/Programs/GuideTours"
import ProgramsList from "../components/Pages/Programs/ProgramsList"
import ColouredLinks from "../components/Templates/ColouredLinks"
// import Gallery from "../components/Pages/Programs/Gallery"

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
    intro.topTitle = acf ? acf._ncvm_intro_sec_title_top : false
    intro.mainTitle = acf ? acf._ncvm_intro_sec_title_main : false
    intro.mainContent = acf ? acf._ncvm_intro_sec_main_content : false
    intro.sideTitle = acf ? acf._ncvm_intro_sec_side_title : false
    intro.sideContent = acf ? acf._ncvm_intro_sec_side_content : false

    const guideTours = acf ? acf._ncvm_guide_tours : false
    const programs = acf ? acf._ncvm_programs : false
    const colourLinks = acf ? acf._ncvm_coloured_links : false

    const galleryImages = acf ? acf._ncvm_photo_gallery : []

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <Intro {...intro} />
        <GuideTours tours={guideTours} />
        <ProgramsList tours={programs} />
        <ColouredLinks links={colourLinks} />
        {/* <Gallery images={galleryImages} /> */}
      </Layout>
    )
  }
}

export const query = graphql`
  query programsPage($id: Int!) {
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

        _ncvm_intro_sec_title_top
        _ncvm_intro_sec_title_main
        _ncvm_intro_sec_main_content
        _ncvm_intro_sec_side_title
        _ncvm_intro_sec_side_content
        _ncvm_guide_tours {
          name
          tour_type
          icon
          main_content
          details
          featured_image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        _ncvm_programs {
          name
          tour_type
          icon
          main_content
          details
          featured_image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        _ncvm_coloured_links {
          title
          colour
          icon
          link {
            post_name
          }
          link_slug
        }

        _ncvm_photo_gallery {
          image {
            alt_text
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Programs
