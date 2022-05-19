import styled from "styled-components";

export const StyledTrolleyBar = styled.div`
  width: 2rem;
  height: 2rem;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    color: black;
  }
  .trolley-count {
    padding:0 5px;
    position: absolute;
    color: #FF4A32;
    font-size: 16px;
    font-weight: 700;
    top: -5px;
    right: -6px;
    border: 1px solid #FF4A32;
    border-radius: 50%;
  }
`;
