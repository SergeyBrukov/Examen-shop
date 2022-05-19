import React from "react";
import { StyledCustomModal } from "./modal";

const CustoMmodal = ({ children, active, setActive }) => {
  return (
    <StyledCustomModal>
      <div
        className={active ? "modal-block active" : "modal-block"}
        onClick={() => setActive(false)}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </StyledCustomModal>
  );
};

export default CustoMmodal;
