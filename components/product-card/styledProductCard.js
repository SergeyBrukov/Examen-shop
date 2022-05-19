import styled from "styled-components";
import { StyledContentWrapper } from "../styles/styledContainer";

// export const ProductCardWrapper = styled(StyledContentWrapper)`
//   margin: 20px auto 0;
//   position: relative;
//   max-width: 200px;
//   min-height: auto;
//   max-height: 450px;
//   display: flex;
//   flex-direction: column;
//   .module {
//     margin: 0 0 1em 0;
//     overflow: hidden;
//   }
//   .module p {
//     margin: 0;
//   }

//   .card-description {
//     display: -webkit-box;
//     -webkit-line-clamp: 5;
//     -webkit-box-orient: vertical;
//   }
//   .buy-block {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     .card-buy-btn {
//       padding: 2px 10px;
//       border: none;
//       span {
//         font-size: 25px;
//         color: black;
//       }
//       &:hover {
//         border: none;
//         padding: 2px 10px;
//       }
//     }
//     .card-bought-btn {
//       padding: 2px 10px;
//       position: relative;
//       border: none;
//       span {
//         font-size: 25px;
//         color: green;
//       }
//       &:hover {
//         border: none;
//         padding: 2px 10px;
//         background: none;
//       }
//       &::after {
//         content: "✓";
//         padding: 0 2px;
//         color: green;
//         position: absolute;
//         top: -8px;
//         right: -4px;
//         border: 1px solid green;
//         border-radius:50%;
//       }
//     }
//   }
//   .card-star-rating {
//     margin: 0 auto;
//   }
//   .image-card {
//     cursor: pointer;
//   }
// `;

export const ProductCardWrapper = styled(StyledContentWrapper)`
  padding: 30px;
  margin: 0 auto 30px;

  width: 220px;
  min-height: auto;
  max-height: 450px;
  border-radius: 40px;
  border: 2px solid #f3f3f3;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  .module {
    margin: 0 0 1em 0;
    overflow: hidden;
  }
  .module p {
    margin: 0;
  }

  .card-description {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .buy-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-buy-btn {
      padding: 2px 10px;
      border: none;
      span {
        font-size: 25px;
        color: black;
      }
      &:hover {
        border: none;
        padding: 2px 10px;
      }
    }
    .card-bought-btn {
      padding: 2px 10px;
      position: relative;
      border: none;
      span {
        font-size: 25px;
        color: green;
      }
      &:hover {
        border: none;
        padding: 2px 10px;
        background: none;
      }
      &::after {
        content: "✓";
        padding: 0 2px;
        color: green;
        position: absolute;
        top: -8px;
        right: -4px;
        border: 1px solid green;
        border-radius: 50%;
      }
    }
  }
  .card-star-rating {
    margin: 0 auto;
  }
  .name-card {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }
`;
