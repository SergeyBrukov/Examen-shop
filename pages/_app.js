import Layout from "../components/layout/Layout";
import "../public/default-icon/style.css";
import { useEffect, useState } from "react";
import { GlobalStyle } from "../components/styles/globalStyle";
import "rc-drawer/assets/index.css";
import "rc-dialog/assets/index.css";
import "rc-pagination/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-pro-sidebar/dist/css/styles.css";
import "burger-menu/lib/index.css";
import "react-loading-skeleton/dist/skeleton.css";

import AppContext from "../utils/context";
import { useAuth } from "../components/autorized/firebese";

const MyApp = ({ Component, pageProps }) => {
  const [basket, setBasket] = useState([]);
  const [visibleTroley, setVisibleTroley] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function getCartData() {
      let basketLocalStorage = await JSON.parse(localStorage.getItem("basket"));
      if (basketLocalStorage) {
        setBasket(basketLocalStorage);
      } else {
        setBasket([]);
      }
    }
    getCartData();
  }, []);

  const isItemAdded = (id) => {
    return basket?.some((i) => i.id === id);
  };

  function removeProdBasket(id) {
    setBasket(basket.filter((prod) => prod.id !== id));
    let items = JSON.parse(localStorage.getItem("basket"));
    let removeBasketItem = items.filter((item) => item.id !== id);
    localStorage.setItem("basket", JSON.stringify(removeBasketItem));
  }

  const addProdBasket = (item) => {
    if (basket?.find((i) => i.id === item.id)) {
    } else {
      setBasket([...basket, item]);
      localStorage.setItem("basket", JSON.stringify([...basket, item]));
    }
  };

  return (
    <AppContext.Provider
      value={{
        addProdBasket,
        basket,
        removeProdBasket,
        visibleTroley,
        setVisibleTroley,
        isItemAdded,
        setBasket,
        setOrder,
        order,
      }}
    >
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </AppContext.Provider>
  );
};

export default MyApp;
