import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"

class PastExhibit extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <h1>{this.props.data.wordpressWpPastExhibits.title}</h1>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query PastExhibit($slug: String!) {
    wordpressWpPastExhibits(slug: { eq: $slug }) {
      title
    }
  }
`

export default PastExhibit
