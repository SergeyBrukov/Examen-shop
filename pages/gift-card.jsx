import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

// export const getStaticProps = async () => {

//   const { data } = await axios.get(
//     "https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product"
//   );

//   const scooter = data.filter((prod) => {
//     if(prod?.type) {
//       return prod.type.includes("scooter");
//     }
//   });
//   return {
//     props: { products: scooter },
//   };
// };



const GiftCard = ({ products }) => {
  // const [basket, setBasket] = useState([]);
  // function foo (item) {
  //   setBasket([...basket, item])
  // }
  // console.log(basket)
  return (
    <div>
      {/* {products.map((product) => {
        return (
          <div key={product.id}>
              <div style={{width: '100px', height: '100px', position: 'relative'}}>
                <Image src={product.imageUrl} layout='fill'/>
              </div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <button onClick={() => foo(product)}>+</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default GiftCard;
