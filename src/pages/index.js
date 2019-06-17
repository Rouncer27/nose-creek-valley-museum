import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"
import Intro from "../components/Templates/Intro"
import FeaturedCollections from "../components/Pages/Home/FeaturedCollections"
import Learn from "../components/Pages/Home/Learn"
import QuickLinks from "../components/Pages/Home/QuickLinks"
import Designations from "../components/Pages/Home/Designations"
import Donors from "../components/Pages/Home/Donors"
import Testimonials from "../components/Pages/Home/Testimonials"

class IndexPage extends Component {
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

    const slides =
      acf._ncvm_feat_col_slides.length > 0 ? acf._ncvm_feat_col_slides : []

    const quickLinks = {}
    quickLinks.exhibitsImgUrl = acf
      ? acf._ncvm_ql_exhibits_img.localFile.childImageSharp.fluid
      : false
    quickLinks.exhibitsImgAlt = acf ? acf._ncvm_ql_exhibits_img.alt_text : false
    quickLinks.exhibitsTitle = acf ? acf._ncvm_tourist_info_title : false
    quickLinks.exhibitsExcerpt = acf ? acf._ncvm_tourist_info_excerpt : false

    quickLinks.programsImgUrl = acf
      ? acf._ncvm_pro_img.localFile.childImageSharp.fluid
      : false
    quickLinks.programsImgAlt = acf ? acf._ncvm_pro_img.alt_text : false
    quickLinks.programsTitle = acf ? acf._ncvm_pro_title : false
    quickLinks.programsExcerpt = acf ? acf._ncvm_pro_excerpt : false

    quickLinks.touristImgUrl = acf
      ? acf._ncvm_tourist_info_img.localFile.childImageSharp.fluid
      : false
    quickLinks.touristImgAlt = acf ? acf._ncvm_tourist_info_img.alt_text : false
    quickLinks.touristTitle = acf ? acf._ncvm_tourist_info_title : false
    quickLinks.touristExcerpt = acf ? acf._ncvm_tourist_info_excerpt : false

    const designations = {}
    designations.thankYou = acf ? acf._ncvm_des_ty : false
    designations.bgImage = acf ? acf._ncvm_des_bg_img : false
    designations.logos = acf ? acf._ncvm_des_logos : []

    const donors = {}
    donors.logos = acf ? acf._ncvm_our_donors : false

    const testimonals = {}
    testimonals.tests = acf ? acf._ncvm_testimonials : false

    const metaImage = options._ncvm_facebook_share.localFile.publicURL

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Nose Creek Valley Museum: Big History. Little Museum."
          description="Nose Creek Valley Museum: represents over 2000 years of local history, providing history of Airdrie, Nose Creek and surrounding areas."
          keywords={[
            `museum`,
            `museum airdrie`,
            `museum nose creek valley`,
            `history`,
            ` airdrie history`,
          ]}
          metaImage={metaImage}
        />
        <Hero {...heroData} location={this.props.location} />
        <Intro {...introData} />
        <FeaturedCollections slides={slides} />
        <Learn />
        <QuickLinks {...quickLinks} />
        <Designations {...designations} />
        <Donors {...donors} />
        <Testimonials {...testimonals} />
      </Layout>
    )
  }
}

export const homeQuery = graphql`
  {
    wordpressPage(slug: { eq: "home" }) {
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

        _ncvm_feat_col_slides {
          title
          excerpt
          image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        _ncvm_ql_exhibits_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_ql_exhibits_title
        _ncvm_ql_exhibits_excerpt

        _ncvm_pro_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_pro_title
        _ncvm_pro_excerpt

        _ncvm_tourist_info_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_tourist_info_title
        _ncvm_tourist_info_excerpt

        _ncvm_des_ty
        _ncvm_des_bg_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_des_logos {
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          url
        }

        _ncvm_our_donors {
          logo {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          url
        }

        _ncvm_testimonials {
          testimonial
          name
        }
      }
    }

    wordpressAcfOptions {
      options {
        ncvm_museum_hours
        ncvm_museum_location
        _ncvm_main_logo {
          localFile {
            publicURL
          }
        }

        _ncvm_facebook_share {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default IndexPage
