import React, { useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const StyledInsideBio = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
  visibility: hidden;
  overflow: scroll;

  .insideBio__image {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateX(-100%);
    width: 100%;
    opacity: 1;
    background: ${props => props.theme.deco};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50%);
      padding: 5rem;
    }

    &--container {
      width: 100%;
      max-width: 20rem;

      @media (min-width: ${props => props.theme.bpTablet}) {
        max-width: 100%;
      }
    }
  }

  .insideBio__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
    transform: translateX(100%);
    opacity: 1;
    background: ${props => props.theme.neptune};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50%);
      padding: 5rem;
    }

    h3 {
      margin-bottom: 0;
      color: ${props => props.theme.deepSea};
      font-weight: bold;
    }

    h4 {
      margin-top: 0;
      color: ${props => props.theme.kenyanCopper};
      font-family: ${props => props.theme.fontTer};
      font-weight: bold;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }
    }

    p {
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontTer};
    }

    &--container {
      width: 100%;
    }
    &--button {
      width: 100%;
      margin-top: 5rem;
      text-align: left;

      button {
        display: inline-block;
        position: relative;
        padding: 1rem 0;
        padding-right: 5rem;
        transition: all 0.3s ease-in-out;
        background: transparent;
        color: ${props => props.theme.deepSea};
        border: none;
        text-transform: uppercase;

        @media (min-width: ${props => props.theme.bpTablet}) {
        }

        @media (min-width: ${props => props.theme.bpDesksm}) {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .italic-btn {
          font-family: ${props => props.theme.fontSec};
          font-style: italic;
          text-transform: capitalize;
        }

        .btn-circle {
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          width: 3.2rem;
          height: 3.2rem;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-in-out;
          color: ${props => props.theme.deepSea};
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
            border: 0.2rem solid ${props => props.theme.deepSea};
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
          color: ${props => props.theme.kenyanCopper};
          cursor: pointer;

          .btn-circle {
            color: ${props => props.theme.kenyanCopper};
            &::before {
              border-color: ${props => props.theme.kenyanCopper};
            }
            &::after {
              color: ${props => props.theme.kenyanCopper};
            }
          }
        }
      }
    }
  }
`

const InsideBio = ({ member, isActive, setActive }) => {
  const showBio = useSpring({
    delay: isActive ? 0 : 1000,
    visibility: isActive ? "visible" : "hidden",
  })
  const slideImage = useSpring({
    transform: isActive ? "translateX(0%)" : "translateX(-100%)",
  })
  const slideContent = useSpring({
    transform: isActive ? "translateX(0%)" : "translateX(100%)",
  })

  return (
    <StyledInsideBio className="insideBio" style={showBio}>
      <animated.div className="insideBio__image" style={slideImage}>
        <div className="insideBio__image--container">
          <Img
            fluid={member.image.localFile.childImageSharp.fluid}
            alt={member.image.alt_text}
          />
        </div>
      </animated.div>
      <animated.div className="insideBio__content" style={slideContent}>
        <div className="insideBio__content--container">
          <h3>{member.name}</h3>
          <h4>{member.title}</h4>
          <div dangerouslySetInnerHTML={{ __html: member.bio }} />
          <div className="insideBio__content--button">
            <button onClick={() => setActive(!isActive)}>
              <span className="italic-btn">Close Bio</span>
              <span className="btn-circle" />
            </button>
          </div>
        </div>
      </animated.div>
    </StyledInsideBio>
  )
}

export default InsideBio
