/* eslint-disable */
import React, { useState, useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated, useChain } from "react-spring"

import dino from "../../../images/icons/dino.png"
import fossile from "../../../images/icons/fossile.png"
import gallery from "../../../images/icons/gallery.png"
import map from "../../../images/icons/map.png"
import pillars from "../../../images/icons/pillars.png"

const StyledTour = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 3.5rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33.3333% - 3rem);
    margin: 2rem 1.5rem;
  }

  .gtours__tour--container {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0.6rem 1.2rem 0 rgba(0, 0, 0, 0.2);
    }
  }

  .gtours__tour--image {
    position: relative;

    h3 {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: 0;
      padding: 1rem 2rem;
      background: ${props => props.theme.neptune};
      color: ${props => props.theme.white};
      text-align: center;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.8rem;
      }
    }
  }

  .gtours__tour--name {
    position: relative;
    padding: 5rem 4rem;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 7.5rem 4rem;
    }

    h3 {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 700;
      font-size: 2.4rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2.8rem;
      }
    }
  }

  .gtours__tour--icon {
    position: absolute;
    top: -3.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    background-color: ${props => props.theme.neptune};
    border-radius: 50%;
    overflow: hidden;

    &::after {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4rem;
      height: 4rem;
      transform: translate(-50%, -50%);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100%;
      content: "";
      z-index: 1;
    }

    &--pillar {
      &::after {
        background-image: url(${pillars});
      }
    }

    &--gallery {
      &::after {
        background-image: url(${gallery});
      }
    }

    &--map {
      &::after {
        background-image: url(${map});
      }
    }

    &--fossile {
      &::after {
        background-image: url(${fossile});
      }
    }

    &--dinosaur {
      &::after {
        background-image: url(${dino});
      }
    }
  }

  .gtours__tour--modalcolor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transform: scale(1);
    background: ${props => props.theme.neptune};
    z-index: 5;
    opacity: 0;
  }

  .gtours__tour--modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    opacity: 1;
    visibility: hidden;
    z-index: 150000;

    &--background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      background: rgba(255, 255, 255, 1);
      opacity: 0;
    }

    &--image {
      position: relative;
      align-self: center;
      width: calc(50% - 4rem);
      margin-right: 4rem;
      transform: translateX(-10rem);
      opacity: 0;

      .image-square {
        position: absolute;
        top: 2rem;
        right: 2rem;
        bottom: 2rem;
        left: 2rem;
        border: solid 0.5rem ${props => props.theme.neptune};
      }
    }

    &--details {
      position: relative;
      align-self: center;
      width: calc(50%);
      padding: 5rem;
      transform: translateX(10rem);
      opacity: 0;

      h3 {
        margin: 0;
        color: ${props => props.theme.deepSea};
        font-weight: bold;
      }

      p.tour-type {
        color: ${props => props.theme.neptune};
        text-transform: uppercase;
      }

      &--content {
        p {
          color: ${props => props.theme.paraGrey};
          font-family: ${props => props.theme.fontTer};
        }
      }

      button.close-modal {
        position: absolute;
        top: -5rem;
        right: 5rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};

        &:hover {
          cursor: pointer;
          background: ${props => props.theme.neptune};
          color: ${props => props.theme.kenyanCopper};
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`

const GuideTour = ({ tour }) => {
  const [isActive, setActive] = useState(false)
  const showModelRef = useRef()
  const showModel = useSpring({
    ref: showModelRef,
    visibility: isActive ? "visible" : "hidden",
  })

  const showBackgroundRef = useRef()
  const modelBackground = useSpring({
    ref: showBackgroundRef,
    opacity: isActive ? 1 : 0,
  })

  const slideImg = useSpring({
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translateX(0rem)" : "translateX(-10rem)",
  })

  const slideContent = useSpring({
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translateX(0rem)" : "translateX(10rem)",
  })

  useChain(
    isActive
      ? [showModelRef, showBackgroundRef]
      : [showBackgroundRef, showModelRef]
  )

  return (
    <StyledTour className="gtours__tour">
      <div
        className="gtours__tour--container"
        onClick={() => setActive(!isActive)}
      >
        <div className="gtours__tour--image">
          <Img
            fluid={tour.featured_image.localFile.childImageSharp.fluid}
            alt={tour.featured_image.alt_text}
          />
          <h3>{tour.tour_type}</h3>
        </div>
        <div className="gtours__tour--name">
          <h3>{tour.name}</h3>
          <animated.div
            className={`gtours__tour--icon gtours__tour--icon--${tour.icon}`}
          />
        </div>
      </div>

      <animated.div
        onClick={() => setActive(false)}
        className="gtours__tour--modal"
        style={showModel}
      >
        <animated.div
          className="gtours__tour--modal--background"
          style={modelBackground}
        >
          <animated.div className="gtours__tour--modal--image" style={slideImg}>
            <Img
              fluid={tour.featured_image.localFile.childImageSharp.fluid}
              alt={tour.featured_image.alt_text}
            />
            <div className="image-square" />
          </animated.div>
          <animated.div
            className="gtours__tour--modal--details"
            style={slideContent}
          >
            <h3>{tour.name}</h3>
            <p className="tour-type">{tour.tour_type}</p>
            <div
              dangerouslySetInnerHTML={{ __html: tour.main_content }}
              className="gtours__tour--modal--details--content"
            />
            <button className="close-modal" onClick={() => setActive(false)}>
              &#x2715;
            </button>
          </animated.div>
        </animated.div>
      </animated.div>
    </StyledTour>
  )
}

export default GuideTour
