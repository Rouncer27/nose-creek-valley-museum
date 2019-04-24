import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

class NavMobileItem extends Component {
  render() {
    return (
      <li>
        <Link to={this.props.object_slug}>{this.props.title}</Link>
      </li>
    )
  }
}

export default NavMobileItem
