import styled from "styled-components";
import { StyledContainer } from "../styles/styledContainer";

export const StyledProductItem = styled(StyledContainer)`
  .product-page__content {
    display: flex;
  }

  .product-page__left {
    width: 70%;
  }

  .product-page__right {
    width: 30%;
  }

  .product-page__buy-game {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .product-page_cover {
    height: 170px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .product-genre {
    background-color: rgb(80, 82, 84);
    padding: 5px;
    font-size: 13px;
    border-radius: 10px;
    color: white;
  }

  .product-genre:not(:last-child) {
    margin-right: 7px;
  }
  .secondary-text {
    margin-top: 15px;
    font-size: 20px;
    color: rgb(80, 82, 84);
  }

  .buy-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-buy-btn {
      padding: 2px 10px;
      border: none;
      span {
        font-size: 25px;
        color: black;
      }
      &:hover {
        border: none;
        padding: 2px 10px;
      }
    }
    .card-bought-btn {
      padding: 2px 10px;
      position: relative;
      border: none;
      span {
        font-size: 25px;
        color: green;
      }
      &:hover {
        border: none;
        padding: 2px 10px;
        background: none;
      }
      &::after {
        content: "✓";
        padding: 0 2px;
        color: green;
        position: absolute;
        top: -8px;
        right: -4px;
        border: 1px solid green;
        border-radius: 50%;
      }
    }
  }
  .change-delete-item-product-block {
    display: flex;
    position: absolute;
    right: 5px;
    top: 5px;
    button {
      background-color: white;
    }
    &__delete {
      margin-right:10px ;
      border: 2px solid #FF4A32;
    }
  }
  textarea {
    height: 200px;
    font-family: inherit;
    resize: none;
    border: none;
    outline: none;
  }
`;
