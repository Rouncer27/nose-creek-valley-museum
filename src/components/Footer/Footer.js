import React, { Component } from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StandardWrapper } from "../styles/Commons/Wrappers"

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
    position: absolute;
    top: -17.5rem;
    right: 0;
    width: 20rem;
    height: 25.6rem;

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
    align-self: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 35%;
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
      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(33.3333%);
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
                <div className="mainfooter__links">
                  <Link to="/">
                    <span className="btn-wrapper">
                      Program Booking
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="btn-wrapper">
                      Rental
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="btn-wrapper">
                      Donate
                      <span className="btn-circle" />
                    </span>
                  </Link>
                  <Link to="/">
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
                          <Link to="/">Collections</Link>
                        </li>
                        <li>
                          <Link to="/">Exhibits</Link>
                        </li>
                        <li>
                          <Link to="/">Past Exhibits</Link>
                        </li>
                        <li>
                          <Link to="/">Special events</Link>
                        </li>
                        <li>
                          <Link to="/">Programs</Link>
                        </li>
                        <li>
                          <Link to="/">Photo gallery</Link>
                        </li>
                        <li>
                          <Link to="/">Tourist info</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mainfooter__info--item mainfooter__support">
                    <h3>Support Us</h3>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Membership</Link>
                        </li>
                        <li>
                          <Link to="/">Volunteer</Link>
                        </li>
                        <li>
                          <Link to="/">Info/apps</Link>
                        </li>
                        <li>
                          <Link to="/">Donate</Link>
                        </li>
                        <li>
                          <Link to="/">Shop</Link>
                        </li>
                        <li>
                          <Link to="/">Facility rental</Link>
                        </li>
                        <li>
                          <Link to="/">Corporate</Link>
                        </li>
                        <li>
                          <Link to="/">Support</Link>
                        </li>
                        <li>
                          <Link to="/">Thank yous</Link>
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
                        <a target="_blank" href={`tel:+1${phone}`}>
                          {phone}
                        </a>
                      </p>
                      <p>
                        <a target="_blank" href={`mailto:${email}`}>
                          {email}
                        </a>
                      </p>
                    </div>
                    <div
                      className="mainfooter__connect--location"
                      dangerouslySetInnerHTML={{ __html: location }}
                    />
                  </div>
                </div>
                <div className="mainfooter__copy">
                  <p>
                    Built proudly in Airdrie Alberta by{" "}
                    <a target="_blank" href="https://switchbackcreative.ca/">
                      Switchback Creative{" "}
                    </a>
                    © {new Date().getFullYear()}, with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </p>
                </div>
                <div className="mainfooter__phone">
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
