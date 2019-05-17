import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"
import Hero from "../components/Templates/Hero"

import SpecialExhibit from "../components/Pages/Experience/SpecialExhibit"
import Collections from "../components/Pages/Experience/Collections"
import ColouredLinks from "../components/Templates/ColouredLinks"
import ThenNow from "../components/Pages/Experience/ThenNow"
import PastExhibits from "../components/Pages/Experience/PastExhibits"

class Experience extends Component {
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

    const speicalExhibits = this.props.data.allWordpressWpSpecialExhibit.edges
    const pastExhibits = this.props.data.allWordpressWpPastExhibits.edges

    const collectionsTop = {}
    collectionsTop.leftCat = acf ? acf._ncvm_coll_left_cat : false
    collectionsTop.leftTitle = acf ? acf._ncvm_coll_left_title : false
    collectionsTop.leftImg = acf
      ? acf._ncvm_coll_left_img.localFile.childImageSharp.fluid
      : false
    collectionsTop.leftAlt = acf ? acf._ncvm_coll_left_img.alt_text : false
    collectionsTop.centreCat = acf ? acf._ncvm_coll_centre_cat : false
    collectionsTop.centreTitle = acf ? acf._ncvm_coll_centre_title : false
    collectionsTop.centreImg = acf
      ? acf._ncvm_coll_centre_img.localFile.childImageSharp.fluid
      : false
    collectionsTop.centreAlt = acf ? acf._ncvm_coll_centre_img.alt_text : false
    collectionsTop.rightCat = acf ? acf._ncvm_coll_right_cat : false
    collectionsTop.rightTitle = acf ? acf._ncvm_coll_right_title : false
    collectionsTop.rightImg = acf
      ? acf._ncvm_coll_right_img.localFile.childImageSharp.fluid
      : false
    collectionsTop.rightAlt = acf ? acf._ncvm_coll_right_img.alt_text : false

    const colouredLinksTop = acf ? acf._ncvm_coloured_links : false

    const collectionsMid = {}
    collectionsMid.leftCat = acf ? acf._ncvm_coll_left_cat_mid : false
    collectionsMid.leftTitle = acf ? acf._ncvm_coll_left_title_mid : false
    collectionsMid.leftImg = acf
      ? acf._ncvm_coll_left_img_mid.localFile.childImageSharp.fluid
      : false
    collectionsMid.leftAlt = acf ? acf._ncvm_coll_left_img_mid.alt_text : false

    collectionsMid.centreCat = acf ? acf._ncvm_coll_centre_cat_mid : false
    collectionsMid.centreTitle = acf ? acf._ncvm_coll_centre_title_mid : false
    collectionsMid.centreImg = acf
      ? acf._ncvm_coll_centre_img_mid.localFile.childImageSharp.fluid
      : false
    collectionsMid.centreAlt = acf
      ? acf._ncvm_coll_centre_img_mid.alt_text
      : false

    collectionsMid.rightCat = acf ? acf._ncvm_coll_right_cat_mid : false
    collectionsMid.rightTitle = acf ? acf._ncvm_coll_right_title_mid : false
    collectionsMid.rightImg = acf
      ? acf._ncvm_coll_right_img_mid.localFile.childImageSharp.fluid
      : false
    collectionsMid.rightAlt = acf
      ? acf._ncvm_coll_right_img_mid.alt_text
      : false

    const thenNow = {}
    thenNow.collImg = acf
      ? acf._ncvm_tn_coll_img.localFile.childImageSharp.fluid
      : false
    thenNow.collAlt = acf ? acf._ncvm_tn_coll_img.alt_text : false
    thenNow.collCat = acf ? acf._ncvm_tn_coll_cat : false
    thenNow.collTitle = acf ? acf._ncvm_tn_coll_title : false
    thenNow.images = acf ? acf._ncvm_tn_images : false

    const collectionsBot = {}
    collectionsBot.leftCat = acf ? acf._ncvm_coll_left_cat_bot : false
    collectionsBot.leftTitle = acf ? acf._ncvm_coll_left_title_bot : false
    collectionsBot.leftImg = acf
      ? acf._ncvm_coll_left_img_bot.localFile.childImageSharp.fluid
      : false
    collectionsBot.leftAlt = acf ? acf._ncvm_coll_left_img_bot.alt_text : false

    collectionsBot.centreCat = acf ? acf._ncvm_coll_centre_cat_bot : false
    collectionsBot.centreTitle = acf ? acf._ncvm_coll_centre_title_bot : false
    collectionsBot.centreImg = acf
      ? acf._ncvm_coll_centre_img_bot.localFile.childImageSharp.fluid
      : false
    collectionsBot.centreAlt = acf
      ? acf._ncvm_coll_centre_img_bot.alt_text
      : false

    collectionsBot.rightCat = acf ? acf._ncvm_coll_right_cat_bot : false
    collectionsBot.rightTitle = acf ? acf._ncvm_coll_right_title_bot : false
    collectionsBot.rightImg = acf
      ? acf._ncvm_coll_right_img_bot.localFile.childImageSharp.fluid
      : false
    collectionsBot.rightAlt = acf
      ? acf._ncvm_coll_right_img_bot.alt_text
      : false

    const colouredLinksBot = acf ? acf._ncvm_coloured_links_bot : false

    console.log(pastExhibits)
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero {...heroData} location={this.props.location} />
        <SpecialExhibit speicalExhibits={speicalExhibits} />
        <Collections reverse={false} {...collectionsTop} />
        <ColouredLinks links={colouredLinksTop} />
        <Collections reverse={false} {...collectionsMid} />
        <ThenNow {...thenNow} />
        <Collections reverse={true} {...collectionsBot} />
        <PastExhibits exhibits={pastExhibits} />
        <ColouredLinks links={colouredLinksBot} />
      </Layout>
    )
  }
}

export const query = graphql`
  query experiencePage($id: Int!) {
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

        _ncvm_coll_left_cat
        _ncvm_coll_left_title
        _ncvm_coll_left_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_centre_cat
        _ncvm_coll_centre_title
        _ncvm_coll_centre_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_right_cat
        _ncvm_coll_right_title
        _ncvm_coll_right_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
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
        }

        _ncvm_coll_left_cat_mid
        _ncvm_coll_left_title_mid
        _ncvm_coll_left_img_mid {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_centre_cat_mid
        _ncvm_coll_centre_title_mid
        _ncvm_coll_centre_img_mid {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_right_cat_mid
        _ncvm_coll_right_title_mid
        _ncvm_coll_right_img_mid {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _ncvm_tn_coll_img {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_tn_coll_cat
        _ncvm_tn_coll_title
        _ncvm_tn_images {
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
        }

        _ncvm_coll_left_cat_bot
        _ncvm_coll_left_title_bot
        _ncvm_coll_left_img_bot {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_centre_cat_bot
        _ncvm_coll_centre_title_bot
        _ncvm_coll_centre_img_bot {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        _ncvm_coll_right_cat_bot
        _ncvm_coll_right_title_bot
        _ncvm_coll_right_img_bot {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        _ncvm_coloured_links_bot {
          title
          colour
          icon
          link {
            post_name
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
            _ncvm_exhibit_opening
            _ncvm_excerpt
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
      }
    }

    allWordpressWpPastExhibits {
      edges {
        node {
          slug
          acf {
            _ncvm_title
            _ncvm_excerpt
            _ncvm_featured_image {
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
        }
      }
    }
  }
`

export default Experience
