import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"

import Hero from "../components/Templates/Hero"
import Intro from "../components/Templates/Intro"

import Membership from "../components/Pages/Support/Membership"
import Donate from "../components/Pages/Support/Donate"
import Volunteer from "../components/Pages/Support/Volunteer"
import Shop from "../components/Pages/Support/Shop"
import CurrentDonors from "../components/Pages/Support/CurrentDonors"

class Support extends Component {
  render() {
    const options = this.props.data.wordpressAcfOptions.options
    const museumHours = options.ncvm_museum_hours
    const museumLocation = options.ncvm_museum_location
    const museumPricing = options.ncvm_museum_pricing

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
    introData.pricing = museumPricing
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

    const volunteer = {}
    volunteer.content = acf ? acf._ncvm_vol_sec_content : false
    volunteer.link = acf ? acf._ncvm_vol_sec_link : false
    volunteer.positions = acf ? acf._ncvm_volunteer_positions : []
    volunteer.donorsList = acf ? acf.donors_list : []

    const shop = {}
    shop.content = acf ? acf._ncvm_shop_sec_content : false

    const currentDonors = {}
    currentDonors.contentTop = acf ? acf._ncvm_donors_top_content : false
    currentDonors.contentBot = acf ? acf._ncvm_donors_bot_content : false

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Support and Memberships - Nose Creek Valley Museum"
          description="Nose Creek Valley Museum: Why Become a Member? We are a little museum with a big heart."
          keywords={[
            `support`,
            `memberships`,
            `museum hours`,
            `museum location`,
            `buy a membership`,
            `gift a membership`,
            `corporate sponsorship`,
            `corporate support`,
            `donate`,
            `sponsor`,
            `volunteer`,
            `shop`,
            `donors`,
            `sponsors`,
          ]}
        />
        <Hero {...heroData} location={this.props.location} />
        <Intro {...introData} />
        <Membership {...membership} />
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

        _ncvm_donate_sec_content

        _ncvm_vol_sec_content
        _ncvm_vol_sec_link {
          localFile {
            publicURL
          }
        }

        donors_list {
          name
        }

        _ncvm_volunteer_positions {
          job_title
          job_description
        }

        _ncvm_shop_sec_content

        _ncvm_donors_top_content
        _ncvm_donors_bot_content
      }
    }

    wordpressAcfOptions {
      options {
        ncvm_museum_hours
        ncvm_museum_location
        ncvm_museum_pricing
      }
    }
  }
`

export default Support
