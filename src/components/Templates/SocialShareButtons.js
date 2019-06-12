import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
} from "react-share"

const SocialShareButtonsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const SocialShareButton = styled.div`
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }

  &.share-twitter {
    margin-left: 0;
  }
`

const SocialShareButtons = ({ url, title }) => {
  return (
    <SocialShareButtonsStyled>
      <SocialShareButton className="share-twitter">
        <TwitterShareButton style={{ width: "32px" }} url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </SocialShareButton>
      <SocialShareButton className="share-facebook">
        <FacebookShareButton style={{ width: "32px" }} url={url} title={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </SocialShareButton>

      <SocialShareButton className="share-linkedin">
        <LinkedinShareButton style={{ width: "32px" }} url={url} title={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </SocialShareButton>
    </SocialShareButtonsStyled>
  )
}

export default SocialShareButtons
