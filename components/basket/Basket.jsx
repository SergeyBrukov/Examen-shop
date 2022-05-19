import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { StyledButton } from "../styles/styledButtons";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";
import BasketList from "./BasketList";
import {
  StyledBasketWrapper,
  StyledPriceBasketBlock,
  StyledEmptyBasketBlock,
} from "./StyledBasket";
import Link from "next/link";
import EmptyBasket from "../../public/empty-cart.jpg";

import axios from "axios";
import AppContext from "../../utils/context";

const Basket = ({ setVisibleTroley }) => {
  const { basket, setBasket, removeProdBasket, setOrder, order } =
    useContext(AppContext);

  const totalPrice =
    basket && basket.length
      ? basket.reduce((a, b) => a + b.count * b.price, 0)
      : 0;

  const increase = (id) => {
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    });
    ///localStorage
    let items = JSON.parse(localStorage.getItem("basket"));
    let increaseItem = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    localStorage.setItem("basket", JSON.stringify(increaseItem));
  };

  const decrease = (id) => {
    setBasket((basket) => {
      return basket.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? product.count - 1 : 1,
          };
        }
        return product;
      });
    });
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <StyledBasketWrapper className="basket-wrapper">
      <div className="basket-wrapper__top">
        <StyledMainTitle as="h2" size="30" weight="700" color="black">
          Basket
        </StyledMainTitle>
        <StyledButton
          figure="circle"
          color="main"
          size="14"
          onClick={() => setVisibleTroley(false)}
        >
          <span className="icon-cross-circle"></span>
        </StyledButton>
      </div>
      <BasketList
        basket={basket}
        increase={increase}
        decrease={decrease}
        removeProdBasket={removeProdBasket}
      />
      {basket?.length > 0 ? (
        <StyledPriceBasketBlock>
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>{totalPrice} $</b>
            </li>
          </ul>
          <Link href="/order">
            <StyledButton
              figure="circle"
              color="success"
              size="14"
              className="greenButton"
              onClick={() => setVisibleTroley(false)}
            >
              I want to buy
              <span className="icon-arrow-small-right" />
            </StyledButton>
          </Link>
        </StyledPriceBasketBlock>
      ) : (
        <StyledEmptyBasketBlock>
          <Image
            src={EmptyBasket}
            alt="Picture of the author"
            width={150}
            height={150}
          />
          <StyledMainTitle
            as="h2"
            size="25"
            weight="600"
            color="black"
            position="center"
          >
            Drawer empty
          </StyledMainTitle>
          <StyledDescription
            size="20"
            weight="400"
            color="black"
            position="center"
          >
            Add at least one pair of sneakers to complete the order
          </StyledDescription>
        </StyledEmptyBasketBlock>
      )}
    </StyledBasketWrapper>
  );
};

export default Basket;
