import React from "react"
import styled from "styled-components"
import Deck from "./Deck"

const StyledAnimationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overfolow: hidden;
`

const DeckAnimation = props => {
  const urls = props.images.map(img => {
    return img.image.localFile.publicURL
  })

  return (
    <StyledAnimationWrapper>
      <Deck imageURL={urls} />
    </StyledAnimationWrapper>
  )
}

export default DeckAnimation
