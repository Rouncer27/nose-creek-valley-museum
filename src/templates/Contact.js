import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import Forms from "../components/Pages/Contact/Forms"
import MeetingRooms from "../components/Pages/Contact/MeetingRooms"
import Fees from "../components/Pages/Contact/Fees"
import BottomImage from "../components/Pages/Contact/BottomImage"

class Contact extends Component {
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

    const formInfo = {}
    formInfo.curator = acf ? acf._ncvm_curator_content : false
    formInfo.curatorForm = acf ? acf._ncvm_curator_form : []
    formInfo.story = acf ? acf._ncvm_send_story_content : false
    formInfo.storySmall = acf ? acf._ncvm_send_story_small_print : false
    formInfo.storyForm = acf ? acf._ncvm_send_story_form : []

    const meetingRooms = {}
    meetingRooms.intro = acf ? acf._ncvm_meeting_rooms_intro : false
    meetingRooms.rooms = acf ? acf._ncvm_meeting_rooms : []

    const fees = acf ? acf._ncvm_fees : false

    const bottomImage = {}
    bottomImage.fluid = acf
      ? acf._ncvm_bottom_image.localFile.childImageSharp.fluid
      : false
    bottomImage.imgalt = acf ? acf._ncvm_bottom_image.alt_text : false

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Connect - Nose Creek Valley Museum"
          description="Nose Creek Valley Museum: Ask the curator and share your stories. Connect with us."
          keywords={[
            `connect`,
            `share`,
            `ask the curator`,
            `send a story`,
            `room rentals`,
            `meeting rooms`,
            `fees`,
            `faqs`,
            `programs`,
          ]}
        />
        <Hero {...heroData} location={this.props.location} />
        <Forms {...formInfo} />
        <MeetingRooms {...meetingRooms} />
        <Fees fees={fees} />
        <BottomImage {...bottomImage} />
      </Layout>
    )
  }
}

export const query = graphql`
  query contactPage($id: Int!) {
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

        _ncvm_curator_content
        _ncvm_curator_form {
          field_type
          field_id
          label
          required
        }

        _ncvm_send_story_content
        _ncvm_send_story_small_print
        _ncvm_send_story_form {
          field_type
          field_id
          label
          required
        }

        _ncvm_meeting_rooms_intro
        _ncvm_meeting_rooms {
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          room_name
          capacity
        }

        _ncvm_fees

        _ncvm_bottom_image {
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

export default Contact
