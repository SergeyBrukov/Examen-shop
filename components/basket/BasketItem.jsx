import Image from "next/image";
import { useContext } from "react";
import AppContext from "../../utils/context";
import { StyledButton } from "../styles/styledButtons";
import { StyledDescription, StyledMainTitle } from "../styles/styledTitle";
import { StyledBasketItem } from "./StyledBasket";

const BasketItem = ({ prod, increase, removeProdBasket, decrease }) => {
  const { title, price, imageUrl, id, count } = prod;

  return (
    <StyledBasketItem>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        width={70}
        height={70}
      />
      <div className="item-title-price">
        <StyledMainTitle
          as="h2"
          size="25"
          weight="60"
          color="black"
          position="left"
        >
          {title}
        </StyledMainTitle>
        <div className="item-title-price__current-price">
          <StyledDescription
            size="20"
            weight="600"
            color="black"
            position="start"
          >
            {count * price} $
          </StyledDescription>
          <div className="item-title-price__current-price__curent">
            <span className="icon-cross-circle" onClick={() => decrease(id)} />
            <p>{count}</p>
            <span className="icon-add" onClick={() => increase(id)} />
          </div>
        </div>
      </div>
      <div>
        <StyledButton
          border
          color="main"
          size="14"
          onClick={() => {
            removeProdBasket(id);
          }}
          className="remove-prod-btn"
        >
          <span className="icon-cross-small" />
        </StyledButton>
      </div>
    </StyledBasketItem>
  );
};

export default BasketItem;
