import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/Head/seo"

const NotFoundPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: #8bc0ba;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundPageStyled>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </NotFoundPageStyled>
  </Layout>
)

export default NotFoundPage
