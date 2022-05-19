import React, { useRef, useState } from "react";
import Leftnavbar from "../leftNav/LeftNavBar";
import { StyledBurger } from "./styledBurger";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.path.includes(burgerRef.current)) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <>
      <StyledBurger ref={burgerRef} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Leftnavbar open={open} setOpen={setOpen} />
    </>
  );
};

export default Burger;
