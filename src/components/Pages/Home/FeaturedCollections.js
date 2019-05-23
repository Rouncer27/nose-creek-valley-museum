import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Slider from "react-slick"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"

const FeaturedCollectionsSection = styled.section`
  position: relative;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.bpDesksm}) {
    max-width: 100rem;
    margin: -10rem auto 0;
  }
  .featuredcollections__wrapper {
    @media (min-width: ${props => props.theme.bpDesksm}) {
      padding: 0;
    }
  }

  .slider-content {
    position: relative;

    background: ${props => props.theme.kenyanCopper};
    opacity: 0.9;
    z-index: 9999;

    @media (min-width: ${props => props.theme.bpTablet}) {
      position: absolute;
      right: 0;
      bottom: 0.6rem;
      left: 50%;
      width: 50%;
    }

    .slick-arrow {
    }

    .slick-prev {
      top: 45%;
      transform: rotate(90deg);
    }

    .slick-next {
      right: auto;
      top: 55%;
      left: -2.5rem;
      transform: rotate(90deg);
    }
  }
`

const FeaturedSlider = styled(Slider)`
  position: relative;
  width: 100%;
  z-index: 1;
`

const FeaturedSliderContent = styled(Slider)`
  position: relative;
  width: 100%;
  z-index: 99999;

  .slick-slide {
  }

  .slick-slide.slick-active.slick-current {
  }

  .fcslider__slide {
    position: relative;
    width: 100%;
    overflow: hidden;

    &--content {
      position: relative;
      padding: 4rem;
      width: 100%;
      background: ${props => props.theme.kenyanCopper};
      opacity: 0.9;
      z-index: 100;

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 5rem;
      }

      &--title {
        overflow: hidden;
        h2 {
          margin-bottom: 1.5rem;
          color: #d67c5b;
          font-family: ${props => props.theme.fontSec};
          font-style: italic;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 2rem;
          }
        }
      }

      &--excerpt {
        margin-bottom: 1rem;
        overflow: hidden;

        p {
          display: block;

          color: ${props => props.theme.white};
          font-family: ${props => props.theme.fontTer};
          font-weight: 100;

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 2rem;
          }
        }
      }

      &--link {
        margin-top: 5rem;
        overflow: hidden;
        a {
          display: inline-block;
          color: #d67c5b;

          span:first-of-type {
            text-transform: uppercase;
          }

          span:last-of-type {
            font-family: ${props => props.theme.fontSec};
            font-style: italic;
          }

          &:hover {
            color: ${props => props.theme.white};
          }
        }
      }
    }
  }

  #slider-after-change {
  }
`

class FeaturedCollections extends Component {
  constructor(props) {
    super(props)
    this.changeBeforeTheSlide = this.changeBeforeTheSlide.bind(this)
    this.changeAfterTheSlide = this.changeAfterTheSlide.bind(this)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  changeAfterTheSlide(current) {
    const currentSlide = [
      ...document.querySelectorAll(".slider-content .fcslider__slide"),
    ]

    currentSlide[0].forEach(slide => {
      const parent = slide.parentElement.parentElement
      parent.id = ""

      if (slide.classList.contains("slider-before-change")) {
        slide.classList.remove("slider-before-change")
      }
    })

    currentSlide[0][current].parentElement.parentElement.id =
      "slider-after-change"
  }

  changeBeforeTheSlide(current) {
    const currentSlide = [
      ...document.querySelectorAll(".slider-content .fcslider__slide"),
    ]
    currentSlide[0][current].classList.add("slider-before-change")
  }

  render() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 750,
      fade: false,
      focusOnSelect: false,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear",
    }
    return (
      <FeaturedCollectionsSection className="featuredcollections">
        <FullScreenWrapper className="featuredcollections__wrapper">
          <FeaturedSlider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...settings}
            className="featuredcollections__slider fcslider"
          >
            {this.props.slides.map((slide, index) => {
              return (
                <div key={index} className="fcslider__slide">
                  <div className="fcslider__slide--image">
                    <Img
                      fluid={slide.image.localFile.childImageSharp.fluid}
                      alt={slide.image.alt_text}
                    />
                  </div>
                </div>
              )
            })}
          </FeaturedSlider>

          <FeaturedSliderContent
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            fade={true}
            speed={750}
            arrows={true}
            beforeChange={currentSlide => {
              this.changeBeforeTheSlide(currentSlide)
            }}
            afterChange={currentSlide => {
              this.changeAfterTheSlide(currentSlide)
            }}
            className="slider-content"
          >
            {this.props.slides.map((slide, index) => {
              return (
                <div key={index} className="fcslider__slide">
                  <div className="fcslider__slide--content">
                    <div className="fcslider__slide--content--title">
                      <h2>/ {slide.title}</h2>
                    </div>
                    <div
                      className="fcslider__slide--content--excerpt"
                      dangerouslySetInnerHTML={{ __html: slide.excerpt }}
                    />
                    <div className="fcslider__slide--content--link">
                      <Link to="/experience">
                        <span>Explore / </span>
                        <span>Collections</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </FeaturedSliderContent>
        </FullScreenWrapper>
      </FeaturedCollectionsSection>
    )
  }
}

export default FeaturedCollections
