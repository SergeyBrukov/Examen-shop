import styled from "styled-components";

const colorButton = {
  color: String,
  border: Boolean
};

const styleButton = (color, border) => {
  switch (color) {
    case "main":
      return `
        color: ${border ? '#c8b19b': '#fff'};
        background-color: ${border ? 'transparent': '#FF4A32'};
        border: 1px solid #FF4A32;
        &:hover {
          background-color: ${border ? 'rgba(160, 150, 130, 0.15);': '#c929147a'};
          border: 2px solid #c929147a;
        }
    `;
    case "success":
      return `
        color: ${border ? '#43c862': '#fff'};
        background-color: ${border ? 'transparent': '#43c862'};
        border: 2px solid #43c862;
        &:hover {
          background-color: ${border ? 'rgba(46, 210, 38, 0.1);': '#34d65a'};
          border: 2px solid #34d65a;
        }
     `;
    default:
      return `
        color: #323233;
        background: transparent;
        border: 2px solid #323233;
        &:hover {
          background-color: rgba(55, 55, 55, 0.15);
          border: 2px solid #4e4e4e;
        }
      `;
  }
};

export const StyledButton = styled("button", colorButton)`
  ${({ mt }) => mt && `margin-top: ${mt}px`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};
  ${({ width }) => width && `width: ${width}%`};
  ${({ size }) => size && `font-size: ${size}px`};
  padding:  ${({ figure }) => figure === "circle" ? "4px 45px" : "8px 16px"};
  font-weight: ${({ weight }) => weight === "bold" ? "700" : "400"};
  text-align: center;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ figure }) => figure === "circle" ? "35px" : "5px"};
  outline: none;
  cursor: pointer;
  transition: all .3s ease;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
    transform: scale(1) !important;
  `};
  ${({ color, border }) => styleButton(color, border)}
  /*&:hover {
    transform: scale(0.978) translateZ(0);
  }*/
  &:active {
    transform: scale(0.948) translateZ(0);
  }
`;