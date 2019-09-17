import React from "react"
import styled from "styled-components"

import { FullScreenWrapper } from "../../../components/styles/Commons/Wrappers"
import galleryIcon from "../../../images/icons/gallery.png"
import pillarIcon from "../../../images/icons/pillars.png"
import mapIcon from "../../../images/icons/map.png"

import QuickCurrent from "./QuickCurrent"
import QuickPrograms from "./QuickPrograms"
import QuickTourist from "./QuickTourist"

const QuickLinksStyled = styled.section`
  width: 100%;
  overflow: hidden;

  .quicklinks__wrapper {
    @media (min-width: ${props => props.theme.bpTablet}) {
      justify-content: space-between;
      justify-content: space-evenly;
      padding: 2rem 0;
    }
  }

  .quicklinks__container {
    width: 100%;
    margin: 4rem 2rem;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: ${props => props.theme.white};
    overflow: hidden;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(33.33% - 2rem);
      margin: 2rem 1rem;
    }

    @media (min-width: ${props => props.theme.bpDesksm}) {
      width: calc(28%);
      margin: 2rem 0;
    }

    &:hover {
      cursor: pointer;
    }

    &--image {
      position: relative;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        max-height: 28vw;
        overflow: hidden;
      }

      img {
        filter: blur(0);
      }

      &--button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(6, 48, 68, 0.75);
        opacity: 0;

        @media (min-width: ${props => props.theme.bpDesksm}) {
          max-height: 28vw;
        }

        p {
          display: block;
          position: absolute;
          top: 40%;
          left: 50%;
          margin: 0 auto;
          color: ${props => props.theme.white};
          transform: translate(-50%, 0);
          text-align: center;
          text-transform: uppercase;
          opacity: 1;

          @media (min-width: ${props => props.theme.bpTablet}) {
            width: 100%;
            font-size: 1.6rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }

          .btn-circle {
            display: block;
            position: absolute;
            bottom: -6rem;
            right: 0;
            left: 0;
            width: 4rem;
            height: 4rem;
            margin: auto;
            transition: all 0.3s ease-in-out;
            color: ${props => props.theme.deco};
            text-align: center;

            &::before {
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              width: 100%;
              height: 100%;
              transform: translate(-50%, -50%);
              transition: all 0.3s ease-in-out;
              border: 0.2rem solid ${props => props.theme.deco};
              border-radius: 50%;
              content: "";
            }

            &::after {
              display: block;
              position: absolute;
              top: 50%;
              left: 0%;
              transform: translate(0%, -50%);
              transition: all 0.3s ease-in-out;
              font-family: ${props => props.theme.fontAwesome};
              font-size: 3rem;
              font-weight: 100;
              content: "\f178";
            }
          }
        }
      }
    }

    &--content {
      position: relative;
      padding: 7.5rem 1.5rem 1.5rem;
      background: rgba(255, 255, 255, 1);

      @media (min-width: ${props => props.theme.bpTablet}) {
        padding: 7.5rem 1.5rem 1.5rem;
      }

      @media (min-width: ${props => props.theme.bpDesksm}) {
        padding: 7.5rem 1.5rem 1.5rem;
      }

      &--title {
        h2 {
          color: ${props => props.theme.deepSea};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 700;
          text-align: center;
          line-height: 1.18;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 2rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 3rem;
          }
        }
      }

      &--sub {
        margin-top: 2rem;
        margin-bottom: 2rem;
        h3 {
          color: ${props => props.theme.neptune};
          font-family: ${props => props.theme.fontPrim};
          font-weight: 400;
          text-align: center;
          text-transform: uppercase;
          line-height: 1.5;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.6rem;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }

      &--excerpt {
        p {
          color: ${props => props.theme.paraGrey};
          font-family: ${props => props.theme.fontTer};
          font-size: 2rem;
          font-weight: 500;
          text-align: center;
          line-height: 1.3;
          letter-spacing: normal;

          @media (min-width: ${props => props.theme.bpTablet}) {
            font-size: 1.6rem;
            font-weight: normal;
          }

          @media (min-width: ${props => props.theme.bpDesksm}) {
            font-size: 1.8rem;
          }
        }
      }

      &--icon {
        position: absolute;
        top: -4rem;
        right: 0;
        left: 0;
        width: 8rem;
        height: 8rem;
        margin: auto;
        border-radius: 50%;
        background-color: ${props => props.theme.kenyanCopper};
        background-repeat: no-repeat;
        background-position: center;
        background-size: 60% 60%;

        &.icon-gallery {
          background-image: url(${galleryIcon});
        }

        &.icon-pillar {
          background-image: url(${pillarIcon});
        }

        &.icon-map {
          background-image: url(${mapIcon});
        }
      }
    }
  }
`

const QuickLinks = props => {
  return (
    <QuickLinksStyled className="quicklinks">
      <FullScreenWrapper className="quicklinks__wrapper">
        <QuickCurrent
          exhibitsImgUrl={props.exhibitsImgUrl}
          exhibitsImgAlt={props.exhibitsImgAlt}
          exhibitsTitle={props.exhibitsTitle}
          exhibitsExcerpt={props.exhibitsExcerpt}
        />
        <QuickPrograms
          programsImgUrl={props.programsImgUrl}
          programsImgAlt={props.programsImgAlt}
          programsTitle={props.programsTitle}
          programsExcerpt={props.programsExcerpt}
        />
        <QuickTourist
          touristImgUrl={props.touristImgUrl}
          touristImgAlt={props.touristImgAlt}
          touristTitle={props.touristTitle}
          touristExcerpt={props.touristExcerpt}
        />
      </FullScreenWrapper>
    </QuickLinksStyled>
  )
}

export default QuickLinks
