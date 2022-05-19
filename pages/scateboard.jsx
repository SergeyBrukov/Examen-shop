import axios from "axios";
import InputGroup from "../components/inputGroup/InputGroup";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import ProductCard from "../components/product-card/ProductCard";
import { SkateboardWrapper } from "../styles/ScateboardPageStyle";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product"
  );

  const skateboard = data.filter((products) => {
    if (products?.type === "skate") {
      return products;
    }
  });

  return {
    props: { skatebord: skateboard },
  };
};

const Scateboard = ({ skatebord }) => {

  const countPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollerction] = useState(
    skatebord.slice(0, countPerPage)
  );
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(true);



  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollerction(skatebord.slice(from, to));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (value.length === 0) {
      setCollerction(skatebord.slice(0, countPerPage));
      setTotal(true);
    } else {
      setCollerction(
        skatebord.filter((item) => {
          return item.title.toLowerCase().includes(value.toLowerCase());
        })
      );
      setTotal(false);
    }
  }, [value]);

  return (
    <>
      <SkateboardWrapper size="sm" wrapper="content">
      <div className="search-block">
        <InputGroup
          value={value}
          type="search"
          className="search-block__input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search product"
        />
      </div>
        <div className="content-wrapper">
          {collection.map((skate) => {
            return <ProductCard key={skate.id} prod={skate} />;
          })}
        </div>
      </SkateboardWrapper>
      <Pagination
        className="default-pagination"
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={total ? skatebord.length : null}
      />
    </>
  );
};

export default Scateboard;
