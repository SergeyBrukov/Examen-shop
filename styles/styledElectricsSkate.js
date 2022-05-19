import styled from "styled-components";

export const StyledElectricSkateBoardsWrapper = styled.div`
  position: relative;
  .electric-skateboard-image-block {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .electric-skateboard-info-block {
    max-width: 490px;
    position: absolute;
    top: 50px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%);
    @media screen and (max-width: 768px) {
      position: relative;
      top: 0;
      left: 50%;
    }
  }
`;
