import React, { useState } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const QuickCurrent = props => {
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
      className="quicklinks__container quicklinks__exhibits"
      to="/experience/#speicalExhibits"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="quicklinks__container--image">
        <Img fluid={props.exhibitsImgUrl} alt={props.exhibitsImgAlt} />
        <animated.div
          className="quicklinks__container--image--button"
          style={slideDown}
        >
          <p>
            Exhibits
            <span className="btn-circle" />
          </p>
        </animated.div>
      </div>
      <animated.div className="quicklinks__container--content" style={slideUp}>
        <div className="quicklinks__container--content--title">
          <h2>
            Current & <br /> Upcoming Exhibits
          </h2>
        </div>
        <div className="quicklinks__container--content--sub">
          <h3>{props.exhibitsTitle}</h3>
        </div>
        <div
          className="quicklinks__container--content--excerpt"
          dangerouslySetInnerHTML={{ __html: props.exhibitsExcerpt }}
        />
        <div className="quicklinks__container--content--icon icon-gallery" />
      </animated.div>
    </Link>
  )
}

export default QuickCurrent
