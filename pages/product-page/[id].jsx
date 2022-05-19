import axios from "axios";
import ProductItem from "../../components/productItem/ProductItem";
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { data } = await axios.get(
    `https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product/${id}`
  );
  return {
    props: { product: data },
  };
};
const Product = ({ product }) => {
  const productId = [product];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div>
          {productId.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
