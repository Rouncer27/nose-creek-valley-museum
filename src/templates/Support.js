import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"

import Hero from "../components/Templates/Hero"
import Intro from "../components/Templates/Intro"

import Membership from "../components/Pages/Support/Membership"
import Corporate from "../components/Pages/Support/Corporate"
import Donate from "../components/Pages/Support/Donate"
import Volunteer from "../components/Pages/Support/Volunteer"
import Shop from "../components/Pages/Support/Shop"
import CurrentDonors from "../components/Pages/Support/CurrentDonors"

class Support extends Component {
  render() {
    const options = this.props.data.wordpressAcfOptions.options
    const museumHours = options.ncvm_museum_hours
    const museumLocation = options.ncvm_museum_location

    const acf = this.props.data.wordpressPage
      ? this.props.data.wordpressPage.acf
      : false

    const heroData = {}
    heroData.tagline = acf ? acf._ncvm_hero_image_tagline : false
    heroData.imgFluid = acf
      ? acf._ncvm_hero_image.localFile.childImageSharp.fluid
      : false
    heroData.imgalt = acf ? acf._ncvm_hero_image.alt_text : false

    const introData = {}
    introData.hours = museumHours
    introData.location = museumLocation
    introData.topTitle = acf._ncvm_intro_sec_tt ? acf._ncvm_intro_sec_tt : false
    introData.mainTitle = acf._ncvm_intro_sec_title
      ? acf._ncvm_intro_sec_title
      : false
    introData.content = acf._ncvm_intro_sec_content
      ? acf._ncvm_intro_sec_content
      : false

    const membership = {}
    membership.titleTop = acf ? acf._ncvm_mem_title_top : false
    membership.titleBot = acf ? acf._ncvm_mem_title_bot : false
    membership.points = acf ? acf._ncvm_mem_points : false

    const corporateSponsorship = {}
    corporateSponsorship.intro = acf ? acf._ncvm_corp_sponsor_intro : false
    corporateSponsorship.benefactor = acf
      ? acf._ncvm_corp_sponsor_benefactor
      : false
    corporateSponsorship.contributor = acf
      ? acf._ncvm_corp_sponsor_contributor
      : false
    corporateSponsorship.patron = acf ? acf._ncvm_corp_sponsor_patron : false
    corporateSponsorship.friend = acf ? acf._ncvm_corp_sponsor_friend : false
    corporateSponsorship.link = acf ? acf._ncvm_corp_spon_link : false

    const donate = {}
    donate.content = acf ? acf._ncvm_donate_sec_content : false
    donate.link = acf ? acf._swb_donate_sec_link : false

    const volunteer = {}
    volunteer.content = acf ? acf._ncvm_vol_sec_content : false
    volunteer.link = acf ? acf._ncvm_vol_sec_link : false
    volunteer.positions = acf ? acf._ncvm_volunteer_positions : []

    const shop = {}
    shop.content = acf ? acf._ncvm_shop_sec_content : false

    const currentDonors = {}
    currentDonors.contentTop = acf ? acf._ncvm_donors_top_content : false
    currentDonors.contentBot = acf ? acf._ncvm_donors_bot_content : false
    currentDonors.link = acf ? acf._ncvm_donors_link : false
    currentDonors.logos = acf ? acf._ncvm_current_donors : false

    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <Intro {...introData} />
        <Membership {...membership} />
        <Corporate {...corporateSponsorship} />
        <Donate {...donate} />
        <Volunteer {...volunteer} />
        <Shop {...shop} />
        <CurrentDonors {...currentDonors} />
      </Layout>
    )
  }
}

export const query = graphql`
  query supportPage($id: Int!) {
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

        _ncvm_intro_sec_tt
        _ncvm_intro_sec_title
        _ncvm_intro_sec_content

        _ncvm_mem_title_top
        _ncvm_mem_title_bot
        _ncvm_mem_points {
          point
        }

        _ncvm_corp_sponsor_intro
        _ncvm_corp_sponsor_benefactor
        _ncvm_corp_sponsor_contributor
        _ncvm_corp_sponsor_patron
        _ncvm_corp_sponsor_friend
        _ncvm_corp_spon_link

        _ncvm_donate_sec_content
        _swb_donate_sec_link

        _ncvm_vol_sec_content
        _ncvm_vol_sec_link {
          localFile {
            publicURL
          }
        }
        _ncvm_volunteer_positions {
          job_title
          job_description
        }

        _ncvm_shop_sec_content

        _ncvm_donors_top_content
        _ncvm_donors_bot_content
        _ncvm_donors_link
        _ncvm_current_donors {
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          url
        }
      }
    }

    wordpressAcfOptions {
      options {
        ncvm_museum_hours
        ncvm_museum_location
      }
    }
  }
`

export default Support
