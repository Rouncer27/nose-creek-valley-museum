import styled from "styled-components"
import { Link } from "gatsby"

const StoryCardSmall = styled(Link)`
  display: block;
  width: 100%;
  border: solid 1px #ebecec;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(25% - 0.25rem);
  }

  .storyCardImage {
    position: relative;
    @media (min-width: ${props => props.theme.bpDesksm}) {
      min-height: 25vw;
      overflow: hidden;
    }

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .storyCardTitle {
    text-align: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      padding: 10rem 3rem;
    }
    h2 {
      margin: 0 auto;
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 700;
      text-align: center;
      line-height: 1.18;
      letter-spacing: normal;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 2rem;
        max-width: 15rem;
      }
    }
  }
`

const StoryCardMedium = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  border: solid 1px #ebecec;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(50% - 0.25rem);
    min-height: 40vw;
  }

  .storyCardImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .storyCardTitle {
    position: absolute;
    top: 5rem;
    left: 5rem;
    z-index: 5;
    max-width: 35rem;

    p {
      margin: 0;
      color: ${props => props.theme.white};
      font-weight: 300;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }
    }

    h2 {
      margin: 0;
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.fontPrim};

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3rem;
      }
    }
  }
`

const StoryCardLarge = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  border: solid 1px #ebecec;

  @media (min-width: ${props => props.theme.bpTablet}) {
    width: calc(75% - 0.25rem);
    min-height: 40vw;
  }

  .storyCardImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .storyCardTitle {
    position: absolute;
    top: 5rem;
    left: 5rem;
    z-index: 5;
    max-width: 35rem;

    p {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-weight: 300;
      text-transform: uppercase;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 2rem;
      }
    }

    h2 {
      margin: 0;
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontPrim};
      font-weight: 700;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 3rem;
      }
    }
  }
`

export { StoryCardSmall, StoryCardMedium, StoryCardLarge }
