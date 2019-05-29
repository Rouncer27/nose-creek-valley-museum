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
    height: 40rem;
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

    &--grape {
      background: ${props => props.theme.grape};
      .colorlink__content {
        .colorlink__title {
          h2 {
            color: ${props => props.theme.deco};
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

  .colorlink__fees {
    padding: 2rem;
    &--title {
      h2 {
        margin: 0;
        color: ${props => props.theme.deepSea};
      }
    }
    &--content {
      p {
        color: ${props => props.theme.deepSea};
        font-weight: 600;
      }
    }
  }
`

class Fees extends Component {
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
          }
        `}
        render={data => {
          return (
            <ColouredLinksStyled className="colorlink">
              <Link
                to="about/#faqsInfo"
                className={`colorlink__box colorlink__box--deepsea`}
              >
                <div className="colorlink__content">
                  <div className="colorlink__title">
                    <h2>FAQs</h2>
                  </div>
                  <div className={`colorlink__icon`}>
                    {data.faqs.childImageSharp && (
                      <Img fluid={data.faqs.childImageSharp.fluid} alt="FAQs" />
                    )}
                  </div>
                </div>
              </Link>

              <div className={`colorlink__box colorlink__box--deco`}>
                <div className="colorlink__fees">
                  <div className="colorlink__fees--title">
                    <h2>Fees</h2>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: this.props.fees }}
                    className="colorlink__fees--content"
                  />
                </div>
              </div>

              <Link
                to="/programs/#programsList"
                className={`colorlink__box colorlink__box--grape`}
              >
                <div className="colorlink__content">
                  <div className="colorlink__title">
                    <h2>Programs</h2>
                  </div>
                  <div className={`colorlink__icon`}>
                    {data.faqs.childImageSharp && (
                      <Img
                        fluid={data.membership.childImageSharp.fluid}
                        alt="Programs"
                      />
                    )}
                  </div>
                </div>
              </Link>
            </ColouredLinksStyled>
          )
        }}
      />
    )
  }
}

export default Fees
