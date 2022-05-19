import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import AppContext from "../utils/context";
import { useRouter } from "next/router";
import {
  StyledAppruvContainer,
  StyledOrderContainer,
  StyledOrderItemBlock,
  StyledOrderWrapper,
} from "../styles/OrderPageStyle";
import {
  StyledDescription,
  StyledMainTitle,
} from "../components/styles/styledTitle";
import { useAuth } from "../components/autorized/firebese";
import { StyledButton } from "../components/styles/styledButtons";
import Link from "next/link";
import InputGroup from "../components/inputGroup/InputGroup";
import { async } from "@firebase/util";
import axios from "axios";

const Order = () => {
  const user = useAuth();
  const { setOrder, order, setBasket } = useContext(AppContext);
  const [loading, setLoading] = useState(false)

  const [dataOrderUser, setDataOrderUser] = useState({
    email: "",
    tel: "",
    name: "",
  });
  const reEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const reTel = /^[ 0-9]+$/;
  const reName = /^[a-zA-Z ]+$/;
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("The field cannot be empty");
  const [telDirty, setTelDirty] = useState(false);
  const [telError, setTelError] = useState("The field cannot be empty");
  const [nameError, setNameError] = useState("The field cannot be empty");
  const [nameDirty, setNameDirty] = useState(false);
  const [formOrderValid, setFormOrderValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("basket"));
    setOrder(items);
    if (items.length < 1) {
      router.push("/");
    }
  }, []);

  const totalOrderPrice = order.reduce((a, b) => {
    return a + b.price * b.count;
  }, 0);

  const validEmail = (e) => {
    setDataOrderUser({ ...dataOrderUser, email: e.target.value });
    if (!reEmail.test(String(e.target.value).toLowerCase())) {
      setEmailDirty(true);
      setEmailError("Invalid Email");
      if (!e.target.value) {
        setEmailError("The field cannot be empty");
      }
    } else {
      setEmailError("");
    }
  };

  const validName = (e) => {
    setDataOrderUser({ ...dataOrderUser, name: e.target.value });
    if (!reName.test(String(e.target.value).toLowerCase())) {
      setNameDirty(true);
      setNameError("Invalid Name");
      if (!e.target.value) {
        setNameError("The field cannot be empty");
      }
    } else {
      setNameError("");
    }
  };

  const validTel = (e) => {
    setDataOrderUser({ ...dataOrderUser, tel: e.target.value });
    if (!reTel.test(String(e.target.value).toLowerCase())) {
      setTelDirty(true);
      setTelError("Invalid Tel");
      if (!e.target.value) {
        setTelError("The field cannot be empty");
      }
    } else {
      setTelError("");
    }
  };

  useEffect(() => {
    if (emailError || telError || nameError) {
      setFormOrderValid(false);
    } else {
      setFormOrderValid(true);
    }
  }, [emailError, telError]);


 async function handlMakeOrder () {
    const userOrder = order.concat(dataOrderUser);
    setLoading(true)
      try {
        await axios.post ("https://6271776925fed8fcb5e6a1e9.mockapi.io/product/order", userOrder)
        await router.push("/");
        localStorage.removeItem("basket");
        await setBasket([]);
        setLoading(false)
      } catch {
          console.error("Error")
      }

  }

  return (
    <StyledOrderWrapper>
      <StyledOrderContainer>
        <StyledMainTitle
          as="h2"
          size="30"
          weight="700"
          color="black"
          position="center"
        >
          Your order
        </StyledMainTitle>
        <div className="items-container">
          {order &&
            order.map((orderItem) => {
              return (
                <StyledOrderItemBlock key={orderItem.id}>
                  <Image
                    src={orderItem.imageUrl}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                  <div className="product-page__right">
                    <StyledMainTitle
                      as="h2"
                      size="25"
                      weight="600"
                      color="black"
                      position="left"
                    >
                      {orderItem.title}
                    </StyledMainTitle>
                    <div className="card-price-count">
                      <span>Qty: {orderItem.count}</span>
                      <span>Price: {orderItem.price * orderItem.count} $</span>
                    </div>
                  </div>
                </StyledOrderItemBlock>
              );
            })}
        </div>

        <StyledDescription
          as="div"
          mt="14"
          mb="20"
          size="18"
          weight="700"
          color="black"
          position="right"
        >
          <span>Total price : {totalOrderPrice} $</span>
        </StyledDescription>
        {user ? (
          <StyledAppruvContainer>
            <InputGroup
              label="Name"
              value={dataOrderUser.name}
              type="text"
              onChange={validName}
              onBlur={() => setNameDirty(true)}
              error={nameDirty && nameError ? nameError : false}
            />
            <InputGroup
              label="E-mail"
              value={dataOrderUser.email}
              onChange={validEmail}
              onBlur={() => setEmailDirty(true)}
              error={emailDirty && emailError ? emailError : false}
            />
            <InputGroup
              type="tel"
              label="Telephone"
              placeholder="+380(__)___-__-__"
              value={dataOrderUser.tel}
              onChange={validTel}
              onBlur={() => setTelDirty(true)}
              error={telDirty && telError ? telError : false}
            />
            <div className="make-order-block">
            <StyledButton
              className="make-order-block__btn"
              onClick={handlMakeOrder}
              disabled={!formOrderValid || loading ? true : false}
              color="success"
            >
              Make an order
            </StyledButton>
            </div>

          </StyledAppruvContainer>
        ) : (
          <div className="autorized-container">
            <StyledDescription
              mt="14"
              mb="20"
              size="18"
              weight="700"
              color="red"
              position="right"
            >
              To place an order please login/registration
            </StyledDescription>
            <div className="autorized-container__btn-block">
              <div className="login-btn">
                <StyledButton>
                  <Link href="/autorized">
                    <a>Login</a>
                  </Link>
                </StyledButton>
              </div>
              <div>
                <StyledButton
                  className="registration-btn"
                  onClick={() =>
                    router.push({
                      pathname: "/autorized",
                      query: { registration: true },
                    })
                  }
                >
                  Registration
                </StyledButton>
              </div>
            </div>
          </div>
        )}
      </StyledOrderContainer>
    </StyledOrderWrapper>
  );
};

export default Order;
