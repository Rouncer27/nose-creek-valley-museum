import React from "react"
import styled from "styled-components"

const MainContent = ({ data }) => {
  return (
    <IntroStyled>
      <div className="main-content__wrapper">
        <div>
          <h2>{data.mainTitle}</h2>
        </div>
        <div className="main-content__wysiwyg">
          <div dangerouslySetInnerHTML={{ __html: data.mainContent }} />
        </div>
      </div>
    </IntroStyled>
  )
}

const IntroStyled = styled.section`
  padding-bottom: 20rem;

  .main-content__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    padding: 2rem;

    @media (min-width: 768px) {
      max-width: 90rem;
    }

    @media (min-width: 1025px) {
      max-width: 100rem;
    }
  }

  .main-content__wysiwyg {
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    &::after {
      display: table;
      clear: both;
      content: "";
    }

    .post-edit-link {
      font-size: 1.6rem;
    }

    p {
      em {
        font-style: italic;
      }
    }

    a {
      transition: all 0.3s;
      color: #000;
      font-weight: bold;
      font-size: 1em;

      &:hover {
        color: #000;
      }
    }

    h1 {
    }

    h2 {
    }

    h3 {
    }

    h4,
    h5,
    h6 {
    }

    ul {
      margin-bottom: 2.5rem;

      li {
        color: #000;
        position: relative;
        margin-bottom: 0.5em;
        padding-left: 0.75em;

        &::before {
          position: absolute;
          top: 0em;
          left: 0;
          padding-right: 0.5em;
          color: rgba(#000, 0.75);
          content: ">";
        }
      }
    }

    ol {
      margin-bottom: 2.5rem;
      padding-left: 1.25em;

      li {
        line-height: 1;
        color: #000;
        position: relative;
        margin-bottom: 0.5em;
        list-style-type: decimal;
      }
    }

    .no-margin {
      margin-bottom: 0;
    }
  }
`

export default MainContent
