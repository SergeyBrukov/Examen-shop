import { createGlobalStyle } from "styled-components";

const mainFont = "Roboto";
const mainFontSize = "16px";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: black;
    font-family: ${mainFont};
    font-size: ${mainFontSize};
    font-weight: 400;
    line-height: 1.4;
    background-color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6, p, span, select, input {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
  input {
    border: 1px solid rgba(0,0,0,0.5);
  }

  button {
    padding: 0;
    /* font: inherit; */
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:focus, a:active {
    text-decoration: none;
  }
  
  .default-link {
    color: #66B4E6;
    text-decoration: none;
    transition: all .3s ease;
    &:hover, &:focus, &:active {
      color: #3ACBEB;
      text-decoration: none;
    }
  }
  .drawer-content-wrapper {
    background-color: white;
  }
  
    //AntDesign dialog window
    .default-modal-wrapper {
    .rc-dialog-close {
      color: #193636;
      font-size: 12px;
      text-shadow: none;
      top: 20px;
      outline: none;
      z-index: 1;
      transition: all .3s ease;
      &-x:after {
        content: "\\e910";
        font-size: 12px;
        font-family: 'cryptomc-icons', serif;
      }
    }
    .rc-dialog-header {
      padding: 15px 20px;
      border: none;
      .rc-dialog-title {
        color: #193636;
        font-size: 16px;
        font-weight: 600;
        position: relative;
        &:after {
          content: "";
          width: 100%;
          height: 1px;
          background-color: #F1F1F1;
          position: absolute;
          bottom: -15px;
          left: 0;
        }
      }
    }
    .rc-dialog-body {
      padding: 20px;
    }
    
    .default-modal {
      top: 100px;
      &__content {
        p {
          &:not(:last-child) {
            padding-bottom: 15px;
          }
        }
      }
      &__footer {
        margin-top: 20px;
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(75px, max-content));
        grid-gap: 15px;
        justify-content: end;
        border-top: 1px solid #F1F1F1;
      }
    }
  }
  
  .default-modal-wrapper_confirm {
    .rc-dialog-close {
      display: none;
    }
    .confirm-modal {
      max-width: 400px;
      margin: 10px auto;
      &__content {
        padding-top: 70px;
        position: relative;
        &:before {
          content: "\\e957";
          width: 50px;
          height: 50px;
          color: #FEB967;
          font-size: 50px;
          font-family: 'cryptomc-icons', serif;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      @media screen and (max-width: 576px) {
        max-width: inherit;
        margin: 10px;
      }
    }
  }
  .line {
    height: 2px;
    width: 70px;
    background: #CFCFCF;
    margin:0px auto;
  }
  .default-pagination {
    padding: 30px 0;
    display: flex;
    justify-content: center;

    .rc-pagination-item, .rc-pagination-item-link {
      color: #c8b19b;
      background-color: transparent;
      border: 1px solid #FF4A32;
      border-radius: 5px;
      outline: none;
      a {
        color: black
      }
      &:hover {
        color: white;
        border: 1px solid #FF4A32;
        background-color: #FF4A32;
        a {
          color: white;
        }
      }
    }

    .rc-pagination-item-active {
      color: #fff;
      background: #FF4A32;
      border: 1px solid #FF4A32;
      border-radius: 5px;
      a {
        color: #fff;
      }
      &:hover a {
        color: #fff;
      }
    }
  }
`;
