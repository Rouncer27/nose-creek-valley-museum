import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const SponsorLogos = ({ data }) => {
  const levelOne = data.filter(item => item.level === "one")
  const levelTwo = data.filter(item => item.level === "two")
  const levelThree = data.filter(item => item.level === "three")
  const levelFour = data.filter(item => item.level === "four")

  return (
    <SponsorLogosStyled>
      <div className="sponsor-logos_wrapper">
        <div className="sponsor-logos_title">
          <h2>sponsor logos</h2>
        </div>
        <div className="sponsor-logos_level">
          <h3>Level One</h3>
          <div className="sponsor-logos_level-logos">
            {levelOne.map((item, index) => {
              let logoDisplay = false
              if (item.url === "") {
                logoDisplay = (
                  <Img
                    fluid={item.logo.localFile.childImageSharp.fluid}
                    alt={item.logo.alt_text}
                  />
                )
              } else {
                logoDisplay = (
                  <a target="_blank" rel="noopener noreferrer" href={item.url}>
                    <Img
                      fluid={item.logo.localFile.childImageSharp.fluid}
                      alt={item.logo.alt_text}
                    />
                  </a>
                )
              }
              return (
                <div className="sponsor-logos_level-item" key={index}>
                  {logoDisplay}
                </div>
              )
            })}
          </div>
        </div>

        <div className="sponsor-logos_level">
          <h3>Level Two</h3>
          <div className="sponsor-logos_level-logos">
            {levelTwo.map((item, index) => {
              let logoDisplay = false
              if (item.url === "") {
                logoDisplay = (
                  <Img
                    fluid={item.logo.localFile.childImageSharp.fluid}
                    alt={item.logo.alt_text}
                  />
                )
              } else {
                logoDisplay = (
                  <a target="_blank" rel="noopener noreferrer" href={item.url}>
                    <Img
                      fluid={item.logo.localFile.childImageSharp.fluid}
                      alt={item.logo.alt_text}
                    />
                  </a>
                )
              }
              return (
                <div className="sponsor-logos_level-item" key={index}>
                  {logoDisplay}
                </div>
              )
            })}
          </div>
        </div>

        <div className="sponsor-logos_level">
          <h3>Level Three</h3>
          <div className="sponsor-logos_level-logos">
            {levelThree.map((item, index) => {
              let logoDisplay = false
              if (item.url === "") {
                logoDisplay = (
                  <Img
                    fluid={item.logo.localFile.childImageSharp.fluid}
                    alt={item.logo.alt_text}
                  />
                )
              } else {
                logoDisplay = (
                  <a target="_blank" rel="noopener noreferrer" href={item.url}>
                    <Img
                      fluid={item.logo.localFile.childImageSharp.fluid}
                      alt={item.logo.alt_text}
                    />
                  </a>
                )
              }
              return (
                <div className="sponsor-logos_level-item" key={index}>
                  {logoDisplay}
                </div>
              )
            })}
          </div>
        </div>

        <div className="sponsor-logos_level">
          <h3>Level Four</h3>
          <div className="sponsor-logos_level-logos">
            {levelFour.map((item, index) => {
              let logoDisplay = false
              if (item.url === "") {
                logoDisplay = (
                  <Img
                    fluid={item.logo.localFile.childImageSharp.fluid}
                    alt={item.logo.alt_text}
                  />
                )
              } else {
                logoDisplay = (
                  <a target="_blank" rel="noopener noreferrer" href={item.url}>
                    <Img
                      fluid={item.logo.localFile.childImageSharp.fluid}
                      alt={item.logo.alt_text}
                    />
                  </a>
                )
              }
              return (
                <div className="sponsor-logos_level-item" key={index}>
                  {logoDisplay}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SponsorLogosStyled>
  )
}

export default SponsorLogos

const SponsorLogosStyled = styled.section`
  .sponsor-logos_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 90rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 100rem;
    }
  }

  .sponsor-logos_title {
    width: 100%;

    h2 {
      text-align: center;
    }
  }

  .sponsor-logos_level {
    width: 100%;

    h3 {
      text-align: center;
    }

    &-logos {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
    }

    &-item {
      width: calc(20% - 2rem);
      margin: 1.5rem 1rem;
    }
  }
`
