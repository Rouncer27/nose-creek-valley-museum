import React, { Component } from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StandardWrapper } from "../styles/Commons/Wrappers"
import SocialFollowButtons from "../Templates/SocialFollowButtons"

const MainFooterStyled = styled.footer`
  position: relative;

  .mainfooter__wrapper {
    position: relative;
    align-items: center;
    padding-top: 10rem;
    z-index: 5;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding-top: 15rem;
    }
  }

  .mainfooter__phone {
    display: none;
    position: absolute;
    top: -17.5rem;
    right: 0;
    width: 20rem;
    height: 25.6rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      display: block;
    }

    &--experience,
    &--programs,
    &--connect {
      display: none;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }

    &--background {
      position: absolute;
      top: 7.5rem;
      left: -40%;
      width: 10000%;
      height: 10rem;
      background-color: ${props => props.theme.deco};
      z-index: 1;
    }
  }

  .mainfooter__links {
    width: 100%;
    margin-bottom: 5rem;
    align-self: center;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 35%;
      margin-bottom: 0;
      text-align: left;
    }

    a {
      display: block;
      position: relative;
      padding: 1rem 0;
      transition: all 0.3s ease-in-out;
      color: ${props => props.theme.deco};

      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        margin-bottom: 1rem;
        font-size: 1.8rem;
      }

      .btn-wrapper {
        display: inline-block;
        position: relative;
      }

      .btn-circle {
        display: block;
        position: absolute;
        top: 50%;
        right: -4.5rem;
        width: 3.2rem;
        height: 3.2rem;
        transform: translate(0%, -50%);
        transition: all 0.3s ease-in-out;
        color: ${props => props.theme.deco};
        text-align: center;

        &::before {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease-in-out;
          border: 0.2rem solid ${props => props.theme.deco};
          border-radius: 50%;
          content: "";
        }

        &::after {
          display: block;
          position: absolute;
          top: 50%;
          left: 0%;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          font-family: ${props => props.theme.fontAwesome};
          font-size: 2.2rem;
          font-weight: 100;
          content: "\f178";
        }
      }

      &:hover {
        color: ${props => props.theme.frenchGrey};
        .btn-circle {
          color: ${props => props.theme.frenchGrey};
          &::before {
            border-color: ${props => props.theme.frenchGrey};
          }
          &::after {
            color: ${props => props.theme.frenchGrey};
          }
        }
      }
    }
  }

  .mainfooter__info {
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 65%;
    }

    &--item {
      width: 100%;
      margin-bottom: 5rem;
      text-align: center;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(33.3333%);
        margin-bottom: 0;
        text-align: left;
      }
    }

    h3 {
      display: block;
      position: relative;
      margin: 0;
      padding: 0;
      color: ${props => props.theme.deco};
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }
    }

    nav {
      li {
        a {
          transition: all 0.3s ease-in-out;
          color: ${props => props.theme.white};
          font-family: ${props => props.theme.fontTer};
          font-weight: 100;
          line-height: 1.18;
          opacity: 0.8;

          &:hover {
            color: ${props => props.theme.deco};
          }
        }
      }
    }

    .mainfooter__connect {
      p {
        margin: 0;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 100;
        line-height: 1.18;
        opacity: 0.8;
      }

      a {
        margin: 0;
        transition: all 0.3s ease-in-out;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontTer};
        font-weight: 100;
        line-height: 1.18;
        opacity: 0.8;

        &:hover {
          color: ${props => props.theme.deco};
        }
      }

      &--contact {
        margin-bottom: 2rem;
      }
    }
  }

  .mainfooter__copy {
    width: 100%;
    margin-top: 5rem;
    text-align: center;

    p {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontTer};
      font-size: 1.4rem;
      font-weight: 100;
      line-height: 1.18;
      opacity: 0.8;
    }

    a {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontTer};
      font-weight: 100;
      line-height: 1.18;
      opacity: 0.8;
    }
  }

  .mainfooter__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &--image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.deepSea};
      opacity: 0.95;
      z-index: 5;
    }
  }
`

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            vintagePhone: file(relativePath: { eq: "ncvm-contact.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            wordpressAcfOptions {
              options {
                ncvm_museum_location
                ncvm_curator
                ncvm_phone_number
                ncvm_email_address
                ncvm_footer_image {
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
            }
          }
        `}
        render={data => {
          const splitURL = this.props.location.split("/")
          const slug =
            splitURL.slice(1, 2).join("") === ""
              ? "/"
              : splitURL.slice(1, 2).join("")
          const currator = data.wordpressAcfOptions.options.ncvm_curator
          const phone = data.wordpressAcfOptions.options.ncvm_phone_number
          const email = data.wordpressAcfOptions.options.ncvm_email_address
          const location = data.wordpressAcfOptions.options.ncvm_museum_location
          const bgImgSrc =
            data.wordpressAcfOptions.options.ncvm_footer_image.localFile
              .childImageSharp.fluid
          const bgImgAlt =
            data.wordpressAcfOptions.options.ncvm_footer_image.alt_text
          return (
            <MainFooterStyled className="mainfooter">
              <StandardWrapper className="mainfooter__wrapper">
                <div>
                  <p><i>Nose Creek Valley Museum acknowledges that our work takes place within the historical and contemporary Indigenous lands, and is situated on Treaty 7, the traditional lands of the Siksika, Kainai, Piikani, Stoney Nakoda, and Tsuut’ina peoples. We also respectfully acknowledge that we serve the homelands of the Métis Nation, Districts 4 and 5. We recognize the enduring presence and stewardship of Indigenous peoples on this land, which we all share, celebrate, and care for. By making this acknowledgement, we hope to illustrate our commitment to reconciliation.</i></p>  
                </div>
                <div className="mainfooter__links">
                  <Link to="/programs/#programsList">
                    <span className="btn-wrapper">
                      Program Booking
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/connect/#factRentals">
                    <span className="btn-wrapper">
                      Rental
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/support/#donateInfo">
                    <span className="btn-wrapper">
                      Donate
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/support/#volunteerInfo">
                    <span className="btn-wrapper">
                      Volunteer
                      <span className="btn-circle" />
                    </span>
                  </Link>
                </div>
                <div className="mainfooter__info">
                  <div className="mainfooter__info--item mainfooter__experience">
                    <h3>Experience Us</h3>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/experience">Collections</Link>
                        </li>
                        <li>
                          <Link to="/experience/#speicalExhibits">
                            Exhibits
                          </Link>
                        </li>
                        <li>
                          <Link to="/experience/#pastExhibits">
                            Past Exhibits
                          </Link>
                        </li>
                        <li>
                          <Link to="/programs/#programsList">Programs</Link>
                        </li>
                        <li>
                          <Link to="/programs/">Photo Gallery</Link>
                        </li>
                        <li>
                          <Link to="/programs/#touristInfo">Tourist Info</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mainfooter__info--item mainfooter__support">
                    <h3>Support Us</h3>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/support/#membershipInfo">Membership</Link>
                        </li>
                        <li>
                          <Link to="/support/#volunteerInfo">Volunteer</Link>
                        </li>
                        <li>
                          <Link to="/support/#donateInfo">Donate</Link>
                        </li>
                        <li>
                          <Link to="/support/#shopInfo">Shop</Link>
                        </li>
                        <li>
                          <Link to="/connect/#factRentals">
                            Facility Rental
                          </Link>
                        </li>
                        <li>
                          <Link to="/support/#corporateInfo">Corporate</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mainfooter__info--item mainfooter__connect">
                    <h3>Connect</h3>
                    <div className="mainfooter__connect--contact">
                      <p>
                        <span>Curator: </span>
                        <span>{currator}</span>
                      </p>
                      <p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`tel:+1${phone}`}
                        >
                          {phone}
                        </a>
                      </p>
                      <p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`mailto:${email}`}
                        >
                          {email}
                        </a>
                      </p>
                    </div>
                    <div
                      className="mainfooter__connect--location"
                      dangerouslySetInnerHTML={{ __html: location }}
                    />
                    <SocialFollowButtons />
                  </div>
                </div>
                <div className="mainfooter__copy">
                  <p>
                    Built proudly in Airdrie Alberta. Designed, developed and{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://switchbackcreative.ca/trailblazer-fund/"
                    >
                      donated
                    </a>{" "}
                    by{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://switchbackcreative.ca/"
                    >
                      Switchback Creative{" "}
                    </a>
                    © 2019 - {new Date().getFullYear()}, with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </p>
                </div>
                <div className={`mainfooter__phone mainfooter__phone--${slug}`}>
                  <Img
                    fluid={data.vintagePhone.childImageSharp.fluid}
                    alt="Contact The Nose Creek Valley Museum"
                  />
                  <div className="mainfooter__phone--background" />
                </div>
              </StandardWrapper>
              <div className="mainfooter__background">
                <div className="mainfooter__background--image">
                  <Img fluid={bgImgSrc} alt={bgImgAlt} />
                </div>
                <div className="mainfooter__background--overlay" />
              </div>
            </MainFooterStyled>
          )
        }}
      />
    )
  }
}

export default Footer
