import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../utils/context";
import { useAuth } from "../autorized/firebese";
import CustoMmodal from "../customModal/CustomModal";
import InputGroup from "../inputGroup/InputGroup";
import { StyledButton } from "../styles/styledButtons";
import Router from 'next/router'
import { StyledProductItem } from "./styledProductItem";

const ProductItem = ({ product }) => {
  const user = useAuth();
  const router = useRouter();
  const { title, description, id, price, imageUrl, genres, video } = product;
  const { addProdBasket, isItemAdded, admin } = useContext(AppContext);
  const onClickBasket = () => {
    addProdBasket(product);
  };
  const [activeModal, setActiveModal] = useState(false);
  const [editProductItem, setEditProductItem] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handlEditFormActive = () => {
    setActiveModal(true);
    setEditProductItem({
      title: title,
      description: description,
      price: price,
    });
  };
  const editLogProduct = async () => {
    const editProduct = {
      ...editLogProduct,
      title: editProductItem.title,
      description: editProductItem.description,
      price: editProductItem.price,
    };
    await axios.put(
      `https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product/${id}`,
      editProduct
    );
  };

  const handlDeleteItemProduct = async () => {
    await axios.delete(
      `https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product/${id}`
    );
    // router.push("/");
    Router.back()
  };

  return (
    <>
      <StyledProductItem>
        <div className="product-page">
          <h1 className="product-page__title">{title}</h1>
          <div className="product-page__content">
            <div className="product-page__left">
              <iframe
                width="90%"
                height="400px"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="product-page__right">
              <div
                style={{
                  width: "100%",
                  height: "170px",
                  position: "relative",
                }}
              >
                <Image
                  src={imageUrl}
                  layout="fill"
                  className="product-page_cover"
                />
                {user?.email === "sdiomant@itlab-studio.com" ? (
                  <div className="change-delete-item-product-block">
                    <div>
                      <StyledButton
                        border
                        size="14"
                        onClick={handlDeleteItemProduct}
                        className="change-delete-item-product-block__delete"
                      >
                        <span class="icon-cross-small" />
                      </StyledButton>
                    </div>
                    <div>
                      <StyledButton
                        border
                        size="14"
                        onClick={handlEditFormActive}
                        className="change-delete-item-product-block__change"
                      >
                        <span className="icon-pencil" />
                      </StyledButton>
                    </div>
                  </div>
                ) : null}
              </div>
              <p>{description}</p>
              <p className="secondary-text">Popular tags for this product:</p>
              {genres?.map((genre, index) => (
                <span key={index} className="product-genre">
                  {genre}
                </span>
              ))}
              <div className="product-page__buy-game">
                <div className="buy-block">
                  <div className="card-price">
                    <span>{price} $</span>
                  </div>
                  <StyledButton
                    border
                    color="main"
                    size="14"
                    onClick={onClickBasket}
                    className={
                      isItemAdded(id) ? "card-bought-btn" : "card-buy-btn"
                    }
                  >
                    <span className="icon-food-trolley" />
                  </StyledButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustoMmodal active={activeModal} setActive={setActiveModal}>
          <form onSubmit={editLogProduct}>
            <InputGroup
              label="Title"
              defaultValue={editProductItem.title}
              type="text"
              onChange={(e) =>
                setEditProductItem({
                  ...editProductItem,
                  title: e.target.value,
                })
              }
            />
            <InputGroup
              as="textarea"
              type="text"
              value={editProductItem.description}
              label="Description"
              onChange={(e) =>
                setEditProductItem({
                  ...editProductItem,
                  description: e.target.value,
                })
              }
            />
            <InputGroup
              label="Price"
              defaultValue={editProductItem.price}
              type="text"
              onChange={(e) =>
                setEditProductItem({
                  ...editProductItem,
                  price: e.target.value,
                })
              }
            />
            <StyledButton color="success">Edit product</StyledButton>
          </form>
        </CustoMmodal>
      </StyledProductItem>
    </>
  );
};

export default ProductItem;
