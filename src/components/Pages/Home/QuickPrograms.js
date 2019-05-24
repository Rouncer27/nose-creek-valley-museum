import React, { useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const QuickPrograms = props => {
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
      to="/programs/#programsList"
      className="quicklinks__container quicklinks__programs"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="quicklinks__container--image">
        <Img fluid={props.programsImgUrl} alt={props.programsImgAlt} />
        <animated.div
          className="quicklinks__container--image--button"
          style={slideDown}
        >
          <p>
            Programs
            <span className="btn-circle" />
          </p>
        </animated.div>
      </div>
      <animated.div className="quicklinks__container--content" style={slideUp}>
        <div className="quicklinks__container--content--title">
          <h2>
            NCVM <br /> Programs
          </h2>
        </div>
        <div className="quicklinks__container--content--sub">
          <h3>{props.programsTitle}</h3>
        </div>
        <div
          className="quicklinks__container--content--excerpt"
          dangerouslySetInnerHTML={{ __html: props.programsExcerpt }}
        />
        <div className="quicklinks__container--content--icon icon-pillar" />
      </animated.div>
    </Link>
  )
}

export default QuickPrograms
