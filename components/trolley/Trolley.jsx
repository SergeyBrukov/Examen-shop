import Drawer from "rc-drawer";
import React, { useContext, useRef, useState } from "react";
import AppContext from "../../utils/context";
import Basket from "../basket/Basket";
import SideBar from "../sideBar/SideBar";
import { StyledTrolleyBar } from "./styleTroley";

const Trolley = () => {
  const { visibleTroley, setVisibleTroley, setBasket, basket } = useContext(AppContext);

  const isOpen = () => {
    setVisibleTroley(true);
  };

  const isClose = () => {
    setVisibleTroley(false);
  };
  const sideBarRef = useRef();

  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.path.includes(sideBarRef.current)) {
        setVisibleTroley(false);
      }
    });
  }, []);
  return (
    <>
      <StyledTrolleyBar ref={sideBarRef} onClick={isOpen}>
        <span className="icon-food-trolley"></span>
        <span className="trolley-count">{basket.length}</span>
      </StyledTrolleyBar>
      <SideBar open={visibleTroley} close={setVisibleTroley}>
        <Basket setVisibleTroley={setVisibleTroley} />
      </SideBar>
    </>
  );
};

export default Trolley;
