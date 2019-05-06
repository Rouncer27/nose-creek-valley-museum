import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import Header from "./Header/header"
import Footer from "./Footer/Footer"

import theme from "./styles/Theme"
import GlobalStyle from "./styles/Golbal"

const SiteWrapper = styled.div`
  position: relative;
`

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <>
              <ThemeProvider theme={theme}>
                <React.Fragment>
                  <GlobalStyle />
                  <SiteWrapper className="ncvm-site-wrapper">
                    <Header
                      siteTitle={data.site.siteMetadata.title}
                      location={
                        this.props.location ? this.props.location.pathname : "/"
                      }
                    />
                    <main>{this.props.children}</main>
                  </SiteWrapper>
                  <Footer />
                </React.Fragment>
              </ThemeProvider>
            </>
          )
        }}
      />
    )
  }
}

// const Layout = ({ children }) => {
//   return (

//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
