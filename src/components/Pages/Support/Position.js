import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

const StyledPosition = styled.div`
  width: 100%;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: 25%;
  }

  @media (min-width: ${props => props.theme.bpDesksm}) {
    width: 20%;
  }

  .singlePosition__outside {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    transition: all 0.3s ease;
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      height: 25vw;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      height: 20vw;
    }

    h3 {
      margin: 0;
      font-weight: bold;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }
      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2.4rem;
      }
    }

    &:hover {
      cursor: pointer;
      background: ${props => props.theme.rawSienna} !important;
    }
  }

  .singlePosition__inside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    z-index: 999999999;

    &--content {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      max-width: 80rem;
      max-height: 100vh;
      margin: 0 auto;
      padding: 4rem;
      transform: translate(-50%, -50%);
      overflow-y: scroll;
      opacity: 0;
      z-index: 5;

      h3 {
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontTer};
        text-transform: uppercase;
      }

      p {
        color: ${props => props.theme.deepSea};
        font-family: ${props => props.theme.fontTer};

        @media (min-width: ${props => props.theme.bpDesksm}) {
          font-size: 1.6rem;
          margin-bottom: 1.6rem;
        }
      }

      ul {
        margin: 2rem 0;
        li {
          list-style: disc;
          list-style-position: inside;
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontTer};

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }
        }
      }
    }

    &--button {
      position: fixed;
      top: 5rem;
      right: 15rem;
      opacity: 0;
      z-index: 15;

      button.close-modal {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
        background: ${props => props.theme.rawSienna};
        color: ${props => props.theme.white};

        &:hover {
          cursor: pointer;
          background: ${props => props.theme.deepSea};
          color: ${props => props.theme.white};
        }

        &:focus {
          outline: none;
        }
      }
    }

    &--background {
      position: absolute;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.frenchGrey};
      opacity: 0;
      z-index: 1;
    }
  }
`

const Position = ({ position }) => {
  const [isActive, setActive] = useState(false)

  const showDescription = useSpring({
    delay: isActive ? 0 : 1000,
    visibility: isActive ? "visible" : "hidden",
  })

  const showBackground = useSpring({
    opacity: isActive ? 1 : 0,
  })

  const showContent = useSpring({
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translate(-50%, -50%)" : "translate(-50%, 0%)",
  })

  return (
    <StyledPosition className="singlePosition">
      <div
        className="singlePosition__outside"
        onClick={() => setActive(!isActive)}
      >
        <h3>{position.job_title}</h3>
      </div>
      <animated.div className="singlePosition__inside" style={showDescription}>
        <animated.div
          className="singlePosition__inside--content"
          style={showContent}
        >
          <h3>{position.job_title}</h3>
          <div dangerouslySetInnerHTML={{ __html: position.job_description }} />
        </animated.div>
        <animated.div
          className="singlePosition__inside--background"
          style={showBackground}
        />
        <animated.div
          className="singlePosition__inside--button"
          style={showBackground}
        >
          <button className="close-modal" onClick={() => setActive(!isActive)}>
            &#x2715;
          </button>
        </animated.div>
      </animated.div>
    </StyledPosition>
  )
}

export default Position
