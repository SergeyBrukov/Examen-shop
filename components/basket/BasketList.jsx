import { useContext } from "react";
import AppContext from "../../utils/context";
import BasketItem from "./BasketItem";

const BasketList = ({
  increase,
  basket,
  removeProdBasket,
  decrease,
}) => {
  return (
    <div>
      {basket?.map((prod) => {
        return (
          <BasketItem
            key={prod.id}
            prod={prod}
            decrease={decrease}
            increase={increase}
            removeProdBasket={removeProdBasket}
          />
        );
      })}
    </div>
  );
};

export default BasketList;
