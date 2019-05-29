import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledGalleryImage = styled.div`
  align-self: center;
  width: calc(15%);
  margin: 2rem 5rem;
  border: solid 0.5rem #c6c6c6;
`

const GalleryImage = ({ image }) => {
  return (
    <StyledGalleryImage className="galleryImage">
      <Img fluid={image.localFile.childImageSharp.fluid} alt={image.alt_text} />
    </StyledGalleryImage>
  )
}

export default GalleryImage
