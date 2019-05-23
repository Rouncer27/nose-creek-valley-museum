import React, { useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const QuickTourist = props => {
  const [isHover, setHover] = useState(false)
  const slideDown = useSpring({
    opacity: isHover ? 1 : 0,
    top: isHover ? "-10%" : "-100%",
  })
  const slideUp = useSpring({
    top: isHover ? "-10%" : "0%",
  })
  return (
    <Link
      className="quicklinks__container quicklinks__tourist"
      to="/"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="quicklinks__container--image">
        <Img fluid={props.touristImgUrl} alt={props.touristImgAlt} />
        <animated.div
          className="quicklinks__container--image--button"
          style={slideDown}
        >
          <p>
            Tourist Information
            <span className="btn-circle" />
          </p>
        </animated.div>
      </div>
      <animated.div className="quicklinks__container--content" style={slideUp}>
        <div className="quicklinks__container--content--title">
          <h2>
            Tourist <br /> Information
          </h2>
        </div>
        <div className="quicklinks__container--content--sub">
          <h3>{props.touristTitle}</h3>
        </div>
        <div
          className="quicklinks__container--content--excerpt"
          dangerouslySetInnerHTML={{ __html: props.touristExcerpt }}
        />
        <div className="quicklinks__container--content--icon icon-map" />
      </animated.div>
    </Link>
  )
}

export default QuickTourist
