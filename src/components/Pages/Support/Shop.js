import React, { Component } from "react"
import styled from "styled-components"

import { StandardWrapper } from "../../../components/styles/Commons/Wrappers"

import shopTag from "../../../images/support/ncvm-shop-tag.png"

const ShopStyled = styled.section`
  padding: 10rem 0;
  background: linear-gradient(
    to top,
    #f8f8f8 0%,
    #f8f8f8 80%,
    transparent 80%,
    transparent 100%
  );

  .shop__wrapper {
    position: relative;
  }

  .shop__content {
    width: 100%;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: 60%;
      margin-right: 40%;
    }

    h2 {
      margin: 0;
      margin-bottom: 3rem;
      color: ${props => props.theme.deepSea};
      font-family: ${props => props.theme.fontSec};
      line-height: 1.25;

      @media (min-width: ${props => props.theme.bpDesksm}) {
        font-size: 8rem;
      }
    }

    p {
      color: ${props => props.theme.paraGrey};
      font-family: ${props => props.theme.fontTer};
      font-weight: 300;
      line-height: 1.2;
      opacity: 0.85;

      @media (min-width: ${props => props.theme.bpTablet}) {
        font-size: 1.8rem;
      }
    }
  }

  .shop__image {
    position: absolute;
    top: -15rem;
    right: 0;
    width: 100%;
    height: 60rem;
    background-image: url(${shopTag});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    @media (min-width: ${props => props.theme.bpTablet}) {
      width: calc(40% - 4rem);
    }
  }
`

class Shop extends Component {
  render() {
    return (
      <ShopStyled className="shop">
        <StandardWrapper className="shop__wrapper">
          <div className="shop__content">
            <h2>Shop</h2>
            <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
          </div>
          <div className="shop__image" />
        </StandardWrapper>
      </ShopStyled>
    )
  }
}

export default Shop
