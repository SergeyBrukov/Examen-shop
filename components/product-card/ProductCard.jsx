import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import AppContext from "../../utils/context";
import StarRating from "../starRating/StarRating";
import { StyledButton } from "../styles/styledButtons";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";
import { ProductCardWrapper } from "./styledProductCard";

const ScateboardCard = ({ prod }) => {
  const { title, price, imageUrl, description, id } = prod;
  const { addProdBasket, isItemAdded } = useContext(AppContext);
  const onClickBasket = () => {
    addProdBasket(prod);
  };

  return (
    <ProductCardWrapper>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        width={160}
        height={160}
        className="image-card"
      />
      <Link href={`/product-page/${id}`}>
        <StyledMainTitle
          as="h2"
          size="22"
          weight="700"
          color="black"
          position="center"
          className="name-card"
        >
          {title}
        </StyledMainTitle>
      </Link>
      <StarRating className="card-star-rating" />
      <div className="module card-description">
        <StyledDescription
          size="15"
          weight="400"
          color="black"
          position="start"
        >
          {description}
        </StyledDescription>
      </div>
      <div className="buy-block">
        <div className="card-price">
          <span>{price} $</span>
        </div>
        <StyledButton
          border
          color="main"
          size="14"
          onClick={onClickBasket}
          className={isItemAdded(id) ? "card-bought-btn" : "card-buy-btn"}
        >
          <span className="icon-food-trolley" />
        </StyledButton>
      </div>
    </ProductCardWrapper>
  );
};

export default ScateboardCard;
