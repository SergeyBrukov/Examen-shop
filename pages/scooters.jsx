import axios from "axios";
import ProductCard from "../components/product-card/ProductCard";
import Pagination from "rc-pagination";
import { ScooterdWrapper } from "../styles/ScooterPageStyle";
import { useEffect, useState } from "react";
import InputGroup from "../components/inputGroup/InputGroup";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://6271776925fed8fcb5e6a1e9.mockapi.io/product/product"
  );
  const product = data.filter((prod) => {
    if (prod?.type === "scooter") {
      return prod;
    }
  });

  return {
    props: { scooters: product },
  };
};

const Scooters = ({ scooters }) => {
  const countPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollerction] = useState(
    scooters.slice(0, countPerPage)
  );
  const [total, setTotal] = useState(true);
  const [value, setValue] = useState("");

  const updatePage = (p) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollerction(scooters.slice(from, to));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (value.length === 0) {
      setCollerction(scooters.slice(0, countPerPage));
      setTotal(true);
    } else {
      setCollerction(
        scooters.filter((item) => {
          return item.title.toLowerCase().includes(value.toLowerCase());
        })
      );
      setTotal(false);
    }
  }, [value]);

  return (
    <>
      <Head>
        <title>Scooter</title>
      </Head>
      <ScooterdWrapper>
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
          {collection.map((scooter) => {
            return <ProductCard key={scooter.id} prod={scooter} />;
          })}
        </div>
      </ScooterdWrapper>
      <Pagination
        className="default-pagination"
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={total ? scooters.length : null}
      />
    </>
  );
};

export default Scooters;
