import axios from "axios";
import React, { useState } from "react";
import InputGroup from "../components/inputGroup/InputGroup";
import { StyledButton } from "../components/styles/styledButtons";
import {
  StyledNewProductContainer,
  StyledNewProductWrapper,
} from "../styles/AddNewProductPage";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product"
  );

  return {
    props: { product: data },
  };
};

const AddNewProduct = ({ product }) => {
  const [prodcut, setProduct] = useState(product)
  const [editProductItem, setEditProductItem] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
    type: "",
    video: ""
  });
console.log(product)
  const addNewProduct = async(e) => {
    await axios.post("https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product",editProductItem)
  };
  console.log(product)
  return (
    <StyledNewProductWrapper>
      <StyledNewProductContainer>
        <form onSubmit={addNewProduct}>
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
            label="Type"
            defaultValue={editProductItem.type}
            type="text"
            onChange={(e) =>
              setEditProductItem({
                ...editProductItem,
                type: e.target.value,
              })
            }
          />
          <InputGroup
            type="text"
            value={editProductItem.imageUrl}
            label="ImageUrl"
            onChange={(e) =>
              setEditProductItem({
                ...editProductItem,
                imageUrl: e.target.value,
              })
            }
          />
                    <InputGroup
            type="text"
            value={editProductItem.video}
            label="Video"
            onChange={(e) =>
              setEditProductItem({
                ...editProductItem,
                video: e.target.value,
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
          <StyledButton color="success">Add product</StyledButton>
        </form>
      </StyledNewProductContainer>
    </StyledNewProductWrapper>
  );
};

export default AddNewProduct;
