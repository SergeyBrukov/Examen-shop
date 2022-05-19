import styled from "styled-components";

export const StyledCustomSliderWrapper = styled.div`
  .slick-list {
    margin: 0 auto;
  }
  .slick-arrow {
    cursor: pointer;
  }
  .slick-prev {
      left: 25px;
      z-index:1;
      &::before {
      font-family: Roboto;
      font-size: 40px;
      padding: 0 2px;
      color: black;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 50%;
    }
  }
  .slick-next {
    right: 25px;
    &::before {
      font-family: Roboto;
      font-size: 40px;
      color: black;
      background: rgba(255, 255, 255, 0.75);
      border-radius: 50%;
    }
  }
`;

export const StyledImage = styled.div`
  cursor: pointer;
`;
