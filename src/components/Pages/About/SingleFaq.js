import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const SingleFaq = ({ faq }) => {
  const [isActive, setActive] = useState(false)

  const showFaq = useSpring({
    maxHeight: isActive ? "1000px" : "0px",
  })

  return (
    <div className="faqs__item">
      <div className="faqs__item--question">
        <p className="faqs__item--question--title">Q</p>
        <p className="faqs__item--question--content">{faq.question}</p>
        <div className="faqs__item--question--button">
          <button onClick={() => setActive(!isActive)} />
        </div>
      </div>
      <animated.div className="faqs__item--answer" style={showFaq}>
        <p className="faqs__item--answer--title">A</p>
        <div
          className="faqs__item--answer--content"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </animated.div>
    </div>
  )
}

export default SingleFaq
