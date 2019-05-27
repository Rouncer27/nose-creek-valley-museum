import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated, useChain } from "react-spring"
import styled from "styled-components"

const AnimatedBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 0%;
  background: ${props => props.theme.kenyanCopper};
  opacity: 0.95;

  p {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    color: ${props => props.theme.white};
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    opacity: 0;

    .btn-circle {
      display: block;
      position: absolute;
      top: 50%;
      right: -4.5rem;
      width: 3.2rem;
      height: 3.2rem;
      transform: translate(0%, -50%);
      transition: all 0.3s ease-in-out;
      color: ${props => props.theme.white};
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
        border: 0.2rem solid ${props => props.theme.white};
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
  }
`

const ColouredLinkItem = ({ link, iconImg }) => {
  const [isHover, setHover] = useState(false)

  const slideRef = useRef()
  const slide = useSpring({
    config: { mass: 1, tension: 500, friction: 40 },
    ref: slideRef,
    width: isHover ? "100%" : "0%",
    height: isHover ? "100%" : "0%",
  })

  const textRef = useRef()
  const textFade = useSpring({
    config: { mass: 1, tension: 500, friction: 40 },
    ref: textRef,
    opacity: isHover ? 1 : 0,
    top: isHover ? "50%" : "20%",
  })

  const AnimatedLinkItem = animated(Link)
  const AnimatedBoxItem = animated(AnimatedBox)

  useChain(isHover ? [slideRef, textRef] : [textRef, slideRef])

  return (
    <AnimatedLinkItem
      to={link.link_slug}
      className={`colorlink__box colorlink__box--${link.colour}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="colorlink__content">
        <div className="colorlink__title">
          <h2>{link.title}</h2>
        </div>
        <div className={`colorlink__icon colorlink__icon--${link.icon}`}>
          {iconImg && <Img fluid={iconImg} alt={link.title} />}
        </div>
      </div>
      <AnimatedBoxItem style={slide}>
        <animated.p style={textFade}>
          {link.title}
          <span className="btn-circle" />
        </animated.p>
      </AnimatedBoxItem>
    </AnimatedLinkItem>
  )
}

export default ColouredLinkItem
