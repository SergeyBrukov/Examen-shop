import styled from "styled-components";

export const StyledCustomModal = styled.div`
  .modal-block {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0.5);    
    z-index: 1000;
  }

  .modal-content {
    padding: 25px;
    background-color: white;
    border-radius: 16px;
    min-width: 500px;
  }

  .modal-block.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
