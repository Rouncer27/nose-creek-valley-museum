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
import BookItForm from "./BookItForm"

const StyledTour = styled.div`
  width: 100%;
  margin: 3.5rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(33.3333% - 3rem);
    margin: 2rem 1.5rem;
  }

  .gtours__tour--container {
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
    }
  }

  .gtours__tour--image {
    position: relative;
    overflow: hidden;

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
    background: rgba(255, 255, 255, 1);

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

  .gtours__tour--button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(139, 192, 186, 1);
    opacity: 0;

    @media (min-width: ${props => props.theme.bpDesksm}) {
      max-height: 28vw;
    }

    p {
      display: block;
      position: absolute;
      top: 40%;
      left: 50%;
      margin: 0 auto;
      color: ${props => props.theme.white};
      transform: translate(-50%, 0);
      text-align: center;
      text-transform: uppercase;
      opacity: 1;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: 100%;
        font-size: 1.6rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 1.8rem;
      }

      .btn-circle {
        display: block;
        position: absolute;
        bottom: -6rem;
        right: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
        margin: auto;
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
          font-size: 3rem;
          font-weight: 100;
          content: "\f178";
        }
      }
    }
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
      overflow: scroll;
    }

    &--image {
      position: relative;
      align-self: center;
      width: calc(100%);
      max-width: 20rem;
      transform: translateX(-10rem);
      opacity: 0;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50% - 4rem);
        max-width: 100%;
        margin-right: 4rem;
      }

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
      width: calc(100%);
      padding: 2rem;
      transform: translateX(10rem);
      opacity: 0;

      @media (min-width: ${props => props.theme.bpTablet}) {
        width: calc(50%);
        padding: 5rem;
      }

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
        top: 0rem;
        right: 5rem;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};

        @media (min-width: ${props => props.theme.bpTablet}) {
          top: -5rem;
          right: 5rem;
        }

        &:hover {
          cursor: pointer;
          background: ${props => props.theme.neptune};
          color: ${props => props.theme.kenyanCopper};
        }

        &:focus {
          outline: none;
        }
      }

      .book-it-modal {
        display: inline-block;
        position: relative;
        background: transparent;
        border: none;
        color: ${props => props.theme.neptune};
        text-align: center;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
          font-size: 1.6rem;
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.8rem;
        }

        .btn-circle {
          display: block;
          position: absolute;
          top: 50%;
          right: -5rem;
          width: 4rem;
          height: 4rem;
          margin: auto;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          color: ${props => props.theme.neptune};
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
            border: 0.2rem solid ${props => props.theme.neptune};
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
            font-size: 3rem;
            font-weight: 100;
            content: "\f178";
          }
        }

        &:hover {
          color: ${props => props.theme.frenchGrey};
          cursor: pointer;

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
  }
`

const GuideTour = ({ tour }) => {
  const [isFormActive, setFormActive] = useState(false)

  const [isHover, setHover] = useState(false)
  const slideDown = useSpring({
    opacity: isHover ? 1 : 0,
    top: isHover ? "0%" : "-100%",
  })

  const slideUp = useSpring({
    transform: isHover ? "translateY(-20%)" : "translateY(0%)",
  })

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
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="gtours__tour--image">
          <Img
            fluid={tour.featured_image.localFile.childImageSharp.fluid}
            alt={tour.featured_image.alt_text}
          />
          <h3>{tour.tour_type}</h3>

          <animated.div className="gtours__tour--button" style={slideDown}>
            <p>
              Learn More
              <span className="btn-circle" />
            </p>
          </animated.div>
        </div>
        <animated.div className="gtours__tour--name" style={slideUp}>
          <h3>{tour.name}</h3>
          <div
            className={`gtours__tour--icon gtours__tour--icon--${tour.icon}`}
          />
        </animated.div>
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
            <button
              onClick={() => setFormActive(true)}
              className="book-it-modal"
            >
              Book It
              <span className="btn-circle" />
            </button>
          </animated.div>
        </animated.div>
      </animated.div>
      <BookItForm
        tourName={tour.name}
        isActive={isFormActive}
        setActive={setFormActive}
      />
    </StyledTour>
  )
}

export default GuideTour
