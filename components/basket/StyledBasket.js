import styled from "styled-components";

export const StyledBasketWrapper = styled.div`
  padding: 15px;
  .basket-wrapper {
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        padding: 8px;
      }
    }
  }
`;

export const StyledBasketItem = styled.div`
  padding: 20px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  column-gap: 30px;
  align-items: center;
  border: 2px solid #f3f3f3;
  border-radius: 20px;
  .remove-prod-btn {
    padding: 0px;
    span {
      font-size: 30px;
      color: black;
    }
  }

  .item-title-price {
    &__current-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__curent {
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          cursor: pointer;
          color: #ff4a32;
        }
      }
    }
  }
`;

export const StyledPriceBasketBlock = styled.div`
  margin-top: 50px;
  ul {
    display: block;
    margin-bottom: 40px !important;

    li {
      display: flex;
      align-items: flex-end;
      margin-bottom: 20px;

      div {
        flex: 1;
        height: 1px;
        border-bottom: 1px dashed #dfdfdf;
        position: relative;
        top: -4px;
        margin: 0 7px;
      }
    }
  }

  .greenButton {
    position: relative;
    width: 100%;
    &:disabled {
      animation: button-loading 0.6s ease-in-out infinite;
    }

    &:hover {
      span {
        transform: translateX(5px);
      }
    }

    span {
      position: absolute;
      right: 20%;
      transition: transform 0.15s ease-in-out;
    }
  }
`;

export const StyledEmptyBasketBlock = styled.div`
    position: absolute;
    top: 40%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`