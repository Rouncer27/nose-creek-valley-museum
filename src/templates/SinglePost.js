import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"

class SinglePost extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>{this.props.data.wordpressPost.title}</h1>
      </Layout>
    )
  }
}

export const query = graphql`
  query singleStory($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
    }
  }
`

export default SinglePost
