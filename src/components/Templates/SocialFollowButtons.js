import React from "react"
import styled from "styled-components"

const SFBStyled = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 3rem;

    li {
      display: inline-block;
      justify-content: center;
      margin-bottom: 0.5rem;
      text-align: center;
      overflow: hidden;
      font-size: 0;

      a {
        display: block;
        position: relative;
        align-self: center;
        width: 3rem;
        height: 3rem;
        margin: 0 0.5rem;
        transition: all 0.35s ease;
        color: ${props => props.theme.white};
        font-family: ${props => props.theme.fontAwesome} !important;

        &:hover {
          color: ${props => props.theme.deco};
        }

        &::before {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: 0 auto;
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
        }
      }
    }

    .intro-social__list--fb a {
      &::before {
        content: "\f09a";
      }
    }

    .intro-social__list--ig a {
      &::before {
        content: "\f16d";
      }
    }

    .intro-social__list--tw a {
      &::before {
        content: "\f099";
      }
    }
  }
`

const SocialFollowButtons = () => {
  return (
    <SFBStyled>
      <ul className="intro-social__list">
        <li className="intro-social__list--item intro-social__list--fb">
          <a
            rel="noopener noreferrer"
            title="Follow us on Facebook"
            target="_blank"
            href="https://www.facebook.com/NCVMuseum/"
          >
            Facebook
          </a>
        </li>
        <li className="intro-social__list--item intro-social__list--ig">
          <a
            rel="noopener noreferrer"
            title="Follow us on Instagram"
            target="_blank"
            href="https://www.instagram.com/nosecreekvalleymuseum/"
          >
            Instagram
          </a>
        </li>
        <li className="intro-social__list--item intro-social__list--tw">
          <a
            rel="noopener noreferrer"
            title="Follow us on Twitter"
            target="_blank"
            href="https://twitter.com/NCVMuseum/"
          >
            Instagram
          </a>
        </li>
      </ul>
    </SFBStyled>
  )
}

export default SocialFollowButtons
