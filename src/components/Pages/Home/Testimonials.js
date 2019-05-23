import React, { Component } from "react"
import Slider from "react-slick"
import styled from "styled-components"

import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const TestimonialsStyled = styled.div`
  margin-top: 5rem;
  .testimonials__wrapper {
    width: 100%;
    padding: 2rem 4rem;

    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 40rem;
      margin-left: 2rem;
      padding: 0;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 50rem;
      margin-left: 10%;
    }
  }

  .testimonials__slider {
    position: relative;
    width: 100%;
    z-index: 100;

    .slick-dots {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center;
      position: absolute;
      top: 0%;
      right: -4rem;
      width: auto;
      height: 100%;
      z-index: 100;

      li {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 1.5rem;
        border-radius: 50%;
        overflow: hidden;

        button {
          &::before {
            background-color: ${props => props.theme.deco};
            color: ${props => props.theme.deco};
            opacity: 1;
          }
        }
      }

      li.slick-active {
        button {
          &::before {
            background-color: ${props => props.theme.rawSienna};
            color: ${props => props.theme.rawSienna};
          }
        }
      }
    }

    .slick-slide {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 20rem;
      z-index: 100;
    }

    &::after {
      display: block;
      position: absolute;
      top: -7.5rem;
      left: -5rem;
      transition: all 0.3s ease-in-out;
      color: ${props => props.theme.deco};
      font-family: ${props => props.theme.fontSec};
      font-size: 25rem;
      font-weight: 700;
      content: "“";
      z-index: -1;
    }

    @media (min-width: ${props => props.theme.bpTablet}) {
      &::after {
        top: -7.5rem;
        left: -1rem;
      }
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      &::after {
        top: -7.5rem;
        left: -5rem;
      }
    }
  }

  .testimonials__item {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20rem;
    z-index: 100;

    &:focus {
      outline: none;
    }

    &--content {
      align-self: center;
      p {
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontSec};
        font-style: italic;
        text-align: center;
      }
    }

    &--name {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
    }
  }
`

class Testimonials extends Component {
  render() {
    return (
      <TestimonialsStyled className="testimonials">
        <div className="testimonials__wrapper">
          <Slider
            className="testimonials__slider"
            slidesToShow={1}
            autoplay={false}
            autoplaySpeed={10000}
            speed={750}
            arrows={false}
            vertical={true}
            adaptiveHeight={false}
            centerPadding={`0px`}
            centerMode={false}
            dots={true}
          >
            {this.props.tests.map((test, index) => {
              return (
                <div key={index} className="testimonials__item">
                  <div
                    className="testimonials__item--content"
                    dangerouslySetInnerHTML={{ __html: test.testimonial }}
                  />
                  <p className="testimonials__item--name">{test.name}</p>
                </div>
              )
            })}
          </Slider>
        </div>
      </TestimonialsStyled>
    )
  }
}

export default Testimonials
