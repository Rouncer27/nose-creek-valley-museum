import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ColouredLinksStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  .colorlink__box {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 33.3333%;
      height: 33.3333vw;
    }

    &:hover {
      cursor: pointer;
    }

    &--deco {
      background: ${props => props.theme.deco};
      .colorlink__content {
        .colorlink__title {
          h2 {
            color: ${props => props.theme.deepSea};
          }
        }
      }
    }

    &--deepsea {
      background: ${props => props.theme.deepSea};
      .colorlink__content {
        .colorlink__title {
          h2 {
            color: ${props => props.theme.deco};
          }
        }
      }
    }

    &--netune {
      background: ${props => props.theme.neptune};
      .colorlink__content {
        .colorlink__title {
          h2 {
            color: ${props => props.theme.deepSea};
          }
        }
      }
    }
  }

  .colorlink__content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 25rem;
    margin: auto;
    padding-top: 9rem;
    transform: translate(-50%, -50%);
    text-align: center;

    .colorlink__title {
      h2 {
        margin: 0;
        font-family: ${props => props.theme.fontPrim};
        font-weight: 700;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 2.6rem;
        }
      }
    }

    .colorlink__icon {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 7.5rem;
      margin: 0 auto;
    }
  }
`

class ColouredLinks extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            faqs: file(relativePath: { eq: "ncvm-icons-w_faqs.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            membership: file(
              relativePath: { eq: "ncvm-icons-w_membership.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            build: file(relativePath: { eq: "ncvm-icons-w_rentals.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            seniors: file(relativePath: { eq: "ncvm-icons-w_seniors.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            tours: file(relativePath: { eq: "ncvm-icons-w_tours.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            volunteer: file(
              relativePath: { eq: "ncvm-icons-w_volunteer.png" }
            ) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <ColouredLinksStyled className="colorlink">
              {this.props.links.map((link, index) => {
                let iconImg = false
                if (link.icon === "Build") {
                  iconImg = data.build.childImageSharp.fluid
                } else if (link.icon === "show") {
                  iconImg = data.tours.childImageSharp.fluid
                } else if (link.icon === "dino") {
                  iconImg = data.seniors.childImageSharp.fluid
                } else if (link.icon === "radio") {
                  iconImg = data.faqs.childImageSharp.fluid
                } else if (link.icon === "person") {
                  iconImg = data.volunteer.childImageSharp.fluid
                } else if (link.icon === "ticket") {
                  iconImg = data.membership.childImageSharp.fluid
                }
                return (
                  <Link
                    key={index}
                    to={link.link.post_name}
                    className={`colorlink__box colorlink__box--${link.colour}`}
                  >
                    <div className="colorlink__content">
                      <div className="colorlink__title">
                        <h2>{link.title}</h2>
                      </div>
                      <div
                        className={`colorlink__icon colorlink__icon--${
                          link.icon
                        }`}
                      >
                        {iconImg && <Img fluid={iconImg} alt={link.title} />}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </ColouredLinksStyled>
          )
        }}
      />
    )
  }
}

export default ColouredLinks
