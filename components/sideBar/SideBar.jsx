import React from "react";
import { StyledContentContainer, StyledSideBarWrapper } from "./styledSideBar";

const SideBar = ({ open, close, children }) => {
  return (
    <StyledSideBarWrapper>
      <div className={open && "baground-sidebar"}>
        <StyledContentContainer
          onClick={(e) => e.stopPropagation()}
          sidebar={open}
        >
          {children}
        </StyledContentContainer>
      </div>
    </StyledSideBarWrapper>
  );
};

export default SideBar;
