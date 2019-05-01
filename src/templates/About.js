import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import Intro from "../components/Pages/About/Intro"
import OurMission from "../components/Pages/About/OurMission"
import Staff from "../components/Pages/About/Staff"
import ColouredLinks from "../components/Templates/ColouredLinks"
import Designations from "../components/Pages/About/Designations"
import Faqs from "../components/Pages/About/Faqs"
import ThankYou from "../components/Pages/About/ThankYou"

class About extends Component {
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

    const ourMission = {}
    ourMission.mainContent = acf ? acf._ncvm_our_mission_content : false
    ourMission.imgFluid = acf
      ? acf._ncvm_our_mission_image.localFile.childImageSharp.fluid
      : false
    ourMission.imgAlt = acf ? acf._ncvm_our_mission_image.alt_text : false
    ourMission.titles = acf ? acf._ncvm_our_mission_titles : false

    const operationsStaff = acf ? acf._ncvm_operations_staff : []

    const colouredLinksBot = acf ? acf._ncvm_coloured_links : false

    const designations = acf ? acf._ncvm_designations : []

    const faqs = acf ? acf._ncvm_faqs : []

    const thankYou = {}
    thankYou.mainContent = acf ? acf._ncvm_thank_you_content : false
    thankYou.imgFluid = acf
      ? acf._ncvm_thank_you_image.localFile.childImageSharp.fluid
      : false
    thankYou.imgAlt = acf ? acf._ncvm_thank_you_image.alt_text : false

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <Intro {...intro} />
        <OurMission {...ourMission} />
        <Staff staff={operationsStaff} />
        <ColouredLinks links={colouredLinksBot} />
        <Designations designations={designations} />
        <Faqs faqs={faqs} />
        <ThankYou {...thankYou} />
      </Layout>
    )
  }
}

export const query = graphql`
  query aboutPage($id: Int!) {
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

        _ncvm_our_mission_content
        _ncvm_our_mission_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _ncvm_our_mission_titles {
          line
        }

        _ncvm_operations_staff {
          name
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          favourite
          icon
        }

        _ncvm_coloured_links {
          title
          colour
          icon
          link {
            post_name
          }
        }

        _ncvm_designations {
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          name
          content
        }

        _ncvm_faqs {
          question
          answer
        }

        _ncvm_thank_you_content
        _ncvm_thank_you_image {
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

export default About
