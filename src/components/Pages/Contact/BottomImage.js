import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

class BottomImage extends Component {
  render() {
    return (
      <div>
        <Img fluid={this.props.fluid} alt={this.props.imgalt} />
      </div>
    )
  }
}

export default BottomImage
