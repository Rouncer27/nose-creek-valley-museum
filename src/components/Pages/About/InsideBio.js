import React, { useRef } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useSpring, animated, useChain, config } from "react-spring"

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

  .insideBio__image {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateX(-100%);
    opacity: 1;
    background: ${props => props.theme.deco};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50%);
      padding: 5rem;
    }

    &--container {
      width: 100%;
    }
  }

  .insideBio__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    transform: translateX(100%);
    opacity: 1;
    background: ${props => props.theme.neptune};

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(50%);
      padding: 5rem;
    }

    &--container {
      width: 100%;
    }
  }
`

const InsideBio = ({ member, isActive, setActive }) => {
  const showBio = useSpring({
    delay: isActive ? 0 : 1000,
    visibility: isActive ? "visible" : "hidden",
  })

  const showImageRef = useRef()
  const slideImage = useSpring({
    transform: isActive ? "translateX(0%)" : "translateX(-100%)",
  })

  const showContentRef = useRef()
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
          <button onClick={() => setActive(!isActive)}>Close</button>
        </div>
      </animated.div>
    </StyledInsideBio>
  )
}

export default InsideBio
