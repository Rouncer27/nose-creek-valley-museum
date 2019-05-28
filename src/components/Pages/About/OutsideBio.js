import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const OutsideBio = ({ member, isActive, setActive }) => {
  return (
    <div className="staff__container--outside">
      <div className="staff__container--image">
        <Img
          fluid={member.image.localFile.childImageSharp.fluid}
          alt={member.image.alt_text}
        />
      </div>
      <div className="staff__container--content">
        <div className="staff__container--content--title">
          <h3>{member.name}</h3>
        </div>
        <div className="staff__container--content--sub">
          <h4>{member.title}</h4>
        </div>
        <div className="staff__container--content--fav">
          <p>{member.favourite}</p>
        </div>
        <div className="staff__container--content--button">
          <button onClick={() => setActive(!isActive)}>
            <span className="italic-btn">Read Bio</span>
            <span className="btn-circle" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutsideBio
