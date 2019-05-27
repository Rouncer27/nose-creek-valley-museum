import React from "react"
import styled from "styled-components"
import { ClimbingBoxLoader } from "react-spinners"

const SubmittingModalStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;

  .submitting-the-forms__message {
    display: block;
    align-self: center;
    max-width: 50rem;
    margin: 0 auto;
    z-index: 1500;
    text-align: center;

    p {
      color: ${props => props.theme.kenyanCopper};
      font-size: 2rem;
      font-family: ${props => props.theme.fontTer};
    }
  }

  .submitting-the-forms__loading {
    .css-1euz61u-container-container {
      margin: 0 auto;
    }
  }

  .submitting-the-forms__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.neptune};
  }
`

const SubmittingModal = () => {
  return (
    <SubmittingModalStyle className="submitting-the-forms">
      <div className="submitting-the-forms__message">
        <p>Submitting The Form. Please wait...</p>
        <div className="submitting-the-forms__loading">
          <ClimbingBoxLoader
            sizeUnit={"px"}
            size={15}
            color={"#600002"}
            loading={true}
          />
        </div>
      </div>

      <div className="submitting-the-forms__background" />
    </SubmittingModalStyle>
  )
}

export default SubmittingModal
