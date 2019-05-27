import React, { Component } from "react"
import Img from "gatsby-image"

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
