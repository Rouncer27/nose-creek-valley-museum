import React, { Component } from "react"
import Slider from "react-slick"
import styled from "styled-components"

const TestimonialsStyled = styled.div`
  margin-top: 5rem;
  .testimonials__wrapper {
    width: 100%;
    @media (min-width: ${props => props.theme.bpTablet}) {
      max-width: 40rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-width: 50rem;
      margin-left: 10%;
    }
  }

  .testimonials__slider {
    width: 100%;
    overflow: hidden;

    .slick-slide {
    }
  }

  .testimonials__item {
    width: 100%;

    &:focus {
      outline: none;
    }

    &--content {
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
          <Slider className="testimonials__slider">
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
